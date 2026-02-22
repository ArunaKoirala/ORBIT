<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>ORBIT</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Bootstrap Icons -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      rel="stylesheet"
    />
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <!-- font link -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Playwrite+AU+QLD:wght@100..400&display=swap"
      rel="stylesheet"
    />

    <!-- Animate.css for fadeIn effect -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <link rel="stylesheet" href="./stylesheet/header.css" />
    <script src="./js/index.js"></script>
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />

    <!-- AOS CSS -->
    <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet" />
  </head>
  <body>
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-2">
      <div class="container">
        <!-- Logo -->
        <a class="navbar-brand" href="#">
          <img src="./images/logo.png" alt="Logo" style="height: 50px" />
        </a>

        <!-- Toggler for mobile -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar content -->
        <div class="collapse navbar-collapse" id="mainNavbar">
          <!-- Center: Menus -->
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            <li class="nav-item me-lg-4">
              <a class="nav-link" href="#">Home</a>
            </li>

            <!-- Destinations Dropdown -->
            <li class="nav-item dropdown me-lg-4">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="destinationsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Destinations
              </a>
              <ul class="dropdown-menu" aria-labelledby="destinationsDropdown">
                <li><a class="dropdown-item" href="#">Nepal</a></li>
                <li><a class="dropdown-item" href="#">India</a></li>
                <li><a class="dropdown-item" href="#">Thailand</a></li>
              </ul>
            </li>

            <!-- Travel Guides Dropdown -->
            <li class="nav-item dropdown me-lg-4">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="guidesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Travel Guides
              </a>
              <ul class="dropdown-menu" aria-labelledby="guidesDropdown">
                <li><a class="dropdown-item" href="#">Travel Checklist</a></li>
                <li><a class="dropdown-item" href="#">Best Travel Times</a></li>
                <li><a class="dropdown-item" href="#">Budgeting Tips</a></li>
                <li>
                  <a class="dropdown-item" href="#">Destination Guides</a>
                </li>
                <li><a class="dropdown-item" href="#">Travel Insurance</a></li>
                <li><a class="dropdown-item" href="#">Local Etiquette</a></li>
              </ul>
            </li>

            <!-- Company Dropdown -->
            <li class="nav-item dropdown me-lg-4">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="companyDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </a>
              <ul class="dropdown-menu" aria-labelledby="companyDropdown">
                <li><a class="dropdown-item" href="#">Our Story</a></li>
                <li><a class="dropdown-item" href="#">Our Team</a></li>
                <li><a class="dropdown-item" href="#">Why Choose Us</a></li>
                <li><a class="dropdown-item" href="#">Careers</a></li>
                <li><a class="dropdown-item" href="#">FAQs</a></li>
                <li><a class="dropdown-item" href="#">Contact Support</a></li>
              </ul>
            </li>

            <li class="nav-item me-lg-4">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item me-lg-4">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>

        <!-- Right: Icons -->
        <div class="d-flex align-items-center ms-auto gap-3">
          <i class="bi bi-search fs-5" title="Search"></i>
          <i class="bi bi-heart fs-5" title="Wishlist"></i>
          <img src="./images/user.png" alt="User" style="height: 30px" />
        </div>
      </div>
    </nav>
