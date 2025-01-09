<template>
  <section class="forside-hero">
    <img src="~assets/images/DLK-hero-stor.jpg" alt="" />
  </section>
  <div class="åbningstider-box">
    <div class="åbningstider-content">
      <div class="åbningstider-container">
        <h3>Åbningstider</h3>
        <ul>
          <li>Mandag: Lukket</li>
          <li>Tirsdag - Fredag: 13:00 - 17:00</li>
          <li>Lørdag - Søndag: 11:00 - 17:00</li>
        </ul>
      </div>
      <div class="åbningstider-buttons">
        <NuxtLink to="/billetter" class="ticket-button">Køb Billet</NuxtLink>
        <NuxtLink to="/praktisk-information" class="language-button"
          >Få mere information</NuxtLink
        >
      </div>
    </div>
  </div>
  <section class="forside-entry-points">
    <div class="entry-point">
      <NuxtLink to="/udstillinger" class="entry-link">
        <img src="~assets/images/EP-1.png" alt="" />
        <div class="entry-overlay">
          <span class="entry-text">Udstillinger</span>
        </div>
      </NuxtLink>
    </div>
    <div class="entry-point">
      <NuxtLink to="/begivenheder" class="entry-link">
        <img src="~assets/images/EP-2.png" alt="" />
        <div class="entry-overlay">
          <span class="entry-text">Begivenheder</span>
        </div>
      </NuxtLink>
    </div>
    <div class="entry-point">
      <NuxtLink to="#" class="entry-link">
        <img src="~assets/images/EP-3.png" alt="" />
        <div class="entry-overlay">
          <span class="entry-text">Aktiviteter for børn</span>
        </div>
      </NuxtLink>
    </div>
  </section>
  <section class="om-os">
    <div class="om-os-container center-section">
      <div class="om-os-info">
        <h2>Velkommen til Dronninglund Kunstcenter</h2>
        <p>
          Dronninglund Kunstcenter ligger smukt placeret ved kanten af
          Dronninglund Storskov og er et samlingspunkt for kunst, kultur og
          natur. Siden sin grundlæggelse i 1977 har kunstcenteret været en
          inspirationskilde for kunstelskere og kreative sjæle.
        </p>
        <p>
          Med skiftende udstillinger, spændende arrangementer og en historisk
          atmosfære byder vi velkommen til en oplevelse, der kombinerer æstetik
          og fordybelse. Uanset om du er kunstkender eller førstegangsgæst, er
          der noget at opleve for alle.
        </p>
        <button class="reverse-button-white">Læs mere om vores historie</button>
      </div>
      <img
        src="~assets/images/DLK.jpg"
        alt="Dronebillede af Dronninglund Kunstcenter"
      />
    </div>
  </section>
  <section class="andmeldelser center-section">
    <img
      class="andmeldelse-1"
      src="~assets/images/Tripadvisor-1.png"
      alt="Anmeldelse fra tripadvisor på 4/5"
    />
    <img
      class="andmeldelse-2"
      src="~assets/images/Tripadvisor-2.png"
      alt="Anmeldelse fra tripadvisor på 5/5"
    />
    <img
      class="andmeldelse-3"
      src="~assets/images/Tripadvisor-3.png"
      alt="Anmeldelse fra tripadvisor på 4/5"
    />
  </section>
  <section class="forside-sponsors center-section">
    <img src="" alt="" />
    <img src="" alt="" />
    <img src="" alt="" />
    <img src="" alt="" />
    <img src="" alt="" />
    <img src="" alt="" />
    <img src="" alt="" />
    <img src="" alt="" />
  </section>
  <section class="forside-nyhedsbrev">
    <div class="forside-nyhedsbrev center-section">
      <h3>Vores Nyhedsbrev</h3>
      <p>
        Tildmeld dig vores nyhedsbrev for at blive opdateret om nye
        begivenheder, udstillinger og unikke tilbud.
      </p>
      <div class="tilmeld-container">
        <input
          type="email"
          placeholder="john_doe@mail.com"
          class="email-input"
        />
        <button class="tilmeld-button">Tilmeld</button>
      </div>
    </div>
  </section>
  <div class="divider-hr"></div>
</template>

<script setup></script>

<style scoped>
.forside-hero {
  display: flex;
  width: 100%;
  background-color: black;
}
.forside-hero img {
  width: 100%;
  object-fit: cover;
  max-width: 2048px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.om-os {
  background-color: var(--primary-black);
  color: var(--primary-white);
  display: flex;
  flex-direction: row;
  padding-block: 2rem;
}
.om-os h2 {
  margin-block: 0;
}

.om-os-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
}

.om-os-info,
.om-os img {
  object-fit: cover;
  width: 50%;
}

@media (max-width: 768px) {
  .om-os-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .om-os-info,
  .om-os img {
    width: 100%;
  }
}

.reverse-button-white {
  background: none;
  border: 3px solid var(--primary-white);
  color: var(--primary-white);
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

.tilmeld-container {
  display: flex;
  width: 100%;
  max-width: 400px;
  border-radius: 6px;
  overflow: hidden;
  flex-direction: column;
}

.email-input {
  flex: 1;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  color: #666;
  outline: none;
}

.email-input::placeholder {
  color: var(--neutral-3);
}

.tilmeld-button {
  background-color: var(--secondary-main);
  color: var(--primary-white);
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border: 3px solid var(--secondary-main);
}

.tilmeld-button:hover {
  background-color: var(--primary-main);
  border: 3px solid var(--primary-white);
}

.forside-nyhedsbrev {
  background-color: var(--primary-black);
  color: var(--primary-white);
  padding: 1rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.andmeldelser {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
.andmeldelser img {
  flex-grow: 1;
  object-fit: contain;
  max-height: 200px;
  max-width: 100%;
  padding-block: 2rem;
}

@media (max-width: 1300px) {
  .andmeldelse-3 {
    display: none;
  }
}
@media (max-width: 900px) {
  .andmeldelse-2,
  .andmeldelse-3 {
    display: none;
  }
}

.åbningstider-box {
  background-color: black;
  color: white;
  width: 50%;
  align-self: end;
  margin-top: -88px;
  z-index: 999;
  position: absolute;
  right: 0;
  left: auto;
}

.åbningstider-box li {
  font-weight: bold;
  list-style-type: none;
  padding-top: 8px;
}
.åbningstider-box ul {
  padding: 0;
  margin-top: 0;
}

.åbningstider-box h3 {
  margin-block: 6px;
}

.language-button,
.ticket-button {
  background-color: white;
  color: #060606;
  border: none;
  padding: 1rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
}

.ticket-button {
  background-color: var(--secondary-main);
  color: var(--primary-white);
}

.åbningstider-box {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  position: absolute;
  z-index: 999;
}

.åbningstider-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.åbningstider-content {
  display: flex;
  justify-content: space-between;
  width: 524px;
  padding-right: 3rem;
}

@media (max-width: 768px) {
  .forside-hero img {
    position: unset;
  }
  .åbningstider-box {
    position: unset;
    margin-top: 0;
    width: 100%;
    margin-left: 0;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0;
  }
  .åbningstider-content {
    padding: 1rem 2rem;
    width: 100%;
  }
}
@media (max-width: 465px) {
  .åbningstider-content {
    flex-direction: column;
  }
}

.forside-entry-points {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding-inline: 2rem;
  padding-block: 10rem 5rem;
}

.entry-point {
  flex: 1;
  position: relative;
}

.entry-link {
  display: block;
  position: relative;
  text-decoration: none;
}

.entry-point img {
  width: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.entry-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, black, transparent);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 6px;
}

.entry-text {
  color: var(--primary-white);
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  z-index: 2;
}

@media (max-width: 1150px) {
  .forside-entry-points {
    width: 80%;
  }
}
@media (max-width: 768px) {
  .forside-entry-points {
    flex-direction: column;
    padding-block: 3rem;
  }
}
</style>
