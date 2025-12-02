"use client";

import { useState, useRef, useEffect } from "react";
import { CommandInput } from "./command-input";
import { CommandOutput } from "./command-output";
import { AsciiGreeting } from "./ascii-greeting";
import {
  TerminalMode,
  commandRegistry,
  CommandOutput as CommandOutputType,
} from "@/lib/terminal/command-registry";
import { registerDefaultCommands } from "@/lib/terminal/commands/default-commands";
import { registerMyWorkCommands } from "@/lib/terminal/commands/my-work-commands";
import { registerAboutCommands } from "@/lib/terminal/commands/about-commands";

// Register all commands
registerDefaultCommands();
registerMyWorkCommands();
registerAboutCommands();

interface OutputLine {
  type: "command" | "output";
  content: string | CommandOutputType | React.ReactNode;
}

export function TerminalShell() {
  const [mode, setMode] = useState<TerminalMode>("default");
  const [showGreeting, setShowGreeting] = useState(true);
  const [outputLines, setOutputLines] = useState<OutputLine[]>([]);
  const outputRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const mouseDownPosRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [outputLines]);

  useEffect(() => {
    // Prevent body scroll when terminal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    // Handle global terminal keybinds
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      const isInputFocused = activeElement?.tagName === 'INPUT' || activeElement?.tagName === 'TEXTAREA';

      // Ctrl+L or Cmd+K - Clear terminal (works everywhere)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'l' || e.key === 'L' || e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setOutputLines([]);
        setShowGreeting(true);
        // Refocus input after clear
        setTimeout(() => {
          const input = document.querySelector('input[type="text"]') as HTMLInputElement;
          if (input) {
            input.focus();
          }
        }, 0);
        return;
      }

      // Ctrl+C - Copy (let browser handle if text is selected, otherwise do nothing)
      if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        const selection = window.getSelection();
        if (selection && selection.toString().length > 0) {
          // Let browser handle copy
          return;
        }
        // If no selection and not in input, prevent default (terminal behavior)
        if (!isInputFocused) {
          e.preventDefault();
        }
        return;
      }

      // Ctrl+V - Paste (only if input is focused)
      if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
        if (!isInputFocused) {
          e.preventDefault();
          // Focus input and paste
          const input = document.querySelector('input[type="text"]') as HTMLInputElement;
          if (input) {
            input.focus();
            // Browser will handle paste after focus
          }
        }
        return;
      }

      // Ctrl+A - Select all
      if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
        if (!isInputFocused) {
          e.preventDefault();
          const selection = window.getSelection();
          const range = document.createRange();
          if (outputRef.current) {
            range.selectNodeContents(outputRef.current);
            selection?.removeAllRanges();
            selection?.addRange(range);
          }
        }
        // If in input, let browser handle select all
        return;
      }

      // Ctrl+Space or Ctrl+I - Open intellisense (when input is focused, let input handler deal with it)
      // On macOS, Ctrl+Space is often intercepted by system, so Ctrl+I is more reliable
      if (isInputFocused && e.ctrlKey && !e.metaKey && (e.key === ' ' || e.key === 'Space' || e.code === 'Space' || e.key === 'i' || e.key === 'I')) {
        // Let the input component handle this - don't prevent default here
        return;
      }

      // Escape - Clear selection and focus input
      if (e.key === 'Escape') {
        if (!isInputFocused) {
          const selection = window.getSelection();
          if (selection) {
            selection.removeAllRanges();
          }
          const input = document.querySelector('input[type="text"]') as HTMLInputElement;
          if (input) {
            input.focus();
          }
        }
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleCommand = (command: string) => {
    // Hide greeting after first command
    if (showGreeting) {
      setShowGreeting(false);
    }

    // Add command to output
    setOutputLines((prev) => [
      ...prev,
      { type: "command", content: command },
    ]);

    // Parse command
    const parts = command.trim().split(/\s+/);
    const commandName = parts[0];
    const args = parts.slice(1);

    // Get command from registry
    const cmd = commandRegistry.getCommand(commandName);

    if (!cmd) {
      setOutputLines((prev) => [
        ...prev,
        {
          type: "output",
          content: {
            type: "error",
            content: `Command not found: ${commandName}. Type 'help' for available commands.`,
          },
        },
      ]);
      return;
    }

    // Check if command is available in current mode
    if (cmd.mode && !cmd.mode.includes(mode)) {
      setOutputLines((prev) => [
        ...prev,
        {
          type: "output",
          content: {
            type: "error",
            content: `Command '${commandName}' is not available in ${mode} mode. Type 'help' for available commands.`,
          },
        },
      ]);
      return;
    }

    // Execute command
    const result = cmd.handler(args, mode);

    // Handle mode changes
    if (result.type === "mode_change" && result.mode) {
      const oldMode = mode;
      setMode(result.mode);
      
      // Auto-show help when switching to any mode (shows available commands for that mode)
      if (oldMode !== result.mode) {
        // Execute help command for the new mode
        setTimeout(() => {
          const helpCmd = commandRegistry.getCommand("help");
          if (helpCmd) {
            const helpResult = helpCmd.handler([], result.mode);
            setOutputLines((prev) => [
              ...prev,
              { type: "output", content: helpResult },
            ]);
          }
        }, 0);
      }
    }

    // Handle clear
    if (result.type === "clear") {
      setOutputLines([]);
      setShowGreeting(true);
      return;
    }

    // Add output
    setOutputLines((prev) => [...prev, { type: "output", content: result }]);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseDownPosRef.current = { x: e.clientX, y: e.clientY };
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (mouseDownPosRef.current) {
      const distance = Math.sqrt(
        Math.pow(e.clientX - mouseDownPosRef.current.x, 2) +
        Math.pow(e.clientY - mouseDownPosRef.current.y, 2)
      );
      if (distance > 5) {
        isDraggingRef.current = true;
      }
    }
  };

  const handleTerminalClick = (e: React.MouseEvent) => {
    // If user was dragging (selecting text), don't focus input
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      mouseDownPosRef.current = null;
      return;
    }
    
    // Check if there's a text selection
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      return;
    }
    
    // Focus input when clicking anywhere in terminal (but not on input area)
    const target = e.target as HTMLElement;
    if (target.tagName !== 'INPUT' && !target.closest('.command-input-container')) {
      const input = document.querySelector('input[type="text"]') as HTMLInputElement;
      if (input && document.activeElement !== input) {
        input.focus();
      }
    }
    
    mouseDownPosRef.current = null;
  };

  return (
    <div 
      className="fixed inset-0 h-screen w-screen bg-[#111111] text-[#f0f0f0] font-mono overflow-hidden flex flex-col z-[9999] terminal-container" 
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onClick={handleTerminalClick}
    >
      <div
        ref={outputRef}
        className="flex-1 overflow-y-auto p-6"
        style={{ scrollBehavior: "smooth" }}
      >
        {showGreeting && <AsciiGreeting />}
        {outputLines.map((line, index) => (
          <div key={index} className="mt-2">
            {line.type === "command" ? (
              <div className="text-[#f0f0f0] font-mono text-sm">
                <span className="text-[#888]">
                  {mode === "my-work"
                    ? "my-work"
                    : mode === "about"
                    ? "about"
                    : "chrlnd"}
                  @portfolio:~$
                </span>{" "}
                {typeof line.content === "string" ? line.content : String(line.content)}
              </div>
            ) : typeof line.content === "object" &&
              line.content !== null &&
              "type" in line.content ? (
              <CommandOutput output={line.content as CommandOutputType} />
            ) : (
              typeof line.content === "string" ? line.content : String(line.content)
            )}
          </div>
        ))}
      </div>
      <div className="border-t border-[#333] p-4 bg-[#111111] flex-shrink-0 relative z-10">
        <CommandInput
          onExecute={handleCommand}
          mode={mode}
          getAutocompleteSuggestions={(input, currentMode) =>
            commandRegistry.getAutocompleteSuggestions(input, currentMode)
          }
        />
      </div>
    </div>
  );
}

