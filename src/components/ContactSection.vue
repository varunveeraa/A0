<script setup lang="ts">
import { ref, computed } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
  newsletter: false,
  priority: 'medium'
})

const errors = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const submittedData = ref<any[]>([])
const showSuccessMessage = ref(false)

// Priority options for dropdown
const priorityOptions = [
  { label: 'Low', value: 'low' },
  { label: 'Medium', value: 'medium' },
  { label: 'High', value: 'high' },
  { label: 'Urgent', value: 'urgent' }
]

// Enhanced validation functions with more sophisticated rules
const validateName = (name: string) => {
  if (!name.trim()) return 'Name is required'
  if (name.length < 2) return 'Name must be at least 2 characters'
  if (name.length > 50) return 'Name must be less than 50 characters'
  if (!/^[a-zA-Z\s\-'\.]+$/.test(name)) return 'Name can only contain letters, spaces, hyphens, apostrophes, and periods'
  if (/^\s|\s$/.test(name)) return 'Name cannot start or end with spaces'
  return ''
}

const validateEmail = (email: string) => {
  if (!email.trim()) return 'Email is required'
  if (email.length > 254) return 'Email is too long'
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  if (!emailRegex.test(email)) return 'Please enter a valid email address'
  // Check for common typos
  const commonDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com']
  const domain = email.split('@')[1]?.toLowerCase()
  if (domain && domain.includes('.') && !commonDomains.includes(domain)) {
    // Additional validation for less common domains
    if (!/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(domain)) {
      return 'Please check your email domain'
    }
  }
  return ''
}

const validatePhone = (phone: string) => {
  if (!phone.trim()) return 'Phone number is required'
  const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, '')
  if (!/^\d{7,15}$/.test(cleanPhone)) return 'Phone number must be 7-15 digits'
  if (cleanPhone.length < 7) return 'Phone number is too short'
  if (cleanPhone.length > 15) return 'Phone number is too long'
  return ''
}

const validateCompany = (company: string) => {
  if (company && company.length > 100) return 'Company name must be less than 100 characters'
  if (company && !/^[a-zA-Z0-9\s\-&.,()]+$/.test(company)) return 'Company name contains invalid characters'
  return ''
}

const validateSubject = (subject: string) => {
  if (subject && subject.length > 100) return 'Subject must be less than 100 characters'
  if (subject && subject.length < 3) return 'Subject must be at least 3 characters'
  return ''
}

const validateMessage = (message: string) => {
  if (!message.trim()) return 'Message is required'
  if (message.length < 10) return 'Message must be at least 10 characters'
  if (message.length > 1000) return 'Message must be less than 1000 characters'
  // Check for spam-like content
  const spamWords = ['click here', 'free money', 'urgent', 'act now']
  const lowerMessage = message.toLowerCase()
  const spamCount = spamWords.filter(word => lowerMessage.includes(word)).length
  if (spamCount > 2) return 'Message appears to contain spam content'
  return ''
}

const isFormValid = computed(() => {
  return !errors.value.name && !errors.value.email && !errors.value.phone &&
         !errors.value.company && !errors.value.subject && !errors.value.message &&
         form.value.name && form.value.email && form.value.phone && form.value.message
})

const validateField = (field: string) => {
  switch (field) {
    case 'name':
      errors.value.name = validateName(form.value.name)
      break
    case 'email':
      errors.value.email = validateEmail(form.value.email)
      break
    case 'phone':
      errors.value.phone = validatePhone(form.value.phone)
      break
    case 'company':
      errors.value.company = validateCompany(form.value.company)
      break
    case 'subject':
      errors.value.subject = validateSubject(form.value.subject)
      break
    case 'message':
      errors.value.message = validateMessage(form.value.message)
      break
  }
}

const validateAllFields = () => {
  validateField('name')
  validateField('email')
  validateField('phone')
  validateField('company')
  validateField('subject')
  validateField('message')
}

const getPrioritySeverity = (priority: string) => {
  switch (priority) {
    case 'low': return 'success'
    case 'medium': return 'info'
    case 'high': return 'warning'
    case 'urgent': return 'danger'
    default: return 'info'
  }
}

const handleSubmit = async () => {
  // Validate all fields
  validateAllFields()

  if (!isFormValid.value) {
    showSuccessMessage.value = false
    return
  }

  isSubmitting.value = true

  // Simulate form submission with realistic delay
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Add to submitted data for DataTable
  submittedData.value.unshift({
    id: Date.now(),
    ...form.value,
    submittedAt: new Date().toLocaleString(),
    status: 'New'
  })

  isSubmitted.value = true
  isSubmitting.value = false
  showSuccessMessage.value = true

  // Reset form after 5 seconds
  setTimeout(() => {
    form.value = {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      newsletter: false,
      priority: 'medium'
    }
    errors.value = { name: '', email: '', phone: '', company: '', subject: '', message: '' }
    isSubmitted.value = false
    showSuccessMessage.value = false
  }, 5000)
}

const viewMessage = (data: any) => {
  alert(`Message Details:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCompany: ${data.company || 'N/A'}\nSubject: ${data.subject || 'N/A'}\nPriority: ${data.priority}\nNewsletter: ${data.newsletter ? 'Yes' : 'No'}\nMessage: ${data.message}\nSubmitted: ${data.submittedAt}`)
}

const deleteMessage = (id: number) => {
  if (confirm('Are you sure you want to delete this message?')) {
    const index = submittedData.value.findIndex(item => item.id === id)
    if (index > -1) {
      submittedData.value.splice(index, 1)
    }
  }
}
</script>

<template>
  <section id="contact" class="contact py-5">
    <div class="container">
      <!-- Header Section -->
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h2 class="display-4 text-white mb-3">Get In Touch</h2>
          <p class="lead text-white-50">
            Ready to start your Vue.js journey? We'd love to hear from you and help bring your ideas to life.
          </p>
        </div>
      </div>

      <div class="row g-4">
        <!-- Contact Info - Hidden on small screens, visible on medium+ -->
        <div class="col-lg-4 d-none d-lg-block">
          <div class="contact-methods">
            <div class="contact-method mb-4">
              <div class="d-flex align-items-center">
                <div class="method-icon me-3">📧</div>
                <div>
                  <h5 class="text-white mb-1">Email Us</h5>
                  <p class="text-white-50 mb-0">hello@vuewelcome.com</p>
                </div>
              </div>
            </div>

            <div class="contact-method mb-4">
              <div class="d-flex align-items-center">
                <div class="method-icon me-3">💬</div>
                <div>
                  <h5 class="text-white mb-1">Live Chat</h5>
                  <p class="text-white-50 mb-0">Available 24/7 for support</p>
                </div>
              </div>
            </div>

            <div class="contact-method mb-4">
              <div class="d-flex align-items-center">
                <div class="method-icon me-3">🌍</div>
                <div>
                  <h5 class="text-white mb-1">Global Team</h5>
                  <p class="text-white-50 mb-0">Worldwide remote support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="col-lg-8">
          <div class="contact-form-container p-4 p-md-5">
            <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
              <div class="row g-3">
                <!-- Name Field -->
                <div class="col-md-6">
                  <label for="name" class="form-label text-white">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    @blur="validateField('name')"
                    @input="validateField('name')"
                    class="form-control"
                    :class="{ 'is-invalid': errors.name, 'is-valid': !errors.name && form.name }"
                    placeholder="Enter your full name"
                    required
                  />
                  <div class="invalid-feedback">{{ errors.name }}</div>
                </div>

                <!-- Email Field -->
                <div class="col-md-6">
                  <label for="email" class="form-label text-white">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    @blur="validateField('email')"
                    @input="validateField('email')"
                    class="form-control"
                    :class="{ 'is-invalid': errors.email, 'is-valid': !errors.email && form.email }"
                    placeholder="Enter your email address"
                    required
                  />
                  <div class="invalid-feedback">{{ errors.email }}</div>
                </div>

                <!-- Phone Field -->
                <div class="col-md-6">
                  <label for="phone" class="form-label text-white">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    @blur="validateField('phone')"
                    @input="validateField('phone')"
                    class="form-control"
                    :class="{ 'is-invalid': errors.phone, 'is-valid': !errors.phone && form.phone }"
                    placeholder="Enter your phone number"
                    required
                  />
                  <div class="invalid-feedback">{{ errors.phone }}</div>
                </div>

                <!-- Company Field -->
                <div class="col-md-6">
                  <label for="company" class="form-label text-white">Company</label>
                  <input
                    type="text"
                    id="company"
                    v-model="form.company"
                    class="form-control"
                    placeholder="Enter your company name"
                  />
                </div>

                <!-- Subject Field -->
                <div class="col-12">
                  <label for="subject" class="form-label text-white">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    v-model="form.subject"
                    class="form-control"
                    placeholder="Enter the subject"
                  />
                </div>

                <!-- Priority Field -->
                <div class="col-md-6">
                  <label for="priority" class="form-label text-white">Priority</label>
                  <select id="priority" v-model="form.priority" class="form-select">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <!-- Newsletter Checkbox -->
                <div class="col-md-6 d-flex align-items-end">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      id="newsletter"
                      v-model="form.newsletter"
                      class="form-check-input"
                    />
                    <label for="newsletter" class="form-check-label text-white">
                      Subscribe to newsletter
                    </label>
                  </div>
                </div>

                <!-- Message Field -->
                <div class="col-12">
                  <label for="message" class="form-label text-white">Message *</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    @blur="validateField('message')"
                    @input="validateField('message')"
                    class="form-control"
                    :class="{ 'is-invalid': errors.message, 'is-valid': !errors.message && form.message }"
                    placeholder="Tell us about your project..."
                    rows="5"
                    required
                  ></textarea>
                  <div class="invalid-feedback">{{ errors.message }}</div>
                  <div class="form-text text-white-50">{{ form.message.length }}/500 characters</div>
                </div>

                <!-- Submit Button -->
                <div class="col-12">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg w-100"
                    :disabled="isSubmitting || isSubmitted || !isFormValid"
                  >
                    <span v-if="isSubmitting">
                      <span class="spinner-border spinner-border-sm me-2" role="status"></span>
                      Sending...
                    </span>
                    <span v-else-if="isSubmitted">Message Sent! ✓</span>
                    <span v-else>Send Message</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Success Message -->
      <div v-if="showSuccessMessage" class="row mt-4">
        <div class="col-12">
          <div class="alert alert-success d-flex align-items-center" role="alert">
            <i class="bi bi-check-circle-fill me-2"></i>
            Your message has been submitted successfully! We'll get back to you soon.
          </div>
        </div>
      </div>

      <!-- Bootstrap DataTable for Submitted Messages -->
      <div v-if="submittedData.length > 0" class="row mt-5">
        <div class="col-12">
          <h3 class="text-white mb-4">
            <i class="bi bi-table me-2"></i>
            Submitted Messages ({{ submittedData.length }})
          </h3>
          <div class="datatable-container">
            <div class="table-responsive">
              <table class="table table-dark table-striped table-hover">
                <thead class="table-dark">
                  <tr>
                    <th scope="col">
                      <i class="bi bi-person me-1"></i>Name
                    </th>
                    <th scope="col">
                      <i class="bi bi-envelope me-1"></i>Email
                    </th>
                    <th scope="col">
                      <i class="bi bi-telephone me-1"></i>Phone
                    </th>
                    <th scope="col">
                      <i class="bi bi-building me-1"></i>Company
                    </th>
                    <th scope="col">
                      <i class="bi bi-flag me-1"></i>Priority
                    </th>
                    <th scope="col">
                      <i class="bi bi-envelope-check me-1"></i>Newsletter
                    </th>
                    <th scope="col">
                      <i class="bi bi-calendar me-1"></i>Submitted
                    </th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in submittedData" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>
                      <a :href="`mailto:${item.email}`" class="text-decoration-none text-info">
                        {{ item.email }}
                      </a>
                    </td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.company || 'N/A' }}</td>
                    <td>
                      <span class="badge" :class="{
                        'bg-success': item.priority === 'low',
                        'bg-info': item.priority === 'medium',
                        'bg-warning': item.priority === 'high',
                        'bg-danger': item.priority === 'urgent'
                      }">
                        <i :class="`bi ${item.priority === 'urgent' ? 'bi-exclamation-triangle' :
                                      item.priority === 'high' ? 'bi-exclamation-circle' :
                                      item.priority === 'medium' ? 'bi-info-circle' : 'bi-check-circle'} me-1`"></i>
                        {{ item.priority.toUpperCase() }}
                      </span>
                    </td>
                    <td>
                      <i :class="`bi ${item.newsletter ? 'bi-check-circle text-success' : 'bi-x-circle text-danger'} me-1`"></i>
                      {{ item.newsletter ? 'Yes' : 'No' }}
                    </td>
                    <td>{{ item.submittedAt }}</td>
                    <td>
                      <div class="btn-group" role="group">
                        <button
                          type="button"
                          class="btn btn-outline-info btn-sm"
                          @click="viewMessage(item)"
                          title="View Details"
                        >
                          <i class="bi bi-eye"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-danger btn-sm"
                          @click="deleteMessage(item.id)"
                          title="Delete"
                        >
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Simple Pagination -->
            <nav v-if="submittedData.length > 5" aria-label="Table pagination">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  min-height: 100vh;
}

.contact-form-container {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
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

.contact-method:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(8px);
  transition: all 0.3s ease;
}

/* Bootstrap form overrides for dark theme */
.form-control {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.form-control:focus {
  background: rgba(255, 255, 255, 0.15);
  border-color: #3B82F6;
  box-shadow: 0 0 0 0.25rem rgba(59, 130, 246, 0.25);
  color: white;
}

.form-control::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-select {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.form-select:focus {
  background: rgba(255, 255, 255, 0.15);
  border-color: #3B82F6;
  box-shadow: 0 0 0 0.25rem rgba(59, 130, 246, 0.25);
  color: white;
}

.form-check-input {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.form-check-input:checked {
  background-color: #3B82F6;
  border-color: #3B82F6;
}

.form-check-input:focus {
  box-shadow: 0 0 0 0.25rem rgba(59, 130, 246, 0.25);
}

.btn-primary {
  background: linear-gradient(135deg, #10B981, #3B82F6);
  border: none;
  transition: all 0.3s ease;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
  background: linear-gradient(135deg, #059669, #2563EB);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.is-invalid {
  border-color: #dc3545;
}

.is-valid {
  border-color: #198754;
}

.invalid-feedback {
  color: #dc3545;
}

.table-dark {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

/* PrimeVue DataTable Dark Theme Customization */
.datatable-container {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

:deep(.p-datatable) {
  background: transparent;
  color: white;
}

:deep(.p-datatable .p-datatable-header) {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

:deep(.p-datatable .p-datatable-tbody > tr) {
  background: rgba(255, 255, 255, 0.05);
  color: white;
}

:deep(.p-datatable .p-datatable-tbody > tr:nth-child(odd)) {
  background: rgba(255, 255, 255, 0.08);
}

:deep(.p-datatable .p-datatable-tbody > tr:hover) {
  background: rgba(255, 255, 255, 0.15);
}

:deep(.p-datatable .p-datatable-thead > tr > th) {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

:deep(.p-datatable .p-datatable-tbody > tr > td) {
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
}

:deep(.p-paginator) {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

:deep(.p-paginator .p-paginator-pages .p-paginator-page) {
  color: white;
  background: transparent;
}

:deep(.p-paginator .p-paginator-pages .p-paginator-page.p-highlight) {
  background: #3B82F6;
  color: white;
}

:deep(.p-dropdown) {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

:deep(.p-dropdown:not(.p-disabled):hover) {
  border-color: #3B82F6;
}

:deep(.p-dropdown-panel) {
  background: rgba(30, 41, 59, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

:deep(.p-dropdown-items .p-dropdown-item) {
  color: white;
}

:deep(.p-dropdown-items .p-dropdown-item:hover) {
  background: rgba(59, 130, 246, 0.2);
}

:deep(.p-message) {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #10B981;
}

/* Responsive adjustments */
@media (max-width: 576px) {
  .contact-form-container {
    border-radius: 16px;
  }

  .method-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  .datatable-container {
    padding: 0.5rem;
    border-radius: 12px;
  }
}
</style>