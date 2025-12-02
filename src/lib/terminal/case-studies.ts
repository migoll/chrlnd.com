export interface CaseStudy {
  id: string;
  name: string;
  slug: string;
  client?: string;
  role: string;
  link?: string;
  description: string;
  content: CaseStudyContent;
}

export interface CaseStudyContent {
  sections: CaseStudySection[];
}

export interface CaseStudySection {
  title: string;
  content: string[];
  images?: string[];
}

// Case study data extracted from existing pages
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "reamage",
    name: "Reamage",
    slug: "reamage-case-study",
    client: "Personal project",
    role: "UX, design, Electron, frontend, performance",
    description:
      "I was tired of random sketchy online compressors filled with ads and bad UX. So I built my own. Reamage is a local Electron app that uses Sharp and React to convert and compress images with full control and maximum speed.",
    content: {
      sections: [
        {
          title: "My role and process",
          content: [
            "I handled everything from idea and design to full technical setup. The app was built from scratch without templates to ensure complete control. I manually configured Electron, bundling via Vite, and handled platform-specific issues with native modules like sharp.",
            "The UI was designed in Figma and built using React, Tailwind and TypeScript, with a focus on performance and intuitive design.",
          ],
        },
        {
          title: "Features and UX",
          content: [
            "The app supports drag-and-drop uploads, batch compression, output format and quality selection, and both individual or bulk downloading. I also implemented a select mode, to download only selected images.",
            "I also built a detailed stats view showing the size reduction in KB and percent—while preserving visual quality based on a user-defined compression level (10%–100%).",
          ],
          images: ["/images/reamage-details.png"],
        },
        {
          title: "Technologies used",
          content: [
            "Electron: Used to build and package the app as a .dmg/.exe file",
            "",
            "Sharp: High-performance image processing engine",
            "",
            "React + Tailwind: Component-based structure and custom UI",
            "",
            "TypeScript: For safer logic and strong typing",
          ],
        },
        {
          title: "Challenges and solutions",
          content: [
            "Electron and Sharp can be hard to combine, especially for macOS/Windows builds. I fixed native module compatibility by configuring electron-builder and using electron-rebuild to ensure sharp loaded correctly.",
          ],
        },
        {
          title: "The result",
          content: [
            "Reamage is a fast, clean, and reliable desktop app for compressing and converting images locally—no uploads needed. It reflects my ability to design, build, and debug a full product from scratch, while also pushing me to learn new tools and solve fresh challenges.",
          ],
        },
      ],
    },
  },
  {
    id: "animal-pension",
    name: "Sejr og Davidsens Dyrepension",
    slug: "animal-pension-case-study",
    client: "Sejr og davidsen",
    role: "OOUX design, front-end",
    link: "https://mmd.ucn.dk/class/MMD-CSD-S23/10503170/mmd3/Sejr-og-Davidsens-Dyrepension-og--internat-Gruppe-4/index.html",
    description:
      "A platform that connects animal owners and experts with focus on the OOUX-process, to ensure a user focused experience.",
    content: {
      sections: [
        {
          title: "My role",
          content: [
            "I played a significant role in this project, as we were a small team. My main focus was the OOUX process, where I worked on objects based on our personas and developed an object map.",
            "Additionally, I collaborated on user flows and ensured that both the design and technical solutions in the code reflected the OOUX results.",
          ],
          images: ["/images/case-study-1-image.png"],
        },
        {
          title: "OOUX process",
          content: [
            "The project was based on OOUX (Object-Oriented UX), where we created an in-depth object structure based on our personas.",
            "We first developed the object map, where we categorized and prioritized objects like adoptable animals, training, and tips and tricks. From there, we worked on user flows and a CTA matrix, which supported the users journey on the platform.",
          ],
          images: ["/images/Sejr&D-CTA-matrix.png"],
        },
        {
          title: "The result",
          content: [
            "The final solution became a responsive platform where pet owners can find information on adoption, training, and care of animals. The platform makes it easy to find adoptable animals and includes articles with tips and tricks on pet care.",
          ],
          images: ["/images/S-og-D-mockup.png"],
        },
      ],
    },
  },
  {
    id: "border-animation",
    name: "Crypto transaction app",
    slug: "border-animation-case-study",
    role: "OOUX design, front-end",
    description:
      "Mobile app design that provides an intuitive way for users to make cryptocurrency transactions",
    content: {
      sections: [
        {
          title: "My role",
          content: [
            "As the designer, I was responsible for researching crypto users needs, analyzing other transaction apps, and creating the high-fidelity design. This involved researching the typical needs in cryptocurrency apps and designing solutions that address them.",
          ],
          images: ["/images/Ronner-img-1.png"],
        },
        {
          title: "Process",
          content: [
            "Research & Competitive Analysis: Focused on common crypto user needs like transaction speed, security, and clarity. Reviewed apps like Paypal, Phantom and MetaMask to analyze how they handle payments, swaps and highlight trends.",
            "Design Approach: I focused on having a minimalist design to avoid overwhelming users, ensuring that key actions like sending, swapping, and receiving are easily accessible. The dark theme aligns with other typical crypto apps.",
            "Figma High-Fidelity Design: Created a natural interface for managing balances, transactions, and asset swapping, with NFC integration for tap-to-pay functionality.",
          ],
          images: ["/images/Ronner-img-2.png"],
        },
        {
          title: "The result",
          content: [
            "The app provides a straight forward user experience for cryptocurrency transactions, with a focus on minimalism and the actions.",
            "This also meant i had to focus on a simple dashboard, with easy access to send, recieve and swap assets. And ofcourse the NFC integration for a quick, modern and contactless payment.",
          ],
          images: ["/images/case-study-two-image.png"],
        },
      ],
    },
  },
  {
    id: "guldborgsund-zoo",
    name: "Guldborgsund zoo",
    slug: "guldborgsund-zoo-case-study",
    client: "Guldborgsund",
    role: "API, front-end, SEO, front-end",
    link: "https://mmd.ucn.dk/class/MMD-CSD-S23/10503158/Frontend/Sem2/Guldborgsund-Zoo_eksamensopgave_gruppe-5/index.html",
    description:
      "A new and improved website, with focus on content structure, navigation and SEO optimization.",
    content: {
      sections: [
        {
          title: "Overview",
          content: [
            "A new and improved website, with focus on content structure, navigation and SEO optimization.",
          ],
        },
      ],
    },
  },
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.id === id);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return CASE_STUDIES;
}

