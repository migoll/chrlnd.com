import { Github, Linkedin, Code, Palette, Users, BarChart } from "lucide-react";

export default function Portfolio() {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Front end",
      description: "HTML / CSS / JS",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design",
      description: "Figma / Adobe XD",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "UX",
      description: "Research / User requirements",
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Optimization",
      description: "SEO / Accessibility",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold">YourName</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-green-400 hover:text-green-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                Work
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300">
                About me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-green-400 text-gray-900 px-3 py-1 rounded hover:bg-green-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h1 className="text-5xl font-bold mb-4">Yo, I'm YourName</h1>
          <h2 className="text-3xl mb-4">
            Creative Frontend <span className="text-green-400">Developer</span>
          </h2>
          <p className="text-xl text-gray-400">
            I develop interactive, responsive and animated websites with a focus
            on user-centered problemsolving
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">&lt;My skills/&gt;</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg flex items-start space-x-4"
              >
                <div className="text-green-400">{skill.icon}</div>
                <div>
                  <h4 className="text-xl font-bold">{skill.title}</h4>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-6">
            Don't forget to follow my socials
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="text-green-400 hover:text-green-300">
              <Linkedin className="w-8 h-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-green-400 hover:text-green-300">
              <Github className="w-8 h-8" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
