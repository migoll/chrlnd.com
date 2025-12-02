import { ASCII_NAME, ASCII_GREETING } from "@/lib/terminal/ascii-art";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

// Key component for visual key representation
function Key({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <kbd className={`inline-flex items-center justify-center min-w-[24px] h-6 px-2 text-xs font-semibold text-[#f0f0f0] bg-[#2a2a2a] border border-[#404040] rounded shadow-sm ${className}`}>
      {children}
    </kbd>
  );
}

export function AsciiGreeting() {
  return (
    <div className="text-[#f0f0f0] font-mono mb-6">
      <pre className="text-[#f0f0f0] mb-4 text-base leading-[1.1] font-mono whitespace-pre">{ASCII_NAME}</pre>
      <div className="text-[#f0f0f0] text-sm mt-4 whitespace-pre-line">{ASCII_GREETING}</div>
      <div className="text-[#f0f0f0] text-sm mt-4">
        <p className="mb-2">Standard keybinds:</p>
        <ul className="list-none space-y-2 ml-0">
          <li className="flex items-center gap-2">
            <Key>
              <span className="text-[10px]">⇥</span>
            </Key>
            <span>Tab (autocomplete)</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Key>Ctrl</Key>
              <span className="text-xs">+</span>
              <Key className="min-w-[70px]">
                <span className="text-xs font-normal">Space</span>
              </Key>
              <span className="text-xs text-[#888]">/</span>
              <Key>Ctrl</Key>
              <span className="text-xs">+</span>
              <Key>I</Key>
            </div>
            <span>Ctrl+Space or Ctrl+I (intellisense)</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Key className="p-1">
                <ArrowUp className="w-3 h-3" />
              </Key>
              <Key className="p-1">
                <ArrowDown className="w-3 h-3" />
              </Key>
              <Key className="p-1">
                <ArrowLeft className="w-3 h-3" />
              </Key>
              <Key className="p-1">
                <ArrowRight className="w-3 h-3" />
              </Key>
            </div>
            <span>Arrow keys (navigate)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

