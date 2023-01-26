<template>
  <div>
    <!--preloader start-->
    <!-- TODO:add custom preloader with vue -->
    <!-- <div id="preloader">
      <div class="preloader-wrap">
        <img
          src="~/assets/img/favicon.png"
          alt="logo"
          class="img-fluid preloader-icon"
        />
        <div class="loading-bar"></div>
      </div>
    </div> -->
    <!--preloader end-->
    <!--main content wrapper start-->
    <div class="main-wrapper">
      <!--header section start-->
      <!--header start-->
      <header class="main-header position-absolute w-100">
        <nav class="navbar navbar-expand-xl navbar-dark sticky-header z-10">
          <div
            class="container d-flex align-items-center justify-content-lg-between position-relative"
          >
            <nuxt-link
              :to="{ name: 'index' }"
              class="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none"
            >
              <img
                src="~/assets/img/logo-white.png"
                alt="logo"
                class="img-fluid logo-white"
              />
              <img
                src="~/assets/img/logo-color.png"
                alt="logo"
                class="img-fluid logo-color"
              />
            </nuxt-link>
            <a
              class="navbar-toggler position-absolute right-0 border-0"
              href="#offcanvasWithBackdrop"
            >
              <span
                class="far fa-bars"
                data-bs-target="#offcanvasWithBackdrop"
                aria-controls="offcanvasWithBackdrop"
                data-bs-toggle="offcanvas"
                role="button"
              ></span>
            </a>
            <div class="clearfix"></div>
            <div class="collapse navbar-collapse justify-content-center">
              <ul
                class="nav col-12 col-md-auto justify-content-center main-menu"
              >
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >Home</a
                  >
                  <div
                    class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white homepage-list-wrapper"
                    style="display: none"
                  >
                    <div
                      class="dropdown-grid rounded-custom width-full homepage-dropdown"
                    >
                      <div class="dropdown-grid-item">
                        <h6 class="drop-heading">Different Home</h6>
                        <nuxt-link
                          :to="{ name: 'index' }"
                          class="dropdown-link"
                        >
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                            >1</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Saas Company 1</div>
                            <p>
                              It's for <strong>SaaS Software</strong> Company
                            </p>
                          </div>
                        </nuxt-link>
                        <a href="index-2.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                            >2</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Saas Company 2</div>
                            <p>Modern <strong>Saas agency</strong></p>
                          </div>
                        </a>
                        <a href="index-3.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                            >3</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Desktop App</div>
                            <p><strong>Web Software</strong> Company</p>
                          </div>
                        </a>
                        <a href="index-4.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                            >4</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">App Landing</div>
                            <p>App and <strong>Software</strong> Landing</p>
                          </div>
                        </a>
                        <a href="index-5.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                            >5</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Software Application</div>
                            <p>
                              IT solutions and <strong>SaaS Application</strong>
                            </p>
                          </div>
                        </a>
                        <a href="index-6.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                            >6</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Startup Agency</div>
                            <p>
                              Different type of <strong>Agency</strong>&lrm;
                            </p>
                          </div>
                        </a>
                        <a href="index-7.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                            >7</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Data Analysis</div>
                            <p>
                              Software &amp; <strong>Data Analysis</strong>&lrm;
                            </p>
                          </div>
                        </a>
                      </div>
                      <div class="dropdown-grid-item bg-light">
                        <h6 class="drop-heading">Different Home</h6>
                        <a href="index-8.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                            >8</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">App Landing Two</div>
                            <p>
                              Software &amp; <strong>Data Analysis</strong>&lrm;
                            </p>
                          </div>
                        </a>
                        <a href="index-9.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                            >9</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">IT Solution</div>
                            <p>
                              IT solutions and <strong>SaaS Application</strong>
                            </p>
                          </div>
                        </a>
                        <a href="index-10.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                            >10</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Cyber Security</div>
                            <p>Cyber Security <strong>Landing Page</strong></p>
                          </div>
                        </a>
                        <a href="index-11.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                          >
                            11
                          </span>
                          <div class="dropdown-info">
                            <div class="drop-title">Crypto Currency</div>
                            <p><strong>Crypto Currency</strong> landing page</p>
                          </div>
                        </a>
                        <a href="index-12.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                          >
                            12
                          </span>
                          <div class="dropdown-info">
                            <div class="drop-title">Game Solutions</div>
                            <p><strong>Game Server</strong> landing page</p>
                          </div>
                        </a>
                        <a href="index-13.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                          >
                            13
                          </span>
                          <div class="dropdown-info">
                            <div class="drop-title">Payment Gateway</div>
                            <p><strong>Payment Gateway</strong> landing page</p>
                          </div>
                        </a>
                        <a href="index-14.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                          >
                            14
                          </span>
                          <div class="dropdown-info">
                            <div class="drop-title">Digital Marketing</div>
                            <p>
                              <strong>Digital Marketing</strong> landing page
                            </p>
                          </div>
                        </a>
                      </div>
                      <div class="dropdown-grid-item">
                        <h6 class="drop-heading">Different Home</h6>
                        <a href="index-15.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                          >
                            15
                          </span>
                          <div class="dropdown-info">
                            <div class="drop-title">Conference &amp; Event</div>
                            <p>
                              <strong>Conference &amp; Event</strong> landing
                            </p>
                          </div>
                        </a>
                        <a href="index-16.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                          >
                            16
                          </span>
                          <div class="dropdown-info">
                            <div class="drop-title">Quiety Insurance</div>
                            <p><strong>Quiety Insurance</strong> landing</p>
                          </div>
                        </a>
                        <a href="index-17.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                          >
                            17
                          </span>
                          <div class="dropdown-info">
                            <div class="drop-title">Sass Marketing</div>
                            <p><strong>Sass Marketing</strong> landing</p>
                          </div>
                        </a>
                        <a href="index-18.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                          >
                            18
                          </span>
                          <div class="dropdown-info">
                            <div class="drop-title">CRM Home</div>
                            <p>Customer Relationship</p>
                          </div>
                        </a>
                        <a href="index-19.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                          >
                            19
                          </span>
                          <div class="dropdown-info">
                            <div class="drop-title">Help Desk</div>
                            <p>Help Desk Home</p>
                          </div>
                        </a>
                        <a href="index-20.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                          >
                            20
                          </span>
                          <div class="dropdown-info">
                            <div class="drop-title">Digital Agency</div>
                            <p>Digital Agency Home</p>
                          </div>
                        </a>
                        <a href="index-21.html" class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                          >
                            21
                          </span>
                          <div class="dropdown-info">
                            <div class="drop-title">Software Company</div>
                            <p>Software Company Home</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <nuxt-link :to="{ name: 'services' }" class="nav-link"
                    >Services</nuxt-link
                  >
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >Resources</a
                  >
                  <div
                    class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white"
                    style="display: none"
                  >
                    <div class="dropdown-grid rounded-custom width-full-3">
                      <div class="dropdown-grid-item">
                        <h6 class="drop-heading">Reusable Section</h6>
                        <a href="header.html" class="dropdown-link">
                          <span class="me-2"><i class="far fa-bars"></i></span>
                          <div class="drop-title">Navigations</div>
                        </a>
                        <a href="hero-sections.html" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-browser"></i
                          ></span>
                          <div class="drop-title">Hero Sections</div>
                        </a>
                        <a href="testimonials.html" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-address-card"></i
                          ></span>
                          <div class="drop-title">Testimonials</div>
                        </a>
                        <a href="call-to-action.html" class="dropdown-link">
                          <span class="me-2"><i class="far fa-bolt"></i></span>
                          <div class="drop-title">Call to Action</div>
                        </a>
                        <a href="tab-style.html" class="dropdown-link">
                          <span class="me-2"><i class="far fa-eject"></i></span>
                          <div class="drop-title">Tab Style</div>
                        </a>
                        <a href="services-style.html" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-code-branch"></i
                          ></span>
                          <div class="drop-title">Services Style</div>
                        </a>
                        <a href="work-process.html" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-hourglass-start"></i
                          ></span>
                          <div class="drop-title">Work Process</div>
                        </a>
                      </div>
                      <div class="dropdown-grid-item">
                        <h6 class="drop-heading">Reusable Section</h6>
                        <a href="pricing-style.html" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-usd-square"></i
                          ></span>
                          <div class="drop-title">Pricing Style</div>
                        </a>
                        <a href="accordions.html" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-th-list"></i
                          ></span>
                          <div class="drop-title">Accordions</div>
                        </a>
                        <a href="features.html" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-chart-network"></i
                          ></span>
                          <div class="drop-title">Features</div>
                        </a>
                        <a href="footers.html" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-closed-captioning"></i
                          ></span>
                          <div class="drop-title">Footers</div>
                        </a>
                        <a href="team.html" class="dropdown-link">
                          <span class="me-2"><i class="far fa-user"></i></span>
                          <div class="drop-title">Our Team</div>
                        </a>
                        <a href="integration-style.html" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-paper-plane"></i
                          ></span>
                          <div class="drop-title">Integration Style</div>
                        </a>
                        <a href="blog-style.html" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-th-large"></i
                          ></span>
                          <div class="drop-title">Blog Style</div>
                        </a>
                      </div>
                      <div
                        class="dropdown-grid-item last-item bg-light radius-right-side"
                      >
                        <a href="#"
                          ><img
                            src="~/assets/img/feature-img3.jpg"
                            alt="add"
                            class="img-fluid rounded-custom"
                        /></a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <nuxt-link :to="{ name: 'pricing' }" class="nav-link"
                    >Pricing</nuxt-link
                  >
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >Company</a
                  >
                  <div
                    class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white"
                  >
                    <div class="dropdown-grid rounded-custom width-full">
                      <div class="dropdown-grid-item">
                        <h6 class="drop-heading">Useful Links</h6>
                        <nuxt-link
                          :to="{ name: 'about-us' }"
                          class="dropdown-link px-0"
                        >
                          <span class="me-2"
                            ><i class="far fa-fingerprint"></i
                          ></span>
                          <div class="drop-title">About Us</div>
                        </nuxt-link>
                        <nuxt-link
                          :to="{ name: 'contact-us' }"
                          class="dropdown-link px-0"
                        >
                          <span class="me-2"
                            ><i class="far fa-address-book"></i
                          ></span>
                          <div class="drop-title">Contact Us</div>
                        </nuxt-link>
                        <nuxt-link
                          :to="{ name: 'services' }"
                          class="dropdown-link"
                        >
                          <span class="me-2"
                            ><i class="far fa-code-branch"></i
                          ></span>
                          <div class="drop-title">Services</div>
                        </nuxt-link>
                        <a
                          href="service-single.html"
                          class="dropdown-link px-0"
                        >
                          <span class="me-2"
                            ><i class="far fa-server"></i
                          ></span>
                          <div class="drop-title">Services Single</div>
                        </a>
                        <a href="blog.html" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-th-large"></i
                          ></span>
                          <div class="drop-title">Our Latest News</div>
                        </a>
                        <a href="blog-single.html" class="dropdown-link">
                          <span class="me-2"><i class="far fa-bars"></i></span>
                          <div class="drop-title">News Details</div>
                        </a>
                        <a href="career.html" class="dropdown-link px-0">
                          <span class="me-2"
                            ><i class="far fa-graduation-cap"></i
                          ></span>
                          <div class="drop-title">Career</div>
                        </a>
                        <a href="career-single.html" class="dropdown-link px-0">
                          <span class="me-2"
                            ><i class="far fa-user-graduate"></i
                          ></span>
                          <div class="drop-title">Career Single</div>
                        </a>
                        <a href="integrations.html" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-rocket-launch"></i
                          ></span>
                          <div class="drop-title">Integrations</div>
                        </a>
                        <a
                          href="integration-single.html"
                          class="dropdown-link px-0"
                        >
                          <span class="me-2"
                            ><i class="far fa-paper-plane"></i
                          ></span>
                          <div class="drop-title">Integration Single</div>
                        </a>
                      </div>
                      <div
                        class="dropdown-grid-item radius-right-side bg-light"
                      >
                        <h6 class="drop-heading">Utility Pages</h6>
                        <a href="style-guide.html" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-code-branch"></i
                          ></span>
                          <div class="drop-title">Style Guide</div>
                        </a>
                        <a href="support.html" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-life-ring"></i
                          ></span>
                          <div class="drop-title">Help Center</div>
                        </a>
                        <a href="support-single.html" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-headset"></i
                          ></span>
                          <div class="drop-title">Help Details</div>
                        </a>
                        <a href="team.html" class="dropdown-link">
                          <span class="me-2"><i class="far fa-user"></i></span>
                          <div class="drop-title">Our Team</div>
                        </a>
                        <nuxt-link
                          :to="{ name: 'request' }"
                          class="dropdown-link"
                        >
                          <span class="me-2"
                            ><i class="far fa-laptop-code"></i
                          ></span>
                          <div class="drop-title">Request for Demo</div>
                        </nuxt-link>
                        <!-- <nuxt-link
                          :to="{ name: 'login' }"
                          class="dropdown-link"
                        >
                          <span class="me-2"
                            ><i class="far fa-sign-in"></i
                          ></span>
                          <div class="drop-title">User Login</div>
                        </nuxt-link> -->
                        <a href="register.html" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-user-plus"></i
                          ></span>
                          <div class="drop-title">User SignUp</div>
                        </a>
                        <a href="password-reset.html" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-trash-undo"></i
                          ></span>
                          <div class="drop-title">Recovery Account</div>
                        </a>
                        <a href="404.html" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-exclamation-triangle"></i
                          ></span>
                          <div class="drop-title">404 Page</div>
                        </a>
                        <a href="coming-soon.html" class="dropdown-link">
                          <span class="me-2"><i class="far fa-clock"></i></span>
                          <div class="drop-title">Coming Soon</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              class="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block"
            >
              <!-- <nuxt-link
                :to="{ name: 'login' }"
                class="btn btn-link text-decoration-none me-2"
                >Sign In</nuxt-link
              > -->
              <nuxt-link :to="{ name: 'request' }" class="btn btn-primary"
                >Get Started</nuxt-link
              >
            </div>
          </div>
        </nav>
        <!--offcanvas menu start-->
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasWithBackdrop"
        >
          <div class="offcanvas-header d-flex align-items-center mt-4">
            <nuxt-link
              :to="{ name: 'index' }"
              class="d-flex align-items-center mb-md-0 text-decoration-none"
            >
              <img
                src="~/assets/img/logo-color.png"
                alt="logo"
                class="img-fluid ps-2"
              />
            </nuxt-link>
            <button
              type="button"
              class="close-btn text-danger"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i class="far fa-close"></i>
            </button>
          </div>
          <div class="offcanvas-body z-10">
            <ul class="nav col-12 col-md-auto justify-content-center main-menu">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </a>
                <div
                  class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white"
                >
                  <div class="dropdown-grid rounded-custom width-half">
                    <div class="dropdown-grid-item">
                      <h6 class="drop-heading">Different Home</h6>
                      <nuxt-link :to="{ name: 'index' }" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >1</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Saas Company 1</div>
                          <p>It's for <strong>SaaS Software</strong> Company</p>
                        </div>
                      </nuxt-link>
                      <a href="index-2.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >2</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Saas Company 2</div>
                          <p>Modern <strong>Saas agency</strong></p>
                        </div>
                      </a>
                      <a href="index-3.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >3</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Desktop App</div>
                          <p><strong>Web Software</strong> Company</p>
                        </div>
                      </a>
                      <a href="index-4.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >4</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">App Landing</div>
                          <p>App and <strong>Software</strong> Landing</p>
                        </div>
                      </a>
                      <a href="index-5.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >5</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Software Application</div>
                          <p>
                            IT solutions and <strong>SaaS Application</strong>
                          </p>
                        </div>
                      </a>
                      <a href="index-6.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >6</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Startup Agency</div>
                          <p>Different type of <strong>Agency</strong>&lrm;</p>
                        </div>
                      </a>
                      <a href="index-7.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >7</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Data Analysis</div>
                          <p>
                            Software &amp; <strong>Data Analysis</strong>&lrm;
                          </p>
                        </div>
                      </a>
                      <a href="index-8.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >8</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">App Landing Two</div>
                          <p>
                            Software &amp; <strong>App Landing Two</strong>&lrm;
                          </p>
                        </div>
                      </a>
                      <a href="index-9.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >9</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">IT Solution</div>
                          <p>
                            IT solutions and <strong>SaaS Application</strong>
                          </p>
                        </div>
                      </a>
                      <a href="index-10.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >10</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Cyber Security</div>
                          <p>Cyber Security <strong>Landing Page</strong></p>
                        </div>
                      </a>
                      <a href="index-11.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                        >
                          11
                        </span>
                        <div class="dropdown-info">
                          <div class="drop-title">Crypto Currency</div>
                          <p><strong>Crypto Currency</strong> landing page</p>
                        </div>
                      </a>
                      <a href="index-12.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                        >
                          12
                        </span>
                        <div class="dropdown-info">
                          <div class="drop-title">Game Solutions</div>
                          <p><strong>Game Server</strong> landing page</p>
                        </div>
                      </a>
                      <a href="index-13.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                        >
                          13
                        </span>
                        <div class="dropdown-info">
                          <div class="drop-title">Payment Gateway</div>
                          <p><strong>Payment Gateway</strong> landing page</p>
                        </div>
                      </a>
                      <a href="index-14.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                        >
                          14
                        </span>
                        <div class="dropdown-info">
                          <div class="drop-title">Digital Marketing</div>
                          <p><strong>Digital Marketing</strong> landing page</p>
                        </div>
                      </a>

                      <a href="index-15.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                        >
                          15
                        </span>
                        <div class="dropdown-info">
                          <div class="drop-title">Conference &amp; Event</div>
                          <p><strong>Conference &amp; Event</strong> landing</p>
                        </div>
                      </a>
                      <a href="index-16.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                        >
                          16
                        </span>
                        <div class="dropdown-info">
                          <div class="drop-title">Quiety Insurance</div>
                          <p><strong>Quiety Insurance</strong> landing</p>
                        </div>
                      </a>
                      <a href="index-17.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                        >
                          17
                        </span>
                        <div class="dropdown-info">
                          <div class="drop-title">Sass Marketing</div>
                          <p><strong>Sass Marketing</strong> landing</p>
                        </div>
                      </a>
                      <a href="index-18.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                        >
                          18
                        </span>
                        <div class="dropdown-info">
                          <div class="drop-title">CRM Home</div>
                          <p>Customer Relationship</p>
                        </div>
                      </a>
                      <a href="index-19.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                        >
                          19
                        </span>
                        <div class="dropdown-info">
                          <div class="drop-title">Help Desk</div>
                          <p>Help Desk Home</p>
                        </div>
                      </a>
                      <a href="index-20.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                        >
                          20
                        </span>
                        <div class="dropdown-info">
                          <div class="drop-title">Digital Agency</div>
                          <p>Digital Agency Home</p>
                        </div>
                      </a>
                      <a href="index-21.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                        >
                          21
                        </span>
                        <div class="dropdown-info">
                          <div class="drop-title">Software Company</div>
                          <p>Software Company Home</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <nuxt-link :to="{ name: 'services' }" class="nav-link"
                  >Services</nuxt-link
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >Resources</a
                >
                <div
                  class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white"
                >
                  <div class="dropdown-grid rounded-custom width-full-3">
                    <div class="dropdown-grid-item">
                      <h6 class="drop-heading">Reusable Section</h6>
                      <a href="header.html" class="dropdown-link">
                        <span class="me-2"><i class="far fa-bars"></i></span>
                        <div class="drop-title">Navigations</div>
                      </a>
                      <a href="hero-sections.html" class="dropdown-link">
                        <span class="me-2"><i class="far fa-browser"></i></span>
                        <div class="drop-title">Hero Sections</div>
                      </a>
                      <a href="testimonials.html" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-address-card"></i
                        ></span>
                        <div class="drop-title">Testimonials</div>
                      </a>
                      <a href="call-to-action.html" class="dropdown-link">
                        <span class="me-2"><i class="far fa-bolt"></i></span>
                        <div class="drop-title">Call to Action</div>
                      </a>
                      <a href="tab-style.html" class="dropdown-link">
                        <span class="me-2"><i class="far fa-eject"></i></span>
                        <div class="drop-title">Tab Style</div>
                      </a>
                      <a href="services-style.html" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-code-branch"></i
                        ></span>
                        <div class="drop-title">Services Style</div>
                      </a>
                      <a href="work-process.html" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-hourglass-start"></i
                        ></span>
                        <div class="drop-title">Work Process</div>
                      </a>

                      <a href="index-2.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >2</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Saas Company 2</div>
                          <p>Modern <strong>Saas agency</strong></p>
                        </div>
                      </a>
                      <a href="index-3.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >3</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Desktop App</div>
                          <p><strong>Web Software</strong> Company</p>
                        </div>
                      </a>
                      <a href="index-4.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >4</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">App Landing</div>
                          <p>App and <strong>Software</strong> Landing</p>
                        </div>
                      </a>
                      <a href="index-5.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >5</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Software Application</div>
                          <p>
                            IT solutions and <strong>SaaS Application</strong>
                          </p>
                        </div>
                      </a>
                      <a href="index-6.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >6</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Startup Agency</div>
                          <p>Different type of <strong>Agency</strong>&lrm;</p>
                        </div>
                      </a>
                      <a href="index-7.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >8</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Data Analysis</div>
                          <p>
                            Software &amp; <strong>Data Analysis</strong>&lrm;
                          </p>
                        </div>
                      </a>
                      <a href="index-8.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >9</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">App Landing Two</div>
                          <p>
                            Software &amp; <strong>App Landing Two</strong>&lrm;
                          </p>
                        </div>
                      </a>
                      <a href="index-9.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >10</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">IT Solution</div>
                          <p>
                            IT solutions and <strong>SaaS Application</strong>
                          </p>
                        </div>
                      </a>
                      <a href="index-10.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >11</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Cyber Security</div>
                          <p>Cyber Security <strong>Landing Page</strong></p>
                        </div>
                      </a>
                      <a href="index-11.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                        >
                          12
                        </span>
                        <div class="dropdown-info">
                          <div class="drop-title">Crypto Currency</div>
                          <p><strong>Crypto Currency</strong> landing page</p>
                        </div>
                      </a>
                      <a href="index-13.html" class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                        >
                          13
                        </span>
                        <div class="dropdown-info">
                          <div class="drop-title">Payment Gateway</div>
                          <p><strong>Payment Gateway</strong> landing page</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <nuxt-link :to="{ name: 'services' }" class="nav-link"
                  >Services</nuxt-link
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >Resources</a
                >
                <div
                  class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white"
                >
                  <div class="dropdown-grid rounded-custom width-full-3">
                    <div class="dropdown-grid-item">
                      <h6 class="drop-heading">Reusable Section</h6>
                      <a href="header.html" class="dropdown-link">
                        <span class="me-2"><i class="far fa-bars"></i></span>
                        <div class="drop-title">Navigations</div>
                      </a>
                      <a href="hero-sections.html" class="dropdown-link">
                        <span class="me-2"><i class="far fa-browser"></i></span>
                        <div class="drop-title">Hero Sections</div>
                      </a>
                      <a href="testimonials.html" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-address-card"></i
                        ></span>
                        <div class="drop-title">Testimonials</div>
                      </a>
                      <a href="call-to-action.html" class="dropdown-link">
                        <span class="me-2"><i class="far fa-bolt"></i></span>
                        <div class="drop-title">Call to Action</div>
                      </a>
                      <a href="tab-style.html" class="dropdown-link">
                        <span class="me-2"><i class="far fa-eject"></i></span>
                        <div class="drop-title">Tab Style</div>
                      </a>
                      <a href="services-style.html" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-code-branch"></i
                        ></span>
                        <div class="drop-title">Services Style</div>
                      </a>
                      <a href="work-process.html" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-hourglass-start"></i
                        ></span>
                        <div class="drop-title">Work Process</div>
                      </a>
                    </div>
                    <div class="dropdown-grid-item">
                      <h6 class="drop-heading">Reusable Section</h6>
                      <a href="pricing-style.html" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-usd-square"></i
                        ></span>
                        <div class="drop-title">Pricing Style</div>
                      </a>
                      <a href="accordions.html" class="dropdown-link">
                        <span class="me-2"><i class="far fa-th-list"></i></span>
                        <div class="drop-title">Accordions</div>
                      </a>
                      <a href="features.html" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-chart-network"></i
                        ></span>
                        <div class="drop-title">Features</div>
                      </a>
                      <a href="footers.html" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-closed-captioning"></i
                        ></span>
                        <div class="drop-title">Footers</div>
                      </a>
                      <a href="team.html" class="dropdown-link">
                        <span class="me-2"><i class="far fa-user"></i></span>
                        <div class="drop-title">Our Team</div>
                      </a>
                      <a href="integration-style.html" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-paper-plane"></i
                        ></span>
                        <div class="drop-title">Integration Style</div>
                      </a>
                      <a href="blog-style.html" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-th-large"></i
                        ></span>
                        <div class="drop-title">Blog Style</div>
                      </a>
                    </div>
                    <div
                      class="dropdown-grid-item last-item bg-light radius-right-side"
                    >
                      <a href="#"
                        ><img
                          src="~/assets/img/feature-img3.jpg"
                          alt="add"
                          class="img-fluid rounded-custom"
                      /></a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <nuxt-link :to="{ name: 'pricing' }" class="nav-link"
                  >Pricing</nuxt-link
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >Company</a
                >
                <div
                  class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white"
                >
                  <div class="dropdown-grid rounded-custom width-full">
                    <div class="dropdown-grid-item">
                      <h6 class="drop-heading">Useful Links</h6>
                      <nuxt-link
                        :to="{ name: 'about-us' }"
                        class="dropdown-link px-0"
                      >
                        <span class="me-2"
                          ><i class="far fa-fingerprint"></i
                        ></span>
                        <div class="drop-title">About Us</div>
                      </nuxt-link>
                      <nuxt-link
                        :to="{ name: 'contact-us' }"
                        class="dropdown-link px-0"
                      >
                        <span class="me-2"
                          ><i class="far fa-address-book"></i
                        ></span>
                        <div class="drop-title">Contact Us</div>
                      </nuxt-link>
                      <nuxt-link
                        :to="{ name: 'services' }"
                        class="dropdown-link"
                      >
                        <span class="me-2"
                          ><i class="far fa-code-branch"></i
                        ></span>
                        <div class="drop-title">Services</div>
                      </nuxt-link>
                      <a href="service-single.html" class="dropdown-link px-0">
                        <span class="me-2"><i class="far fa-server"></i></span>
                        <div class="drop-title">Services Single</div>
                      </a>
                      <a href="blog.html" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-th-large"></i
                        ></span>
                        <div class="drop-title">Our Latest News</div>
                      </a>
                      <a href="blog-single.html" class="dropdown-link">
                        <span class="me-2"><i class="far fa-bars"></i></span>
                        <div class="drop-title">News Details</div>
                      </a>
                      <a href="career.html" class="dropdown-link px-0">
                        <span class="me-2"
                          ><i class="far fa-graduation-cap"></i
                        ></span>
                        <div class="drop-title">Career</div>
                      </a>
                      <a href="career-single.html" class="dropdown-link px-0">
                        <span class="me-2"
                          ><i class="far fa-user-graduate"></i
                        ></span>
                        <div class="drop-title">Career Single</div>
                      </a>
                      <a href="integrations.html" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-rocket-launch"></i
                        ></span>
                        <div class="drop-title">Integrations</div>
                      </a>
                      <a
                        href="integration-single.html"
                        class="dropdown-link px-0"
                      >
                        <span class="me-2"
                          ><i class="far fa-paper-plane"></i
                        ></span>
                        <div class="drop-title">Integration Single</div>
                      </a>
                    </div>
                    <div class="dropdown-grid-item radius-right-side bg-light">
                      <h6 class="drop-heading">Utility Pages</h6>
                      <a href="style-guide.html" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-code-branch"></i
                        ></span>
                        <div class="drop-title">Style Guide</div>
                      </a>
                      <a href="support.html" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-life-ring"></i
                        ></span>
                        <div class="drop-title">Help Center</div>
                      </a>
                      <a href="support-single.html" class="dropdown-link">
                        <span class="me-2"><i class="far fa-headset"></i></span>
                        <div class="drop-title">Help Details</div>
                      </a>
                      <a href="team.html" class="dropdown-link">
                        <span class="me-2"><i class="far fa-user"></i></span>
                        <div class="drop-title">Our Team</div>
                      </a>
                      <nuxt-link
                        :to="{ name: 'request' }"
                        class="dropdown-link"
                      >
                        <span class="me-2"
                          ><i class="far fa-laptop-code"></i
                        ></span>
                        <div class="drop-title">Request for Demo</div>
                      </nuxt-link>
                      <!--   <nuxt-link :to="{ name: 'login' }" class="dropdown-link">
                        <span class="me-2"><i class="far fa-sign-in"></i></span>
                        <div class="drop-title">User Login</div>
                      </nuxt-link> -->
                      <a href="register.html" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-user-plus"></i
                        ></span>
                        <div class="drop-title">User SignUp</div>
                      </a>
                      <a href="password-reset.html" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-trash-undo"></i
                        ></span>
                        <div class="drop-title">Recovery Account</div>
                      </a>
                      <a href="404.html" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-exclamation-triangle"></i
                        ></span>
                        <div class="drop-title">404 Page</div>
                      </a>
                      <a href="coming-soon.html" class="dropdown-link">
                        <span class="me-2"><i class="far fa-clock"></i></span>
                        <div class="drop-title">Coming Soon</div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="action-btns mt-4 ps-3">
              <!--  <nuxt-link
                :to="{ name: 'login' }"
                class="btn btn-outline-primary me-2"
                >Sign In</nuxt-link
              > -->
              <nuxt-link :to="{ name: 'request' }" class="btn btn-primary"
                >Get Started</nuxt-link
              >
            </div>
          </div>
        </div>
        <!--offcanvas menu end-->
      </header>
      <!--header end-->
      <!--header section end-->
    </div>
  </div>
</template>
