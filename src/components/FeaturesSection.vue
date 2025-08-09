<script setup lang="ts">
import { ref, onMounted } from 'vue'

const features = ref([
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Built with Vite for instant hot module replacement and lightning-fast builds.'
  },
  {
    icon: '🔧',
    title: 'TypeScript Ready',
    description: 'Full TypeScript support with excellent IDE integration and type safety.'
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description: 'Mobile-first approach ensuring perfect experience across all devices.'
  },
  {
    icon: '🎨',
    title: 'Modern UI',
    description: 'Beautiful, accessible components with smooth animations and interactions.'
  },
  {
    icon: '🚀',
    title: 'Performance',
    description: 'Optimized bundle size and runtime performance for production applications.'
  },
  {
    icon: '🔒',
    title: 'Secure',
    description: 'Security-first approach with modern best practices and secure defaults.'
  }
])

const featuresVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        featuresVisible.value = true
      }
    })
  }, { threshold: 0.1 })
  
  const featuresElement = document.getElementById('features')
  if (featuresElement) {
    observer.observe(featuresElement)
  }
})
</script>

<template>
  <section id="features" class="features">
    <div class="container">
      <div class="features-header" :class="{ 'animate-in': featuresVisible }">
        <h2 class="section-title">Why Choose Vue.js?</h2>
        <p class="section-description">
          Discover the powerful features that make Vue.js the perfect choice for modern web development.
        </p>
      </div>
      
      <div class="features-grid" :class="{ 'animate-in': featuresVisible }">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="feature-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #581c87 100%);
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.features-header.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.features-grid.animate-in {
  opacity: 1;
}

.features-grid.animate-in .feature-card {
  animation: slideInUp 0.6s ease forwards;
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.feature-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1) rotate(5deg);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.feature-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 1rem;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .features {
    padding: 4rem 1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .feature-card {
    padding: 2rem;
  }
}
</style>