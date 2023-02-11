<template>
  <footer class="footer-section">
    <div
      class="footer-top bg-gradient text-white ptb-120"
      style="
        background: url('assets/img/page-header-bg.svg') no-repeat bottom right;
      "
    >
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
            <div class="footer-single-col">
              <div class="footer-single-col mb-4">
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
              </div>
              <p>
                Our latest news, articles, and resources, we will sent to your
                inbox weekly.
              </p>

              <form
                class="newsletter-form position-relative d-block d-lg-flex d-md-flex"
              >
                <input
                  type="text"
                  class="input-newsletter form-control me-2"
                  placeholder="Enter your email"
                  name="email"
                  autocomplete="off"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  data-wait="Please wait..."
                  class="btn btn-primary mt-3 mt-lg-0 mt-md-0"
                />
              </form>
              <div class="ratting-wrap mt-4">
                <h6 class="mb-0">10/10 Overall rating</h6>
                <ul class="list-unstyled rating-list list-inline mb-0">
                  <li class="list-inline-item">
                    <i class="fas fa-star text-warning"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="fas fa-star text-warning"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="fas fa-star text-warning"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="fas fa-star text-warning"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="fas fa-star text-warning"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
            <div class="row">
              <div class="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                <div class="footer-single-col">
                  <h3>Primary Pages</h3>
                  <ul class="list-unstyled footer-nav-list mb-lg-0">
                    <li>
                      <nuxt-link
                        :to="{ name: 'index' }"
                        class="text-decoration-none"
                        >Home</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link
                        :to="{ name: 'about-us' }"
                        class="text-decoration-none"
                        >About Us</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link
                        :to="{ name: 'services' }"
                        class="text-decoration-none"
                        >Services</nuxt-link
                      >
                    </li>
                    <li>
                      <a href="career.html" class="text-decoration-none"
                        >Career</a
                      >
                    </li>
                    <li>
                      <a href="integrations.html" class="text-decoration-none"
                        >Integrations</a
                      >
                    </li>
                    <li>
                      <a
                        href="integration-single.html"
                        class="text-decoration-none"
                        >Integration Single</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                <div class="footer-single-col">
                  <h3>Pages</h3>
                  <ul class="list-unstyled footer-nav-list mb-lg-0">
                    <li>
                      <nuxt-link
                        :to="{ name: 'pricing' }"
                        class="text-decoration-none"
                        >Pricing</nuxt-link
                      >
                    </li>
                    <li>
                      <a href="blog.html" class="text-decoration-none">Blog</a>
                    </li>
                    <li>
                      <a href="blog-single.html" class="text-decoration-none"
                        >Blog Details</a
                      >
                    </li>
                    <li>
                      <nuxt-link
                        :to="{ name: 'contact-us' }"
                        class="text-decoration-none"
                        >Contact</nuxt-link
                      >
                    </li>
                    <li>
                      <a href="career-single.html" class="text-decoration-none"
                        >Career Single</a
                      >
                    </li>
                    <li>
                      <a href="service-single.html" class="text-decoration-none"
                        >Services Single</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                <div class="footer-single-col">
                  <h3>Template</h3>
                  <ul class="list-unstyled footer-nav-list mb-lg-0">
                    <li>
                      <nuxt-link
                        :to="{ name: 'contact-us' }"
                        class="text-decoration-none"
                        >Contact</nuxt-link
                      >
                    </li>
                    <li>
                      <a href="support.html" class="text-decoration-none"
                        >Support</a
                      >
                    </li>
                    <li>
                      <a href="support-single.html" class="text-decoration-none"
                        >Support Single</a
                      >
                    </li>
                    <li>
                      <a href="team.html" class="text-decoration-none"
                        >Our Team</a
                      >
                    </li>
                    <li>
                      <a href="client-review.html" class="text-decoration-none"
                        >Customer Review</a
                      >
                    </li>
                    <li>
                      <a href="career-single.html" class="text-decoration-none"
                        >Career Single</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--footer top end-->

    <!--footer bottom start-->
    <div class="footer-bottom bg-gradient text-white py-4">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-md-7 col-lg-7">
            <div class="copyright-text">
              <p class="mb-lg-0 mb-md-0">
                © 2021 Quiety Rights Reserved. Designed By
                <a href="https://themetags.com/" class="text-decoration-none"
                  >ThemeTags</a
                >
              </p>
            </div>
          </div>
          <div class="col-md-4 col-lg-4">
            <div class="footer-single-col text-start text-lg-end text-md-end">
              <ul class="list-unstyled list-inline footer-social-list mb-0">
                <li class="list-inline-item">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"><i class="fab fa-dribbble"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"><i class="fab fa-github"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
