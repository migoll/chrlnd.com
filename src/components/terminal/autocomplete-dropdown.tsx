"use client";

import { useEffect, useRef } from "react";

interface AutocompleteDropdownProps {
  suggestions: string[];
  visible: boolean;
  onSelect: (suggestion: string) => void;
  inputValue: string;
  selectedIndex: number;
}

export function AutocompleteDropdown({
  suggestions,
  visible,
  onSelect,
  inputValue,
  selectedIndex,
}: AutocompleteDropdownProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedItemRef = useRef<HTMLDivElement>(null);

  // Scroll selected item into view
  useEffect(() => {
    if (selectedIndex >= 0 && selectedItemRef.current && containerRef.current) {
      const container = containerRef.current;
      const item = selectedItemRef.current;
      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();

      if (itemRect.top < containerRect.top) {
        container.scrollTop -= containerRect.top - itemRect.top + 8;
      } else if (itemRect.bottom > containerRect.bottom) {
        container.scrollTop += itemRect.bottom - containerRect.bottom + 8;
      }
    }
  }, [selectedIndex]);

  if (!visible || suggestions.length === 0) {
    return null;
  }

  const words = inputValue.split(" ").filter((w) => w.length > 0);
  const lastWord = words[words.length - 1] || "";
  const prefix = words.length > 1 ? words.slice(0, -1).join(" ") + " " : "";

  return (
    <div 
      ref={containerRef}
      className="absolute bottom-full left-0 mb-1 bg-[#1a1a1a] border border-[#333] rounded shadow-lg max-h-48 overflow-y-auto z-50 min-w-[300px]" 
      onClick={(e) => e.stopPropagation()}
    >
      {suggestions.map((suggestion, index) => {
        const displayText = prefix + suggestion;
        const highlightStart = prefix.length;
        const highlightEnd = highlightStart + lastWord.length;
        const isSelected = index === selectedIndex;

        return (
          <div
            key={index}
            ref={isSelected ? selectedItemRef : null}
            onClick={() => onSelect(suggestion)}
            className={`px-3 py-2 cursor-pointer text-[#f0f0f0] font-mono text-sm flex items-center gap-2 transition-colors ${
              isSelected 
                ? "bg-[#2a4a6a] hover:bg-[#2a4a6a]" 
                : "hover:bg-[#2a2a2a]"
            }`}
          >
            <span className="text-[#666]">→</span>
            <span>
              {displayText.slice(0, highlightStart)}
              <span className="bg-[#333] text-[#f0f0f0]">
                {displayText.slice(highlightStart, highlightEnd)}
              </span>
              {displayText.slice(highlightEnd)}
            </span>
          </div>
        );
      })}
    </div>
  );
}

