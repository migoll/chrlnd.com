<script setup>
import { ref } from "vue";
import { Linkedin, Github } from "lucide-vue";

// State setup
const flippedCard = ref(null);

const skills = [
  { icon: "⟨/⟩", title: "Front end", description: "HTML / CSS / JS" },
  { icon: "🎨", title: "Design", description: "Figma / Adobe XD" },
  {
    icon: "👥",
    title: "UX",
    description:
      "Research / User requirements / Design solutions / Accessibility",
  },
  {
    icon: "📊",
    title: "Optimization",
    description: "SEO / Accessibility / Lighthouse testing",
  },
];

const workSamples = [
  { id: 1, title: "Project 1" },
  { id: 2, title: "Project 2" },
  { id: 3, title: "Project 3" },
  { id: 4, title: "Project 4" },
];

// Method to handle card flip
const toggleCard = (id) => {
  flippedCard.value = flippedCard.value === id ? null : id;
};
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white font-sans">
    <header class="container mx-auto px-4 py-6">
      <nav class="flex justify-between items-center">
        <div class="text-xl font-bold">YourName</div>
        <ul class="flex space-x-4">
          <li>
            <a href="#" class="text-green-400 hover:text-green-300">Home</a>
          </li>
          <li><a href="#" class="hover:text-green-300">Work</a></li>
          <li><a href="#" class="hover:text-green-300">About me</a></li>
          <li>
            <a
              href="#"
              class="bg-green-400 text-gray-900 px-3 py-1 rounded hover:bg-green-300"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </header>

    <main class="container mx-auto px-4 py-12">
      <section class="mb-16">
        <h1 class="text-5xl font-bold mb-4">Yo, I'm YourName</h1>
        <h2 class="text-3xl mb-4">
          Creative Frontend <span class="text-green-400">Developer</span>
        </h2>
        <p class="text-xl text-gray-400">
          I develop interactive, responsive, and animated websites with a focus
          on user-centered problem-solving.
        </p>
      </section>

      <section class="mb-16">
        <h3 class="text-2xl font-bold mb-6">&lt;My skills/&gt;</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="bg-gray-800 p-6 rounded-lg flex items-start space-x-4"
          >
            <div class="text-4xl">{{ skill.icon }}</div>
            <div>
              <h4 class="text-xl font-bold">{{ skill.title }}</h4>
              <p class="text-gray-400">{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-16">
        <h3 class="text-2xl font-bold mb-6">Flip a card to see my work</h3>
        <div class="flex justify-center space-x-4">
          <div
            v-for="sample in workSamples"
            :key="sample.id"
            class="w-32 h-48 bg-green-400 rounded-lg cursor-pointer transition-transform duration-500"
            :class="{ 'rotate-y-180': flippedCard === sample.id }"
            @click="toggleCard(sample.id)"
          >
            <div class="w-full h-full flex items-center justify-center">
              <span
                v-if="flippedCard === sample.id"
                class="text-gray-900 font-bold rotate-y-180"
              >
                {{ sample.title }}
              </span>
              <span v-else class="text-5xl">♦</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 class="text-2xl font-bold mb-6">
          Don't forget to follow my socials
        </h3>
        <div class="flex space-x-4">
          <a href="#" class="text-green-400 hover:text-green-300">
            <Linkedin size="32" />
          </a>
          <a href="#" class="text-green-400 hover:text-green-300">
            <Github size="32" />
          </a>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
.rotate-y-180 {
  transform: rotateY(180deg);
}
</style>
