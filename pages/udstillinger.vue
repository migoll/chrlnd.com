<template>
  <div class="center-section">
    <div>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div class="udstillinger-heading">
          <h2>Udstillinger</h2>
        </div>
        <div class="aktuelle-udstillinger-heading">
          <p>Aktuelle udstillinger</p>
        </div>
        <div class="udstillinger-grid">
          <div
            v-for="(post, index) in posts"
            :key="post.id"
            class="udstillinger-container"
            :class="`fade-in-card fade-delay-${index}`"
          >
            <div v-if="post.acf">
              <a href="#" @click.prevent="openPostInNewWindow(post.id)">
                <div class="udstilling-card">
                  <img :src="post.acf.image.url" alt="" />
                  <p>
                    {{ post.acf.start_date }}
                    <span v-if="post.acf.end_date"> - {{ post.acf.end_date }}</span>
                  </p>
                  <h3>{{ post.acf.title }}</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="udstillinger-button">
          <button>Vis flere</button>
        </div>
        <div class="kommende-udstillinger-heading">
          <p>Kommende udstillinger</p>
        </div>
      </div>
    </div>

    <button 
      v-show="showScrollTopButton" 
      class="scroll-to-top-btn" 
      @click="scrollToTop"
    >
      <img src="/icons/arrow-up.svg" alt="">
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [], // Array der indeholder de fetchede posts
      loading: true, // Boolean der indikerer load
      showScrollTopButton: false, // Boolean til at vise eller skjule scroll til top knappen
    };
  },
  methods: {
    // Henter posts fra wordpress api
    async fetchPosts() {
      try {
        // fetcher posts fra specifik kategori
        const response = await fetch(
          "https://dronninglund-kunstcenter.laustsen.info/wp-json/wp/v2/posts?categories=5"
        ); 
        const data = await response.json(); // konverterer resonse til json
        this.posts = data; // gemmer de fetchede posts i "posts"
      } catch (error) {
        console.error("Error fetching posts:", error); //logger eventuelle fejl
      } finally {
        this.loading = false; // fortæller om data load er færdigt
      }
    },
    // Åbner post i et nyt vindue
    openPostInNewWindow(postId) {
      const baseURL = window.location.origin; //henter base url
      const newPostURL = `${baseURL}/udstilling/${postId}`; // ændrer url baseret på ID
      const newWindow = window.open(newPostURL, "_blank", "width=800,height=600"); // åbner et nyt vindue med det nye ID
      if (!newWindow) {
        console.error("Failed to open a new window. Please allow popups for this site."); // logger fejl hvis noget ikke virker
      }
    }, // scroll to top method, med lidt styling
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      this.showScrollTopButton = window.scrollY > 300; // viser scroll to top knappen hvis der er scrolled mere end 300px ned
    },
  },
  mounted() { // lifecycle hook der der kører efter "mounted"
    this.fetchPosts(); // metode til at fetch post efter load
    window.addEventListener("scroll", this.handleScroll); // tilføjer en event listener til scroll
  },
  beforeDestroy() { // licecycle hook der kører når kompontenten er ved at blive destroyed
    window.removeEventListener("scroll", this.handleScroll);
  },
  // en watcher til at overvåge ændringer i posts
  watch: {
    posts(newPosts) {
      // når posts ændrer sig, så kører denne funktion
      this.$nextTick(() => {
        // sørger for at dom-opdateringer er afslutter først.
        const cards = document.querySelectorAll('.fade-in-card');
        cards.forEach((card, index) => {
          card.classList.add(`fade-delay-${index}`);
          setTimeout(() => card.classList.add('visible'), index * 200);
        });
      });
    }
  },
};
</script>

<style scoped>
  a {
    text-decoration: none;
    color: inherit;
  }

  .udstillinger-heading {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .aktuelle-udstillinger-heading {
    display: flex;
    justify-content: flex-start;
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  .udstillinger-grid {
    display: unset
  }

  /* Card fade-in animation */
  .fade-in-card {
    opacity: 0;
    transform: translateY(20px); /* Initially, cards will be slightly shifted */
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  /* Delay for each card to show */
  .fade-delay-0 {
    transition-delay: 0s;
  }
  .fade-delay-1 {
    transition-delay: 0.2s;
  }
  .fade-delay-2 {
    transition-delay: 0.4s;
  }

  /* Make the cards visible once the fade-in is triggered */
  .fade-in-card.visible {
    opacity: 1;
    transform: translateY(0); /* Return the card to its original position */
  }

  /* Styles for the cards */
  .udstilling-card {
    word-break: break-word;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 3rem;
    width: 100%;
  }

  .udstilling-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.4); /* Default shadow */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .udstilling-card:hover img {
    transform: scale(1.05); /* Scale image on hover */
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.6); /* Enhance shadow on hover */
  }

  .udstilling-card p {
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: 400;
    transition: transform 0.3s ease;
  }

  .udstilling-card h3 {
    margin-top: 0.25rem;
    font-size: 1.5rem;
    font-weight: 500;
    transition: transform 0.3s ease;
  }

  .udstilling-card:hover p,
  .udstilling-card:hover h3 {
    transform: scale(1.05);
  }

  .udstillinger-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .udstillinger-button button {
    background-color: var(--secondary-main);
    color: var(--primary-white);
    text-decoration: none;
    border: none;
    border-radius: 6px;
    padding: 15px 15px;
    width: 125px;
    font-size: 1rem;
    cursor: pointer;
  }

  .kommende-udstillinger-heading {
    display: flex;
    justify-content: flex-start;
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  .scroll-to-top-btn {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: var(--secondary-main);
    color: white;
    border: none;
    border-radius: 50%;
    padding: 12px;
    cursor: pointer;
    width: 60px;
    height: 60px;
    transition: ease-in-out 0.3s;
  }

  .scroll-to-top-btn:hover {
    background-color: #31dec7
  }

  .scroll-to-top-btn img {
    width: 25px;
  }


  @media (min-width: 768px) {
    .udstillinger-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    width: 100%;
  }

    .udstilling-card p {
      font-size: 1rem;
    }

    .udstillinger-heading {
      margin-top: 5rem;
    }

    .aktuelle-udstillinger-heading {
      margin-top: 6rem;
    }

    .udstilling-card {
      margin-bottom: 5rem;
    }

    .kommende-udstillinger-heading {
      margin-top: 8rem;
    }

    .scroll-to-top-btn {
      bottom: 60px;
      right: 60px;
    }
  }
</style>
