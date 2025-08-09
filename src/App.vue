<script setup lang="ts">
import WelcomeHeader from './components/WelcomeHeader.vue'
import HeroSection from './components/HeroSection.vue'
import MyName from './components/MyName.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import ContactSection from './components/ContactSection.vue'
import WelcomeFooter from './components/WelcomeFooter.vue'
</script>

<template>
  <div class="app fade-in">
    <WelcomeHeader />
    <main class="main-content">
      <HeroSection class="slide-up" />
      <div class="container">
        <MyName class="slide-up" />
      </div>
      <FeaturesSection class="slide-up" />
      <ContactSection class="slide-up" />
    </main>
    <WelcomeFooter />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow-x: hidden;
}

.main-content {
  position: relative;
  z-index: 1;
}

/* Add some subtle background effects */
.app::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}
</style>