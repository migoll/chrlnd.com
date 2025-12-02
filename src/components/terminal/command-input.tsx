"use client";

import { useState, useRef, useEffect } from "react";
import { AutocompleteDropdown } from "./autocomplete-dropdown";
import { TerminalMode } from "@/lib/terminal/command-registry";

interface CommandInputProps {
  onExecute: (command: string) => void;
  mode: TerminalMode;
  getAutocompleteSuggestions: (input: string, mode: TerminalMode) => string[];
}

export function CommandInput({
  onExecute,
  mode,
  getAutocompleteSuggestions,
}: CommandInputProps) {
  const [input, setInput] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    setHistoryIndex(-1);

    // Get suggestions - pass the value as-is to handle trailing spaces
    const newSuggestions = getAutocompleteSuggestions(value, mode);
    setSuggestions(newSuggestions);
    
    // Show suggestions when:
    // 1. User has typed something AND there are matching suggestions
    // 2. User just typed a space (after a command) - show next-level suggestions
    const endsWithSpace = value.endsWith(" ") && value.trim().length > 0;
    const hasInput = value.trim().length > 0;
    const shouldShow = newSuggestions.length > 0 && (hasInput || endsWithSpace);
    
    setShowSuggestions(shouldShow);
    setSelectedSuggestionIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Ctrl+C - Copy or interrupt (if input is empty)
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
      if (input.length === 0) {
        // Empty input, let it through (might be used for copy)
        return;
      }
      // Otherwise let browser handle copy
      return;
    }

    // Ctrl+V - Paste
    if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
      // Let browser handle paste
      return;
    }

    // Ctrl+A - Select all in input
    if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
      // Let browser handle select all
      return;
    }

    // Ctrl+Space or Ctrl+I - Open intellisense/autocomplete
    // Ctrl+I is more reliable on macOS where Ctrl+Space is often intercepted by system
    const isSpace = e.key === ' ' || e.key === 'Space' || e.code === 'Space';
    const isIntellisense = (e.ctrlKey && !e.metaKey && isSpace) || (e.ctrlKey && !e.metaKey && (e.key === 'i' || e.key === 'I'));
    
    if (isIntellisense) {
      e.preventDefault();
      e.stopPropagation();
      const newSuggestions = getAutocompleteSuggestions(input, mode);
      if (newSuggestions.length > 0) {
        setSuggestions(newSuggestions);
        setShowSuggestions(true);
        setSelectedSuggestionIndex(0);
      } else {
        // Even if no suggestions for current input, try to show available commands
        const emptySuggestions = getAutocompleteSuggestions("", mode);
        if (emptySuggestions.length > 0) {
          setSuggestions(emptySuggestions);
          setShowSuggestions(true);
          setSelectedSuggestionIndex(0);
        }
      }
      return;
    }

    // Ctrl+L or Cmd+K - Clear terminal (when in input)
    if ((e.ctrlKey || e.metaKey) && (e.key === 'l' || e.key === 'L' || e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      // This will be handled by the terminal shell
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      // If a suggestion is selected, use it
      if (showSuggestions && selectedSuggestionIndex >= 0 && selectedSuggestionIndex < suggestions.length) {
        handleSelectSuggestion(suggestions[selectedSuggestionIndex]);
        // Execute the command immediately after selecting
        const words = input.split(" ").filter((w) => w.length > 0);
        const command = words.length > 1 
          ? words.slice(0, -1).join(" ") + " " + suggestions[selectedSuggestionIndex]
          : suggestions[selectedSuggestionIndex];
        if (command.trim()) {
          setCommandHistory((prev) => [...prev, command.trim()]);
          setInput("");
          setHistoryIndex(-1);
          setShowSuggestions(false);
          setSelectedSuggestionIndex(-1);
          onExecute(command.trim());
        }
      } else {
        const command = input.trim();
        if (command) {
          setCommandHistory((prev) => [...prev, command]);
          setInput("");
          setHistoryIndex(-1);
          setShowSuggestions(false);
          setSelectedSuggestionIndex(-1);
          onExecute(command);
        }
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (showSuggestions && suggestions.length > 0) {
        // Navigate dropdown
        const newIndex = selectedSuggestionIndex <= 0 
          ? suggestions.length - 1 
          : selectedSuggestionIndex - 1;
        setSelectedSuggestionIndex(newIndex);
      } else if (commandHistory.length > 0) {
        // Navigate history
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
        setShowSuggestions(false);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (showSuggestions && suggestions.length > 0) {
        // Navigate dropdown
        const newIndex = selectedSuggestionIndex >= suggestions.length - 1
          ? 0
          : selectedSuggestionIndex + 1;
        setSelectedSuggestionIndex(newIndex);
      } else if (historyIndex !== -1) {
        // Navigate history
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
        setShowSuggestions(false);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (suggestions.length > 0) {
        const indexToUse = selectedSuggestionIndex >= 0 ? selectedSuggestionIndex : 0;
        handleSelectSuggestion(suggestions[indexToUse]);
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    }
  };

  const handleSelectSuggestion = (suggestion: string) => {
    const words = input.split(" ").filter((w) => w.length > 0);
    if (words.length > 1) {
      const prefix = words.slice(0, -1).join(" ") + " ";
      setInput(prefix + suggestion);
    } else {
      setInput(suggestion);
    }
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  return (
    <div className="relative flex items-center gap-2 command-input-container" onClick={(e) => e.stopPropagation()}>
      <span className="text-[#888] font-mono text-sm">
        {mode === "my-work"
          ? "my-work"
          : mode === "about"
          ? "about"
          : "chrlnd"}
        @portfolio:~$
      </span>
      <div className="flex-1 relative">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none text-[#f0f0f0] font-mono text-sm flex-1 w-full caret-[#f0f0f0] selection:bg-[#333] selection:text-[#f0f0f0] pointer-events-auto"
          autoFocus
          autoComplete="off"
          spellCheck="false"
        />
        <AutocompleteDropdown
          suggestions={suggestions}
          visible={showSuggestions}
          onSelect={handleSelectSuggestion}
          inputValue={input}
          selectedIndex={selectedSuggestionIndex}
        />
      </div>
      <span className="text-[#f0f0f0] font-mono animate-pulse cursor-blink">▊</span>
    </div>
  );
}

