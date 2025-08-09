<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const scrollToFeatures = () => {
  const element = document.getElementById('features')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero-content" :class="{ 'hero-visible': isVisible }">
      <h1 class="hero-title">
        Welcome to the
        <span class="gradient-text">Future</span>
        of Web Development
      </h1>
      <p class="hero-description">
        Build amazing applications with Vue.js, TypeScript, and modern web technologies.
        Experience the power of reactive, component-based architecture.
      </p>
      <div class="hero-buttons">
        <button @click="scrollToFeatures" class="btn-primary">
          Explore Features
        </button>
        <button class="btn-secondary">
          View Documentation
        </button>
      </div>
    </div>
    <div class="hero-background">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  z-index: 2;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease;
}

.hero-visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.gradient-text {
  background: linear-gradient(135deg, #10B981, #3B82F6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: linear-gradient(135deg, #10B981, #3B82F6);
  border: none;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(16, 185, 129, 0.6);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-3px);
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.floating-shapes {
  position: relative;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: 20%;
  left: 10%;
  animation: float 6s ease-in-out infinite;
}

.shape-2 {
  width: 200px;
  height: 200px;
  top: 60%;
  right: 15%;
  animation: float 8s ease-in-out infinite reverse;
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 10%;
  right: 25%;
  animation: float 7s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(180deg);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 1rem;
    min-height: calc(100vh - 80px);
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 300px;
  }
}
</style>