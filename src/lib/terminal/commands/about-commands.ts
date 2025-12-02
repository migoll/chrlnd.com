import { CommandDefinition, commandRegistry } from "../command-registry";

// Info command
const infoCommand: CommandDefinition = {
  name: "info",
  description: "General information about me",
  mode: ["about"],
  primary: true,
  handler: () => {
    return {
      type: "text",
      content: [
        "I'm Christian, a front-end developer and UI designer from Denmark with",
        "a passion for problem-solving and everything tech and AI. I thrive on",
        "continuous learning and aim to be at least 1% better every day.",
        "",
        "I enjoy diving into everything new, whether it's discovering the",
        "latest trends or trying a new type of wine or food. When I'm not",
        "working, you'll find me gaming or looking at crypto graphs.",
        "",
        "My approach: Less noise, more signal. Focus on what works.",
      ],
    };
  },
};

// Location command
const locationCommand: CommandDefinition = {
  name: "location",
  description: "My location",
  mode: ["about"],
  primary: true,
  handler: () => {
    return {
      type: "text",
      content: ["Location: Denmark"],
    };
  },
};

// Experience command
const experienceCommand: CommandDefinition = {
  name: "experience",
  description: "My work experience",
  mode: ["about"],
  primary: true,
  handler: () => {
    return {
      type: "text",
      content: [
        "Work Experience:",
        "",
        "Front-end developer and UI designer with experience in:",
        "- React, Next.js, TypeScript",
        "- UI/UX Design",
        "- Electron app development",
        "- OOUX (Object-Oriented UX) process",
        "- API integration and SEO optimization",
        "",
        "Check out my case studies in 'my-work' mode to see detailed",
        "examples of my work.",
      ],
    };
  },
};

// Skills command
const skillsCommand: CommandDefinition = {
  name: "skills",
  description: "Technical skills",
  mode: ["about"],
  handler: () => {
    return {
      type: "text",
      content: [
        "Technical Skills:",
        "",
        "Frontend:",
        "  - React, Next.js, TypeScript",
        "  - Tailwind CSS, CSS",
        "  - HTML5, JavaScript",
        "",
        "Design:",
        "  - UI/UX Design",
        "  - Figma",
        "  - OOUX methodology",
        "",
        "Tools & Technologies:",
        "  - Electron",
        "  - Sharp (image processing)",
        "  - Git, Vite",
        "  - SEO optimization",
        "",
        "Other:",
        "  - Problem-solving",
        "  - Continuous learning",
        "  - User research and testing",
      ],
    };
  },
};

// Ideation command
const ideationCommand: CommandDefinition = {
  name: "ideation",
  description: "My ideation and process approach",
  mode: ["about"],
  handler: () => {
    return {
      type: "text",
      content: [
        "Ideation & Process:",
        "",
        "My approach focuses on:",
        "",
        "1. User-Centered Design",
        "   - OOUX methodology for object-oriented thinking",
        "   - User research and persona development",
        "   - User testing and feedback integration",
        "",
        "2. Problem-Solving",
        "   - Identifying core user needs",
        "   - Creating intuitive solutions",
        "   - Iterative improvement based on feedback",
        "",
        "3. Technical Excellence",
        "   - Clean, maintainable code",
        "   - Performance optimization",
        "   - Modern best practices",
        "",
        "4. Continuous Learning",
        "   - Staying updated with latest trends",
        "   - Exploring new technologies",
        "   - 1% better every day",
        "",
        "Less noise, more signal. Focus on what works.",
      ],
    };
  },
};

export function registerAboutCommands(): void {
  commandRegistry.register(infoCommand);
  commandRegistry.register(locationCommand);
  commandRegistry.register(experienceCommand);
  commandRegistry.register(skillsCommand);
  commandRegistry.register(ideationCommand);
}

