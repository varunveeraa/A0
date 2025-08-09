<template>
  <div class="my-name-component">
    <div class="name-card">
      <div class="avatar">
        <span class="initials">VV</span>
      </div>
      <div class="name-info">
        <h2 class="name">Varun Veera</h2>
        <p class="title">Vue.js Developer</p>
        <p class="description">
          Building awesome web applications with Vue 3, TypeScript, and modern web technologies!
        </p>
        <div class="skills">
          <span class="skill-tag">Vue.js</span>
          <span class="skill-tag">TypeScript</span>
          <span class="skill-tag">Vite</span>
          <span class="skill-tag">CSS3</span>
        </div>
        <div class="contact-info">
          <p class="email">📧 varun@example.com</p>
          <p class="location">📍 Your Location</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic can go here
const currentDate = new Date().toLocaleDateString()
console.log(`MyName component loaded on ${currentDate}`)
</script>

<style scoped>
.my-name-component {
  padding: var(--space-8);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin: var(--space-6) 0;
}

.name-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: var(--space-8);
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  gap: var(--space-6);
  max-width: 600px;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.name-card:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.15),
    0 20px 20px -5px rgba(0, 0, 0, 0.08);
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-500) 0%, var(--secondary-500) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.initials {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.name-info {
  flex: 1;
}

.name {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--neutral-800);
  margin-bottom: var(--space-2);
  background: linear-gradient(135deg, var(--primary-600) 0%, var(--secondary-600) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-600);
  margin-bottom: var(--space-4);
}

.description {
  color: var(--neutral-700);
  line-height: 1.6;
  margin-bottom: var(--space-4);
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.skill-tag {
  background: linear-gradient(135deg, var(--primary-100) 0%, var(--secondary-100) 100%);
  color: var(--primary-700);
  padding: var(--space-1) var(--space-3);
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid var(--primary-200);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.email, .location {
  color: var(--neutral-600);
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

/* Responsive design */
@media (max-width: 768px) {
  .my-name-component {
    padding: var(--space-4);
  }
  
  .name-card {
    flex-direction: column;
    text-align: center;
    padding: var(--space-6);
  }
  
  .avatar {
    width: 100px;
    height: 100px;
  }
  
  .initials {
    font-size: 2rem;
  }
  
  .name {
    font-size: 2rem;
  }
  
  .skills {
    justify-content: center;
  }
}
</style>
