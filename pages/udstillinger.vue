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

    <!-- Scroll to Top button -->
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
      posts: [],
      loading: true,
      showScrollTopButton: false, // Track visibility of the button
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch(
          "https://dronninglund-kunstcenter.laustsen.info/wp-json/wp/v2/posts?categories=5"
        );
        const data = await response.json();
        this.posts = data;
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        this.loading = false;
      }
    },
    openPostInNewWindow(postId) {
      const baseURL = window.location.origin;
      const newPostURL = `${baseURL}/udstilling/${postId}`;
      const newWindow = window.open(newPostURL, "_blank", "width=800,height=600");
      if (!newWindow) {
        console.error("Failed to open a new window. Please allow popups for this site.");
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      this.showScrollTopButton = window.scrollY > 300; // Show button after scrolling 300px
    },
  },
  mounted() {
    this.fetchPosts();
    // Listen for scroll events
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
    posts(newPosts) {
      // Add delay for fade-in when posts are loaded
      this.$nextTick(() => {
        const cards = document.querySelectorAll('.fade-in-card');
        cards.forEach((card, index) => {
          card.classList.add(`fade-delay-${index}`);
          // Add the "visible" class after a small delay for animation
          setTimeout(() => card.classList.add('visible'), index * 200); // Delay for each card
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
