export type TerminalMode = "default" | "my-work" | "about";

export interface CommandDefinition {
  name: string;
  description: string;
  usage?: string;
  aliases?: string[];
  mode?: TerminalMode[];
  primary?: boolean; // Mark as primary/main command for the mode
  handler: (args: string[], currentMode?: TerminalMode) => CommandOutput;
  autocomplete?: (args: string[]) => string[];
}

export interface CommandOutput {
  type: "text" | "error" | "success" | "link" | "list" | "mode_change" | "clear";
  content: string | string[];
  links?: { text: string; url: string }[];
  mode?: TerminalMode;
}

export class CommandRegistry {
  private commands: Map<string, CommandDefinition> = new Map();

  register(command: CommandDefinition): void {
    this.commands.set(command.name.toLowerCase(), command);
    if (command.aliases) {
      command.aliases.forEach((alias) => {
        this.commands.set(alias.toLowerCase(), command);
      });
    }
  }

  getCommand(name: string): CommandDefinition | undefined {
    return this.commands.get(name.toLowerCase());
  }

  getCommandsForMode(mode: TerminalMode): CommandDefinition[] {
    return Array.from(this.commands.values()).filter(
      (cmd) => !cmd.mode || cmd.mode.includes(mode)
    );
  }

  getAutocompleteSuggestions(
    input: string,
    mode: TerminalMode
  ): string[] {
    const suggestions: string[] = [];
    const inputLower = input.toLowerCase().trim();
    // Split by space but keep track of trailing spaces
    const words = input.split(" ").filter((w) => w.length > 0);
    const hasTrailingSpace = input.endsWith(" ") && input.trim().length > 0;
    const lastWord = hasTrailingSpace ? "" : (words[words.length - 1] || "");
    const lastWordLower = lastWord.toLowerCase();

    if (words.length === 1 && !hasTrailingSpace) {
      // First word (no trailing space) - suggest commands
      const commands = this.getCommandsForMode(mode);
      commands.forEach((cmd) => {
        const cmdNameLower = cmd.name.toLowerCase();
        // Exact match or starts with
        if (cmdNameLower.startsWith(inputLower) || inputLower === "") {
          suggestions.push(cmd.name);
        }
        if (cmd.aliases) {
          cmd.aliases.forEach((alias) => {
            const aliasLower = alias.toLowerCase();
            if (aliasLower.startsWith(inputLower) || inputLower === "") {
              suggestions.push(alias);
            }
          });
        }
      });
    } else {
      // Subsequent words - check if command has autocomplete
      const commandName = words[0].toLowerCase();
      const command = this.getCommand(commandName);
      if (command?.autocomplete) {
        const args = words.slice(1);
        const completions = command.autocomplete(args);
        completions.forEach((completion) => {
          const completionLower = completion.toLowerCase();
          // If last word is empty (user typed space), show all completions
          // Otherwise match if starts with or contains last word
          if (lastWordLower === "" || completionLower.startsWith(lastWordLower) || completionLower.includes(lastWordLower)) {
            suggestions.push(completion);
          }
        });
      }
      // Note: Commands should implement their own autocomplete functions
      // This fallback is not needed as commands like 'view' and 'open' already have autocomplete
    }

    // Remove duplicates and sort by relevance
    const uniqueSuggestions = Array.from(new Set(suggestions));
    
    // Helper to check if a command is primary for the current mode
    const isPrimaryCommand = (cmdName: string): boolean => {
      const cmd = this.getCommand(cmdName);
      return cmd?.primary === true && (!cmd.mode || cmd.mode.includes(mode));
    };
    
    const sorted = uniqueSuggestions.sort((a, b) => {
      const aLower = a.toLowerCase();
      const bLower = b.toLowerCase();
      const lastWordLower = lastWord.toLowerCase();
      
      const aIsPrimary = isPrimaryCommand(a);
      const bIsPrimary = isPrimaryCommand(b);
      
      // When input is empty, primary commands come first
      if (inputLower === "" || lastWordLower === "") {
        if (aIsPrimary && !bIsPrimary) return -1;
        if (!aIsPrimary && bIsPrimary) return 1;
        // If both are primary or both are not, sort alphabetically
        return aLower.localeCompare(bLower);
      }
      
      // When typing, prioritize by match quality first, then primary status
      
      // Exact match first
      const aExact = aLower === lastWordLower;
      const bExact = bLower === lastWordLower;
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;
      // If both exact, prioritize primary
      if (aExact && bExact) {
        if (aIsPrimary && !bIsPrimary) return -1;
        if (!aIsPrimary && bIsPrimary) return 1;
      }
      
      // Starts with second
      const aStarts = aLower.startsWith(lastWordLower);
      const bStarts = bLower.startsWith(lastWordLower);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      // If both start with, prioritize primary
      if (aStarts && bStarts) {
        if (aIsPrimary && !bIsPrimary) return -1;
        if (!aIsPrimary && bIsPrimary) return 1;
      }
      
      // Contains third
      const aContains = aLower.includes(lastWordLower);
      const bContains = bLower.includes(lastWordLower);
      if (aContains && !bContains) return -1;
      if (!aContains && bContains) return 1;
      // If both contain, prioritize primary
      if (aContains && bContains) {
        if (aIsPrimary && !bIsPrimary) return -1;
        if (!aIsPrimary && bIsPrimary) return 1;
      }
      
      // If one matches (starts/contains) and other doesn't, the matcher wins
      // (already handled above)
      
      // Alphabetical for same priority
      return aLower.localeCompare(bLower);
    });

    return sorted.slice(0, 10); // Limit to 10 suggestions
  }
}

export const commandRegistry = new CommandRegistry();

