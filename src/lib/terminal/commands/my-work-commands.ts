import {
  CommandDefinition,
  commandRegistry,
} from "../command-registry";
import {
  getAllCaseStudies,
  getCaseStudyById,
  getCaseStudyBySlug,
} from "../case-studies";

// List command
const listCommand: CommandDefinition = {
  name: "list",
  description: "List all case studies",
  mode: ["my-work"],
  primary: true,
  handler: () => {
    const caseStudies = getAllCaseStudies();
    const list = caseStudies.map((cs, index) => {
      const clientInfo = cs.client ? ` (${cs.client})` : "";
      return `${index + 1}. ${cs.name}${clientInfo} - ${cs.description}`;
    });

    return {
      type: "text",
      content: [
        "Available Case Studies:",
        "",
        ...list,
        "",
        "Use 'view <name>' to see details, or 'open <name>' to visit the full page.",
      ],
    };
  },
};

// View command
const viewCommand: CommandDefinition = {
  name: "view",
  description: "View case study content inline",
  usage: "<case-study-name>",
  mode: ["my-work"],
  primary: true,
  handler: (args) => {
    if (args.length === 0) {
      return {
        type: "error",
        content: "Usage: view <case-study-name>",
      };
    }

    const query = args.join(" ").toLowerCase();
    const caseStudy =
      getCaseStudyById(query) ||
      getCaseStudyBySlug(query) ||
      getAllCaseStudies().find(
        (cs) => cs.name.toLowerCase().includes(query)
      );

    if (!caseStudy) {
      return {
        type: "error",
        content: `Case study "${args.join(" ")}" not found. Use 'list' to see all case studies.`,
      };
    }

    const content: string[] = [
      "",
      "=".repeat(60),
      caseStudy.name.toUpperCase(),
      "=".repeat(60),
      "",
    ];

    if (caseStudy.client) {
      content.push(`Client: ${caseStudy.client}`);
    }
    content.push(`Role: ${caseStudy.role}`);
    if (caseStudy.link) {
      content.push(`Link: ${caseStudy.link}`);
    }
    content.push("", caseStudy.description, "");

    caseStudy.content.sections.forEach((section, index) => {
      if (index > 0) {
        content.push("");
      }
      content.push(section.title.toUpperCase());
      content.push("-".repeat(40));
      section.content.forEach((para) => {
        if (para.trim()) {
          content.push(para);
        }
      });
      if (section.images && section.images.length > 0) {
        content.push("");
        content.push(`[Images: ${section.images.join(", ")}]`);
      }
    });

    content.push("");
    content.push("=".repeat(60));

    return {
      type: "text",
      content,
      links: [
        {
          text: `View full page: ${caseStudy.name}`,
          url: `/my-work/${caseStudy.slug}`,
        },
      ],
    };
  },
  autocomplete: (args) => {
    if (args.length <= 1) {
      // Return both names and IDs for better discoverability
      const suggestions: string[] = [];
      getAllCaseStudies().forEach((cs) => {
        suggestions.push(cs.name);
        if (cs.id !== cs.name.toLowerCase().replace(/\s+/g, "-")) {
          suggestions.push(cs.id);
        }
      });
      return suggestions;
    }
    return [];
  },
};

// Open command
const openCommand: CommandDefinition = {
  name: "open",
  description: "Open case study page in new tab",
  usage: "<case-study-name>",
  mode: ["my-work"],
  primary: true,
  handler: (args) => {
    if (args.length === 0) {
      return {
        type: "error",
        content: "Usage: open <case-study-name>",
      };
    }

    const query = args.join(" ").toLowerCase();
    const caseStudy =
      getCaseStudyById(query) ||
      getCaseStudyBySlug(query) ||
      getAllCaseStudies().find(
        (cs) => cs.name.toLowerCase().includes(query)
      );

    if (!caseStudy) {
      return {
        type: "error",
        content: `Case study "${args.join(" ")}" not found. Use 'list' to see all case studies.`,
      };
    }

    return {
      type: "link",
      content: `Opening ${caseStudy.name}...`,
      links: [
        {
          text: caseStudy.name,
          url: `/my-work/${caseStudy.slug}`,
        },
      ],
    };
  },
  autocomplete: (args) => {
    if (args.length <= 1) {
      // Return both names and IDs for better discoverability
      const suggestions: string[] = [];
      getAllCaseStudies().forEach((cs) => {
        suggestions.push(cs.name);
        if (cs.id !== cs.name.toLowerCase().replace(/\s+/g, "-")) {
          suggestions.push(cs.id);
        }
      });
      return suggestions;
    }
    return [];
  },
};

export function registerMyWorkCommands(): void {
  commandRegistry.register(listCommand);
  commandRegistry.register(viewCommand);
  commandRegistry.register(openCommand);
}

