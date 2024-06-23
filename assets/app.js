const baseURL = "https://guldborgsundzoo.nathaliawd.com/wp-json/wp/v2/";
const postContainerEl = document.querySelector(".postContainer");
const dyrOversigtContainerEl = document.querySelector(
  ".dyr-oversigt-container"
);
const taxonomyMap = {
  bløddyr: 6,
  fugle: 7,
  insekter: 8,
  krybdyr: 5,
  padder: 9,
  pattedyr: 4,
};

function fetchContent() {
  return fetch(`${baseURL}posts?per_page=42`, { method: "GET" })
    .then((res) => res.json())
    .catch((err) => console.error("fejl", err));
}

function renderVoresDyr() {
  return fetchContent().then((posts) => {
    posts.forEach((post) => {
      const postElement = createPostElement(post);
      dyrOversigtContainerEl.appendChild(postElement);
    });
  });
}

function createPostElement(post) {
  const postElement = document.createElement("div");
  postElement.classList.add("post");
  postElement.innerHTML = `
    <h2>${post.title.rendered}</h2>
    <a href="enkelt-dyr.html?id=${post.id}">
      <img src="${post.acf.hero_billede_af_dyret.url}" alt="Billede af ${post.title.rendered}" />
    </a>
    <div>${post.content.rendered}</div>
  `;
  return postElement;
}

renderVoresDyr();

const filterButtons = document.querySelectorAll(".filter-buttons button");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const taxonomy = button.textContent.trim().toLowerCase();
    const taxonomyId = taxonomyMap[taxonomy];
    filterContent(taxonomyId);
  });
});

function filterContent(taxonomyId) {
  dyrOversigtContainerEl.innerHTML = "";
  fetch(`${baseURL}posts?per_page=42&dyre-klasse=${taxonomyId}`)
    .then((res) => res.json())
    .then((posts) => {
      posts.forEach((post) => {
        const postElement = createPostElement(post);
        dyrOversigtContainerEl.appendChild(postElement);
      });
    })
    .catch((err) => console.error("fejl", err));
}

//carousel
document.addEventListener("DOMContentLoaded", () => {
  const imagesContainer = document.querySelector(".carousel-images");
  const images = document.querySelectorAll(".carousel-image");
  let currentIndex = 0;

  function showImage(index) {
    const offset = -index * 100;
    imagesContainer.style.transform = `translateX(${offset}%)`;
  }

  document.querySelector(".prev-button").addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
  });

  document.querySelector(".next-button").addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    showImage(currentIndex);
  });

  showImage(currentIndex);
});

// STICKY KNAPPER
const scrollKnapEl = document.getElementById("scroll-knap");
const stickyBilletknapContainer = document.querySelector(".sticky-billetknap-container");
const billetknapLink = document.getElementById("billetknap-link");

function toggleScrollButtons() {
    if (window.scrollY > 20) {
        scrollKnapEl.style.display = "block";
        stickyBilletknapContainer.style.display = "flex";
    } else {
        scrollKnapEl.style.display = "none";
        stickyBilletknapContainer.style.display = "none";
    }
}


toggleScrollButtons();

window.addEventListener("scroll", toggleScrollButtons);

scrollKnapEl.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


document.getElementById("sticky-billetknap").addEventListener("click", function() {

  const url = billetknapLink.getAttribute("href");
  
  window.location.href = url;
});