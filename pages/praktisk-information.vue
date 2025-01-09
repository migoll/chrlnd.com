<template>
  <section class="åbningstider center-section">
    <h1>Praktisk information</h1>
    <h2>Åbningstider</h2>
    <div class="åbningsdage-line">
      <p>Mandag - Fredag</p>
      <p>13:00 - 17:00</p>
    </div>
    <div class="åbningsdage-line">
      <p>Lørdag - Søndag</p>
      <p>11:00 - 17:00</p>
    </div>
    <div class="divider-hr"></div>
    <div class="åbningsdage-line">
      <p>Åbent hele påsken</p>
      <p>11:00 - 17:00</p>
    </div>
    <div class="divider-hr"></div>
    <div class="åbningsdage-line">
      <p>Skærstorsdag - 2. påskedag</p>
      <p>11:00 - 17:00</p>
    </div>
    <div class="divider-hr"></div>
    <div class="åbningsdage-line">
      <p>Kr. Himmelfartsdag + 2. pinsedag</p>
      <p>11:00 - 17:00</p>
    </div>
  </section>
  <section class="center-section">
    <h2>Handicapforhold</h2>
    <p>
      Alle handicappede er meget velkomne på Dronninglund Kunstcenter.Vi har
      netop til 2024 sæsonen, fået installeret elevator og handicap toilet, så
      det er nu muligt for gangbesværede at besøge alle 3 plan.
    </p>
    <p>
      OBS Handicappede betaler fuld pris, men evt. hjælper kommer gratis ind.
    </p>
  </section>
  <section class="center-section">
    <h2>Offentlig transport og parkering</h2>
    <p>Vi tilbyder egen parkeringsplads.</p>
    <p>
      Hvis du vil benytte dig af offentlig transport går der bus i nærheden,
      hvor du kan slutte af med en kort gåtur til Kunstcenteret.
    </p>
    <button class="reverse-button-black">Se busplan</button>
  </section>
  <section class="accordion-section center-section">
    <div class="accordion">
      <div class="accordion-header" @click="toggleAccordion1">
        <h3>Venneforening</h3>
        <button class="accordion-toggle">
          {{ isAccordionOpen1 ? "▲" : "▼" }}
        </button>
      </div>
      <div class="accordion-content" v-show="isAccordionOpen1">
        <p>
          Foreningen, som blev stiftet i 2001, har udelukkende til formål at
          fremme Dronninglund Kunstcenter, og vi arbejder på gennem
          arrangementer og aktiviteter at udbrede interessen for, samt gennem
          donationer, at støtte Dronninglund Kunstcenter.
        </p>
        <p>
          Venneforeningen indgår i et arrangementsudvalg, som planlægger og
          arrangerer koncerter, foredrag og diverse andre aktiviteter.
        </p>
        <p>
          Venneforeningen arrangerer desuden kunst-/kulturrejser til særpris for
          medlemmerne.
        </p>
        <h4>Bliv medlem af Dronninglund Kunstcenters Venner</h4>
        <ul>
          <li>
            Et elektronisk medlemskort i kasseapparatet, når du oplyser dit
            telefonnummer.
          </li>
          <li>Ubegrænset adgang til kunstcentrets udstillinger.</li>
          <li>
            Invitation til alle kunstcentrets udstillinger og ferniseringer.
          </li>
          <li>
            "Venne-INFO" pr. mail med information om kunstcentrets udstillinger
            og øvrige aktiviteter.
          </li>
          <li>Reduceret entrépris ved nogle specielle arrangementer.</li>
          <li>Et årskontingent koster 275 kr.</li>
          <li>
            Har du ikke selv en mailadresse, kan du anføre en vens eller et
            familiemedlems mailadresse og på den måde blive orienteret.
          </li>
          <li>
            BEMÆRK - at "Venne-INFO" og NYHEDSBREV fra Kunstcentret er to
            forskellige info-kilder!
          </li>
        </ul>
      </div>
    </div>

    <!-- accordion inspiration https://duaneblake.co.uk/front-end/converting-bootstraps-accordions-to-a-vue-js-component/-->
    <div class="accordion">
      <div class="accordion-header" @click="toggleAccordion2">
        <h3>Bestyrelsen</h3>
        <button class="accordion-toggle">
          {{ isAccordionOpen2 ? "▲" : "▼" }}
        </button>
      </div>
      <div class="accordion-content" v-show="isAccordionOpen2">
        <ul>
          <li>
            <strong>Christian Christensen</strong> - Formand<br />Tlf: 40316891
          </li>
          <li>
            <strong>Elly Ørnberg</strong> - Næstformand<br />Tlf: 21761628
          </li>
          <li><strong>Karen Axen</strong> - Kasserer<br />Tlf: 22993844</li>
          <li><strong>Karin Sanden</strong> - Sekretær<br />Tlf: 28771488</li>
          <li><strong>Jørgen Abildgaard</strong><br />Tlf: 21286372</li>
          <li><strong>Birgit Bang Henriksen</strong> - Suppleant</li>
        </ul>
        <a href="#" class="accordion-link">Vedtægter</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Variabler der holder styr på om en accordion er åben eller lukket
const isAccordionOpen1 = ref(false);
const isAccordionOpen2 = ref(false);

// Funktion der toggler om en accordion er åben eller ej baseret på dens value - første accordion
const toggleAccordion1 = () => {
  isAccordionOpen1.value = !isAccordionOpen1.value;
};

// Funktion der toggler om en accordion er åben eller ej baseret på dens value - anden accordion
const toggleAccordion2 = () => {
  isAccordionOpen2.value = !isAccordionOpen2.value;
};
</script>

<style scoped>
.accordion-section {
  margin-top: 2rem;
  max-width: 1080px;
  padding-block: 2rem;
  margin: 0 auto;
}

.accordion {
  border: 3px solid var(--primary-black);
  border-radius: 6px;
  overflow: hidden;
  max-width: 100%;
  margin-bottom: 2rem;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-black);
  color: var(--primary-white);
  padding: 0 1rem;
  cursor: pointer;
}

.accordion-toggle {
  background: none;
  border: none;
  color: var(--primary-white);
  font-size: 16px;
  cursor: pointer;
}

.accordion-content {
  padding: 1rem;
  background-color: var(--primary-white);
}

.accordion-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.accordion-content li {
  margin-bottom: 0.5rem;
}

.accordion-link {
  display: block;
  margin-top: 1rem;
  color: var(--primary-black);
  text-decoration: underline;
  cursor: pointer;
}

.åbningsdage-line {
  display: flex;
  justify-content: space-between;
}
</style>
