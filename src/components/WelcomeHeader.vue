<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMenuOpen.value = false
}
</script>

<template>
  <header class="header">
    <nav class="nav">
      <div class="nav-brand">
        <h2 class="brand-text">VueWelcome</h2>
      </div>
      
      <div class="nav-links" :class="{ 'nav-links-open': isMenuOpen }">
        <button @click="scrollToSection('hero')" class="nav-link">Home</button>
        <button @click="scrollToSection('features')" class="nav-link">Features</button>
        <button @click="scrollToSection('contact')" class="nav-link">Contact</button>
        <button @click="scrollToSection('contact')" class="nav-cta">Get Started</button>
      </div>
      
      <button class="menu-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.brand-text {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #3B82F6, #8B5CF6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  position: relative;
}

.nav-link:hover {
  color: white;
  transform: translateY(-2px);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(135deg, #3B82F6, #8B5CF6);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.nav-cta {
  background: linear-gradient(135deg, #3B82F6, #8B5CF6);
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  gap: 4px;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(30, 30, 30, 0.95);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 2rem;
    transform: translateY(-20px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .nav-links-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .nav {
    padding: 1rem;
  }
}
</style>