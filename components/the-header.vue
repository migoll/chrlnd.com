<template>
  <header class="header">
    <div class="top-section">
      <div class="search">
        <img src="~assets/icons/magnifying-glass-solid.svg" alt="Search Icon" />
      </div>
      <div class="logo">
        <NuxtLink to="/">
          <img
            src="~assets/images/logo/DRK-logo.svg"
            alt="Dronninglund Kunstcenter Logo"
          />
        </NuxtLink>
      </div>
      <div class="dropdown top-burger">
        <div class="dropdown-trigger">
          <img
            src="~assets/icons/bars-solid.svg"
            alt="Burger Menu Icon"
            class="burger-menu"
          />
        </div>
        <ul class="dropdown-menu">
          <li><NuxtLink to="/">Forside</NuxtLink></li>
          <li><NuxtLink to="/udstillinger">Udstillinger</NuxtLink></li>
          <li><NuxtLink to="/begivenheder">Begivenheder</NuxtLink></li>
          <li>
            <NuxtLink to="/praktisk-information">Praktisk Information</NuxtLink>
          </li>
          <li><NuxtLink to="/billetter">Billetter</NuxtLink></li>
          <li><NuxtLink to="/faciliteter">Faciliteter</NuxtLink></li>
          <li><NuxtLink to="/om-os">Om os</NuxtLink></li>
          <li><NuxtLink to="/kontakt">Kontakt</NuxtLink></li>
          <li class="dropdown-language">
            <button class="language-button">DA</button>
          </li>
        </ul>
      </div>
      <div class="buttons">
        <button class="language-button">DA</button>
        <NuxtLink to="/billetter" class="ticket-button">Køb billet</NuxtLink>
      </div>
    </div>
    <div class="divider-hr"></div>
    <nav class="bottom-section">
      <div class="nav-container">
        <div class="nav-list-left">
          <NuxtLink to="/">Forside</NuxtLink>
          <NuxtLink to="/udstillinger">Udstillinger</NuxtLink>
          <NuxtLink to="/begivenheder">Begivenheder</NuxtLink>
        </div>
        <div class="divider-vr"></div>
        <div class="nav-list-right dropdown bottom-burger">
          <div class="dropdown-trigger">
            <img
              src="~assets/icons/bars-solid.svg"
              alt="Burger Menu Icon"
              class="burger-menu"
            />
          </div>
          <ul class="dropdown-menu">
            <li><NuxtLink to="/">Forside</NuxtLink></li>
            <li><NuxtLink to="/udstillinger">Udstillinger</NuxtLink></li>
            <li><NuxtLink to="/begivenheder">Begivenheder</NuxtLink></li>
            <li>
              <NuxtLink to="/praktisk-information"
                >Praktisk Information</NuxtLink
              >
            </li>
            <li><NuxtLink to="/billetter">Billetter</NuxtLink></li>
            <li><NuxtLink to="/faciliteter">Faciliteter</NuxtLink></li>
            <li><NuxtLink to="/om-os">Om os</NuxtLink></li>
            <li><NuxtLink to="/kontakt">Kontakt</NuxtLink></li>
            <li class="dropdown-language">
              <button class="language-button">DA</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup></script>
<style scoped>
.header {
  background-color: #000000;
  color: white;
}

.top-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1080px;
  margin: 0 auto;
  position: relative;
}

.bottom-section {
  display: flex;
  justify-content: center;
}

.search img {
  width: 20px;
  height: 20px;
  justify-self: start;
}

.logo {
  text-align: center;
}

.logo img {
  margin: 0 auto;
}

.buttons {
  display: flex;
  gap: 10px;
  justify-self: end;
}

.language-button,
.ticket-button {
  background-color: white;
  color: #060606;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.ticket-button {
  background-color: var(--secondary-main);
  color: var(--primary-white);
  text-decoration: none;
}

.burger-menu-wrapper {
  display: none;
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
}

.divider-hr {
  height: 1px;
  background-color: #ffffff;
  opacity: 0.2;
  max-width: 1080px;
  margin: 0 auto;
}

.nav-container {
  display: flex;
  align-items: center;
  padding: 1rem 0;
}

.nav-list-left {
  display: flex;
  gap: 20px;
}

.nav-list-left a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.divider-vr {
  width: 1px;
  height: 35px;
  background-color: #ffffff;
  opacity: 0.5;
  margin: 0 20px;
}

.dropdown {
  position: relative;
}

.dropdown-trigger {
  cursor: pointer;
}

.burger-menu {
  width: 24px;
  height: 24px;
}

.dropdown-menu {
  position: absolute;
  top: -50%;
  right: 0;
  display: none;
  background-color: #000000;
  border: 3px solid #ffffff;
  border-radius: 6px;
  padding: 10px 0;
  list-style: none;
  min-width: 150px;
  z-index: 10;
}

.dropdown-menu li {
  padding: 8px 16px;
}

.dropdown-menu li a {
  color: white;
  text-decoration: none;
}

.dropdown-menu li a:hover {
  background-color: #1a1a1a;
}

.dropdown-menu .dropdown-language {
  padding: 8px 16px;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

@media (max-width: 768px) {
  .bottom-section {
    display: none;
  }

  .buttons {
    display: none;
  }

  .top-burger {
    display: block;
    justify-self: end;
  }

  .top-section {
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
  }

  .search {
    justify-self: start;
  }
}

@media (min-width: 768px) {
  .top-burger {
    display: none;
  }

  .bottom-burger {
    display: block;
  }
}
</style>
