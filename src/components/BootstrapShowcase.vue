<template>
  <section class="bootstrap-showcase py-5">
    <div class="container">
      <!-- Responsive Grid Demonstration -->
      <div class="row mb-5">
        <div class="col-12 text-center mb-4">
          <h2 class="display-4 text-white">Bootstrap Responsive Features</h2>
          <p class="lead text-white-50">Demonstrating Bootstrap's responsive grid system and components</p>
        </div>
      </div>

      <!-- Responsive Cards -->
      <div class="row g-4 mb-5">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card bg-dark text-white h-100">
            <div class="card-body">
              <h5 class="card-title">Mobile First</h5>
              <p class="card-text">Responsive design starts with mobile and scales up.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card bg-dark text-white h-100">
            <div class="card-body">
              <h5 class="card-title">Flexible Grid</h5>
              <p class="card-text">12-column grid system adapts to any screen size.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card bg-dark text-white h-100">
            <div class="card-body">
              <h5 class="card-title">Breakpoints</h5>
              <p class="card-text">xs, sm, md, lg, xl, xxl breakpoints for all devices.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card bg-dark text-white h-100">
            <div class="card-body">
              <h5 class="card-title">Components</h5>
              <p class="card-text">Pre-built components work seamlessly together.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Responsive Navigation -->
      <div class="row mb-5">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Vue Bootstrap</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link active" href="#home">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#features">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <!-- Responsive Utilities Demo -->
      <div class="row mb-5">
        <div class="col-12">
          <h3 class="text-white mb-3">Responsive Utilities</h3>
          <div class="alert alert-info d-block d-sm-none">
            <strong>Extra Small (xs):</strong> Visible only on extra small screens (&lt;576px)
          </div>
          <div class="alert alert-success d-none d-sm-block d-md-none">
            <strong>Small (sm):</strong> Visible only on small screens (≥576px)
          </div>
          <div class="alert alert-warning d-none d-md-block d-lg-none">
            <strong>Medium (md):</strong> Visible only on medium screens (≥768px)
          </div>
          <div class="alert alert-primary d-none d-lg-block d-xl-none">
            <strong>Large (lg):</strong> Visible only on large screens (≥992px)
          </div>
          <div class="alert alert-secondary d-none d-xl-block d-xxl-none">
            <strong>Extra Large (xl):</strong> Visible only on extra large screens (≥1200px)
          </div>
          <div class="alert alert-dark d-none d-xxl-block">
            <strong>Extra Extra Large (xxl):</strong> Visible only on extra extra large screens (≥1400px)
          </div>
        </div>
      </div>

      <!-- Responsive Form Elements -->
      <div class="row">
        <div class="col-12">
          <h3 class="text-white mb-3">Responsive Form Layout</h3>
          <form class="bg-dark p-4 rounded">
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <label class="form-label text-white">First Name</label>
                <input type="text" class="form-control" placeholder="First Name">
              </div>
              <div class="col-12 col-md-6">
                <label class="form-label text-white">Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name">
              </div>
              <div class="col-12 col-lg-8">
                <label class="form-label text-white">Email</label>
                <input type="email" class="form-control" placeholder="Email Address">
              </div>
              <div class="col-12 col-lg-4">
                <label class="form-label text-white">Phone</label>
                <input type="tel" class="form-control" placeholder="Phone Number">
              </div>
              <div class="col-12">
                <label class="form-label text-white">Message</label>
                <textarea class="form-control" rows="3" placeholder="Your message"></textarea>
              </div>
              <div class="col-12 col-sm-6 col-md-4">
                <button type="submit" class="btn btn-primary w-100">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// This component demonstrates Bootstrap's responsive features
</script>

<style scoped>
.bootstrap-showcase {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  min-height: 100vh;
}

.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.navbar {
  backdrop-filter: blur(10px);
}

.form-control {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.form-control:focus {
  background: rgba(255, 255, 255, 0.15);
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  color: white;
}

.form-control::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
</style>
