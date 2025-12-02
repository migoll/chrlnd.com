import {
  CommandDefinition,
  commandRegistry,
  TerminalMode,
} from "../command-registry";

// Help command
const helpCommand: CommandDefinition = {
  name: "help",
  description: "Display available commands",
  mode: ["default", "my-work", "about"],
  handler: (args, currentMode?: TerminalMode) => {
    const mode = currentMode || "default";
    const commands = commandRegistry.getCommandsForMode(mode);
    const commandList = commands.map((cmd) => {
      const usage = cmd.usage ? ` ${cmd.usage}` : "";
      return `  ${cmd.name}${usage} - ${cmd.description}`;
    });

    return {
      type: "text",
      content: [
        mode === "my-work"
          ? "My Work Mode Commands:"
          : mode === "about"
          ? "About Mode Commands:"
          : "Available Commands:",
        "",
        ...commandList,
        "",
        "Tip: Use Tab or Ctrl+Space for autocomplete suggestions. Arrow keys to navigate.",
      ],
    };
  },
};

// Clear command
const clearCommand: CommandDefinition = {
  name: "clear",
  description: "Clear the terminal screen",
  aliases: ["cls"],
  mode: ["default", "my-work", "about"],
  handler: () => {
    return {
      type: "clear",
      content: "",
    };
  },
};

// My-work mode command
const myWorkCommand: CommandDefinition = {
  name: "my-work",
  description: "Switch to my-work mode to explore case studies",
  mode: ["default"],
  primary: true,
  handler: () => {
    return {
      type: "mode_change",
      content: "Switched to my-work mode. Type 'help' for available commands.",
      mode: "my-work",
    };
  },
};

// About mode command
const aboutCommand: CommandDefinition = {
  name: "about",
  description: "Switch to about mode to learn more about me",
  mode: ["default"],
  primary: true,
  handler: () => {
    return {
      type: "mode_change",
      content: "Switched to about mode. Type 'help' for available commands.",
      mode: "about",
    };
  },
};

// Back command
const backCommand: CommandDefinition = {
  name: "back",
  description: "Return to default mode",
  aliases: ["exit"],
  mode: ["my-work", "about"],
  handler: () => {
    return {
      type: "mode_change",
      content: "Returned to default mode.",
      mode: "default",
    };
  },
};

export function registerDefaultCommands(): void {
  commandRegistry.register(helpCommand);
  commandRegistry.register(clearCommand);
  commandRegistry.register(myWorkCommand);
  commandRegistry.register(aboutCommand);
  commandRegistry.register(backCommand);
}

