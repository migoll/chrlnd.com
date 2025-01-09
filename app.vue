<template>
  <div>
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script setup>
import TheFooter from "./components/the-footer.vue";
import TheHeader from "./components/the-header.vue";
</script>
