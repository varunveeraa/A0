<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const handleSubmit = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert('Please fill in all fields')
    return
  }
  
  if (!validateEmail(form.value.email)) {
    alert('Please enter a valid email address')
    return
  }
  
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  isSubmitted.value = true
  isSubmitting.value = false
  
  // Reset form after 3 seconds
  setTimeout(() => {
    form.value = { name: '', email: '', message: '' }
    isSubmitted.value = false
  }, 3000)
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="contact-content">
        <div class="contact-info">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-description">
            Ready to start your Vue.js journey? We'd love to hear from you and help bring your ideas to life.
          </p>
          
          <div class="contact-methods">
            <div class="contact-method">
              <div class="method-icon">📧</div>
              <div class="method-content">
                <h3>Email Us</h3>
                <p>hello@vuewelcome.com</p>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="method-icon">💬</div>
              <div class="method-content">
                <h3>Live Chat</h3>
                <p>Available 24/7 for support</p>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="method-icon">🌍</div>
              <div class="method-content">
                <h3>Global Team</h3>
                <p>Worldwide remote support</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-form-container">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name" class="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="form-input"
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="email" class="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="form-input"
                placeholder="Enter your email address"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                class="form-textarea"
                placeholder="Tell us about your project..."
                rows="5"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              class="submit-button"
              :disabled="isSubmitting || isSubmitted"
            >
              <span v-if="isSubmitting">Sending...</span>
              <span v-else-if="isSubmitted">Message Sent! ✓</span>
              <span v-else>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.section-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 3rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.contact-method:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(8px);
}

.method-icon {
  font-size: 2rem;
  background: linear-gradient(135deg, #3B82F6, #8B5CF6);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.method-content h3 {
  color: white;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.method-content p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.contact-form-container {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
}

.form-input,
.form-textarea {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1rem;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3B82F6;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  background: linear-gradient(135deg, #10B981, #3B82F6);
  border: none;
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact {
    padding: 4rem 1rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .contact-form-container {
    padding: 2rem;
  }
  
  .contact-method {
    padding: 1rem;
  }
  
  .method-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
}
</style>