<template>
  <section class="center-section">
    <h1>Entrebillet</h1>
    <h3>Adgangsbillet til Dronninglund Kunstcenter</h3>
    <div class="voksen-billet">
      <div>
        <p>Voksen 18+</p>
        <p>Børn under 15 er gratis</p>
      </div>
      <div class="ticket-counter">
        <p class="counter-price">{{ totalPrice }} kr</p>
        <button
          class="counter-minus"
          :class="{ enabled: count > 0 }"
          @click="decreaseCount"
        >
          <span></span>
        </button>
        <p class="count">{{ count }}</p>
        <button class="counter-plus" @click="increaseCount">
          <span></span>
        </button>
      </div>
    </div>
    <button class="black-button">Køb</button>
  </section>
  <div class="divider-hr"></div>
  <section class="gruppebillet center-section">
    <h1>Gruppebillet</h1>
    <div class="voksen-billet">
      <h3>
        For store grupper kontakt Dronninglund Kunstcenter for grupperabat over
        15 personer
      </h3>
    </div>
    <button class="reverse-button-black">Kontakt os</button>
  </section>
  <div class="divider-hr"></div>
</template>

<script setup>
import { ref } from "vue";

// Variabel for ticket count, ticket price og total price
const count = ref(0);
const ticketPrice = 80;
const totalPrice = ref(0);

// Funktion der øger antal billetter og total pris når der klikkes på plus knappen
const increaseCount = () => {
  count.value++;
  totalPrice.value = count.value * ticketPrice;
};

// Funktion der mindsker antal billetter og total pris når der klikkes på minus knappen
const decreaseCount = () => {
  if (count.value > 0) {
    count.value--;
    totalPrice.value = count.value * ticketPrice;
  }
};
</script>

<style scoped>
.ticket-counter {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
}

.ticket-counter button {
  width: 40px;
  height: 40px;
}

.voksen-billet {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

section {
  margin: 2rem auto;
}

.gruppebillet h1 {
  margin-bottom: 0;
}

.counter-minus,
.counter-plus {
  background: none;
  border: 3px solid var(--primary-black);
  color: var(--primary-black);
  border-radius: 6px;
  cursor: pointer;
}
.counter-minus span,
.counter-plus span {
  background-color: var(--primary-black);
  width: 70%;
  height: 3px;
  display: block;
  margin: 0 auto;
}

.counter-minus {
  opacity: 40%;
  pointer-events: none; /* Får den til ikke at virke i når count er i 0*/
}

.counter-minus.enabled {
  pointer-events: auto; /* Enabler knappen når counter er over 0*/
}

@media (max-width: 500px) {
  .voksen-billet {
    flex-direction: column;
    gap: 1rem;
    align-items: start;
    padding-bottom: 1rem;
  }
}
</style>
