<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-brand">VueWelcome</h3>
          <p class="footer-description">
            Building the future of web development with Vue.js, one component at a time.
          </p>
          <div class="social-links">
            <a href="#" class="social-link" title="GitHub">
              <span class="social-icon">📱</span>
            </a>
            <a href="#" class="social-link" title="Twitter">
              <span class="social-icon">🐦</span>
            </a>
            <a href="#" class="social-link" title="LinkedIn">
              <span class="social-icon">💼</span>
            </a>
          </div>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-title">Resources</h4>
          <ul class="footer-links">
            <li><a href="#" class="footer-link">Documentation</a></li>
            <li><a href="#" class="footer-link">Examples</a></li>
            <li><a href="#" class="footer-link">Community</a></li>
            <li><a href="#" class="footer-link">Support</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-title">Company</h4>
          <ul class="footer-links">
            <li><a href="#" class="footer-link">About</a></li>
            <li><a href="#" class="footer-link">Blog</a></li>
            <li><a href="#" class="footer-link">Careers</a></li>
            <li><a href="#" class="footer-link">Contact</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-title">Legal</h4>
          <ul class="footer-links">
            <li><a href="#" class="footer-link">Privacy Policy</a></li>
            <li><a href="#" class="footer-link">Terms of Service</a></li>
            <li><a href="#" class="footer-link">Cookie Policy</a></li>
            <li><a href="#" class="footer-link">License</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">
          © 2025 VueWelcome. All rights reserved. Built with ❤️ and Vue.js
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0f172a;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  padding: 4rem 0;
}

.footer-section h3,
.footer-section h4 {
  color: white;
  margin-bottom: 1.5rem;
}

.footer-brand {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #3B82F6, #8B5CF6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: linear-gradient(135deg, #3B82F6, #8B5CF6);
  transform: translateY(-2px);
}

.social-icon {
  font-size: 1.2rem;
}

.footer-title {
  font-size: 1.1rem;
  font-weight: 600;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.footer-link:hover {
  color: white;
  transform: translateX(4px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
  text-align: center;
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 0;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .footer-links {
    text-align: center;
  }
}
</style>