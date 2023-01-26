<template>
  <!--cat subscribe start-->
  <section class="cta-subscribe pt-60 pb-120">
    <div class="container">
      <div
        class="bg-gradient ptb-120 position-relative overflow-hidden rounded-custom"
      >
        <div class="row justify-content-center">
          <div class="col-lg-7 col-md-8">
            <div class="subscribe-info-wrap text-center position-relative z-2">
              <div class="section-heading">
                <h4 class="h5 text-warning">Let's Try! Get Free Support</h4>
                <h2>Start Your 14-Day Free Trial</h2>
                <p>
                  We can help you to create your dream website for better
                  business revenue.
                </p>
              </div>
              <div class="form-block-banner mw-60 m-auto mt-5">
                <nuxt-link :to="{ name: 'contact-us' }" class="btn btn-primary"
                  >Contact with Us</nuxt-link
                >
                <a
                  href="http://www.youtube.com/watch?v=hAP2QF--2Dg"
                  class="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn ms-lg-3 ms-md-3 mt-3 mt-lg-0"
                >
                  <i class="fas fa-play"></i> Watch Demo
                </a>
              </div>
              <ul
                class="nav justify-content-center subscribe-feature-list mt-4"
              >
                <li class="nav-item">
                  <span
                    ><i class="far fa-check-circle text-primary me-2"></i>Free
                    14-day trial</span
                  >
                </li>
                <li class="nav-item">
                  <span
                    ><i class="far fa-check-circle text-primary me-2"></i>No
                    credit card required</span
                  >
                </li>
                <li class="nav-item">
                  <span
                    ><i class="far fa-check-circle text-primary me-2"></i
                    >Support 24/7</span
                  >
                </li>
                <li class="nav-item">
                  <span
                    ><i class="far fa-check-circle text-primary me-2"></i>Cancel
                    anytime</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"
        ></div>
        <div
          class="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"
        ></div>
      </div>
    </div>
  </section>
  <!--cat subscribe end-->
</template>
<script>
export default {
  name: "CtaSubscribe",
};
</script>
