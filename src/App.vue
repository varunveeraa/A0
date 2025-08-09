<script setup lang="ts">
import WelcomeHeader from './components/WelcomeHeader.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import ContactSection from './components/ContactSection.vue'
import WelcomeFooter from './components/WelcomeFooter.vue'
</script>

<template>
  <div class="app">
    <WelcomeHeader />
    <main>
      <HeroSection />
      <FeaturesSection />
      <ContactSection />
    </main>
    <WelcomeFooter />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>