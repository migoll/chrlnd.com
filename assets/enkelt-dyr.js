document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const dyrId = params.get("id");

  const specifikDyrIndhold = document.querySelector(".specifik-dyr-indhold");

  function fetchSpecifikDyr() {
    return fetch(`${baseURL}posts/${dyrId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((err) => console.error("Error fetching specific dyr:", err));
  }

  function renderSpecifikDyr(dyr) {
    console.log("Fetched dyr object:", dyr);
    const dyrTitle = dyr.title.rendered;
    const dyrImage = dyr.acf.hero_billede_af_dyret.url;
    const dyrBiologi = dyr.acf.biologi;
    const dyrTrusler = dyr.acf.trusler;
    const iucnImage = dyr.acf.iucn_status.link;

    const latinskNavnP = dyr.acf.latinsk_navn;
    const klasseP = dyr.acf.klasse;
    const ordenP = dyr.acf.orden;
    const familieP = dyr.acf.familie;
    const slægtP = dyr.acf.slaegt;
    const vingefangP = dyr.acf.vingefang;
    const vægtP = dyr.acf.vaegt;
    const leveAlderP = dyr.acf.levealder;
    const fødeP = dyr.acf.fode;
    const zooMenuP = dyr.acf.zoo_menu;
    const kønsmodenP = dyr.acf.konsmoden;
    const drægtighedP = dyr.acf.draegtighed_rugetid;
    const antalUngerP = dyr.acf.antal_unger;
    const socialStrukturP = dyr.acf.social_struktur;
    const levestedP = dyr.acf.levested_habitat;
    const udbredelseINaturenP = dyr.acf.udbredelse_i_naturen;
    


    const vidsteDuAtP = Object.values(dyr.acf.vidste_du_at).filter(fact => fact);

    specifikDyrIndhold.innerHTML = `
      <img class="hero-image" src="${dyrImage}" alt="${dyrTitle}" />

      <section class="hero-title-container">
      <h1>${dyrTitle}</h1>
      </section>

      
      <section class="dyr-information">
      <article class="dyr-tekst">
      <h2>Biologi</h2>
      <p>${dyrBiologi}</p>
      <h2>Trusler</h2>
      <p class="trusler">${dyrTrusler}</p>
      </article>
       
      <article class="information-box">
      <h3 class="latinsk-navn">Latinsk navn:</h3>
      <p>${latinskNavnP}</p>
      <h3>Klasse:</h3>
      <p>${klasseP}</p>
      <h3>Orden:</h3>
      <p>${ordenP}</p>
      <h3>Familie:</h3>
      <p>${familieP}</p>
      <h3>Slægt:</h3>
      <p>${slægtP}</p>
      <h3>Vingefang:</h3>
      <p>${vingefangP}</p>
      <h3>Vægt:</h3>
      <p>${vægtP}</p>
      <h3>Levealder:</h3>
      <p>${leveAlderP}</p>
      <h3>Føde:</h3>
      <p>${fødeP}</p>
      <h3>Zoo-menu:</h3>
      <p>${zooMenuP}</p>
      <h3>Kønsmoden:</h3>
      <p>${kønsmodenP}</p>
      <h3>Drægtighed:</h3>
      <p>${drægtighedP}</p>
      <h3>Antal unger:</h3>
      <p>${antalUngerP}</p>
      <h3>Social struktur:</h3>
      <p>${socialStrukturP}</p>
      <h3>Levested (habitat):</h3>
      <p>${levestedP}</p>
      <h3>Udbredelse i naturen:</h3>
      <p>${udbredelseINaturenP}</p>
      <h3>IUCN status:</h3>
      ${iucnImage ? `<img src="${iucnImage}" alt="IUCN Status" />` : "Not available"}
      <h3>Vidste du at:</h3>
      <p>${vidsteDuAtP}</p>
      </article>
      </section>
    `;
  }

  fetchSpecifikDyr()
    .then((dyr) => {
      renderSpecifikDyr(dyr);
    })
    .catch((err) => console.error("Error rendering specific dyr:", err));
});
