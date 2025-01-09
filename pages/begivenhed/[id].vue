<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="post">
        <div v-if="post.acf">
          <div class="udstilling-landing-page">
            <p>{{ post.acf.start_date }} <span v-if="post.acf.end_date"> - {{ post.acf.end_date }}</span></p>
            <h1>{{ post.acf.title }}</h1>
            <img :src="post.acf.image.url" alt="">
          </div>
          <div class="udstilling-information">
            <h2>{{ post.acf.section_heading }}</h2>
            <div v-html="post.acf.description" class="acf-description"></div>
            <div v-if="post.acf.participants" class="medvirkende">
              <div class="medvirkende-header" @click="toggleParticipants(post.id)">
                <p>Medvirkende</p>
                <img v-if="isOpen !== post.id" src="/icons/plus-solid.svg" alt="Plus icon">
                <img v-if="isOpen === post.id" src="/icons/minus-solid.svg" alt="Minus icon">
              </div>
              <div class="medvirkende-navne" :class="{ open: isOpen === post.id }">
                <p>{{ post.acf.participants }}</p>
                <p v-if="post.acf.participant2">{{ post.acf.participant2 }}</p>
                <p v-if="post.acf.participant3">{{ post.acf.participant3 }}</p>
                <p v-if="post.acf.participant4">{{ post.acf.participant4 }}</p>
                <p v-if="post.acf.participant5">{{ post.acf.participant5 }}</p>
                <div class="med-flere">
                  <p>m.fl.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Post not found.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: null, // Holder styr på om hvilken deltager liste der er åben
      posts: [], // Indeholder posts hentet fra API'en
      loading: true, // Indikerer om noget data er i gang med at blive loadet, så loading effekt kan vises
      post: null, // Den enkelte post der vil matche en ID
    };
  },
  methods: {
    // funktion der åbner og lukker deltagerliste
    toggleParticipants(postId) {
      this.isOpen = this.isOpen === postId ? null : postId;
    },
    // funktion der fetcher posts fra API
    async fetchPosts() {
      try {
        //henter posts fra API
        const response = await fetch('https://dronninglund-kunstcenter.laustsen.info/wp-json/wp/v2/posts?categories=4');
        const data = await response.json();
        this.posts = data;

        // finder den post der matcher id fra url
        const postId = this.$route.params.id;
        if (postId) {
          this.post = this.posts.find(post => post.id === parseInt(postId));
        }
      } catch (error) {
        // logger fejl hvis der sker fejl i fetch
        console.error("Error fetching posts:", error);
      } finally {
        // indikerer at loading er færdigt, også selvom der ikke var fejl
        this.loading = false;
      }
    }
  },
  computed: {
    // beregner billeder til vors galleri baseret på det data der er fetched fra posten
  galleryImages() {
    if (!this.post || !this.post.acf) return [];
    const galleries = [];
    for (let i = 1; i <= 10; i++) {
      const galleryKey = `image_gallery${i}`;
      if (this.post.acf[galleryKey]) {
        galleries.push(this.post.acf[galleryKey]);
      }
    }

    return galleries;
  }
},
  mounted() {
    // fetcher post når der er mounted
    this.fetchPosts();
  },
  watch: {
    // watcher der holder øje med url og henter nyt data hvis ID ændrer sig
    '$route.params.id'(newId) {
      this.fetchPosts();
    }
  }
};
</script>


<style scoped>
  .udstilling-landing-page {
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
  padding-bottom: 6rem;
}

.udstilling-landing-page p {
  color: rgba(255, 255, 255, 0.50);
  border: 2px solid rgba(255, 255, 255, 0.20);
  border-radius: 5px;
  padding: 15px 15px;
  font-size: 1rem;
}

.udstilling-landing-page h1 {
  color: white;
  padding-bottom: 3rem;
  font-size: 2rem;
  margin: 3rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  word-break: break-word;
}

.udstilling-landing-page img {
  width: 100%;
  max-width: 300px;
  margin: 0 2rem;
}

.udstilling-information {
  padding: 0 2rem;
  line-height: 1.5;
  max-width: 1080px;
  margin: 3rem auto;
}

.udstilling-information h2 {
  font-size: 1.75rem;
}

.udstilling-information p {
  font-size: 1rem;
}

.acf-description {
  line-height: 1.5;
  font-size: 1rem;
}

.medvirkende {
background: #D9D9D9;
margin-top: 5rem;
margin-bottom: 5rem;
border-radius: 15px;
overflow: hidden;
}

.medvirkende p {
  font-size: 1rem;
}

.medvirkende img {
  width: 20px;
}

.medvirkende-header {
background-color: #D9D9D9;
cursor: pointer;
display: flex;
justify-content: space-between;
padding: 0 20px;
}

.medvirkende-navne {
padding-left: 20px;
padding-right: 20px;
background-color: #f1f1f1;
max-height: 0;
overflow: hidden;
transition: max-height 0.5s ease-out;
}

.medvirkende-navne.open {
max-height: 500px;
}

.medvirkende-navne.open p {
  font-size: 1rem;
}

.med-flere p {
  text-decoration: underline;
}

.image-gallery-udstilling-container {
  background: #000000;
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.image-gallery-udstilling {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  gap: 3rem;
}

.image-gallery-udstilling img {
  max-width: 250px;
  width: 100%;
}

/* Centrer images hvis de er alene i en række */
.image-gallery-udstilling img:last-child:nth-child(odd) {
  grid-column: 1 / -1;
}

@media (min-width: 768px) {
  .medvirkende {
    width: 350px;
  }

  .udstilling-information {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  .udstilling-landing-page img {
    width: 100%;
    max-width: 500px;
  }

  .image-gallery-udstilling {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .image-gallery-udstilling img:last-child {
    justify-content: center;
    align-items: center;
    grid-column: 1 / -1;
  }
}
</style>
