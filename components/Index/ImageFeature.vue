<template>
  <!--image feature section start-->
  <section class="image-feature pt-60 pb-120">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-5 col-12 order-lg-1">
          <div class="feature-img-content">
            <div
              class="icon-box rounded-custom bg-dark shadow-sm d-inline-block">
              <i class="fal fa-microchip-ai fa-2x text-white"></i>
            </div>
            <h2>Algo Portfolio</h2>
            <p>
              In past 3 years we work hard on AlgoTrading to create profitable,
              diversified, and world-class AlgoTrading systems. All of our focus
              on real results in real world.
            </p>
            <p>
              We generate algorithms via genetic AI trading engine that check
              millions of parameters to ensure the results are the best. Your
              portfolio is ready.
            </p>

            <NuxtLink
              :to="{ name: 'products-algo-portfolio' }"
              class="read-more-link text-decoration-none d-block mt-4">
              Learn More <i class="far fa-arrow-right ms-2"></i>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-6 col-12 order-lg-0">
          <div class="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
            <img
              src="~/assets/img/algo-portfolio/how-it-works.png"
              class="img-fluid"
              alt="feature-image" />
          </div>
        </div>
      </div>
      <div class="row pt-lg-5 pt-3">
        <div class="col-lg-6 mt-4">
          <div
            class="position-relative d-flex flex-column h-100 flex-wrap bg-danger-soft p-5 rounded-custom">
            <div class="cta-left-info mb-2">
              <h5>Startup</h5>
              <p>
                Are you a startup? Apply now and get a plan that’s tailored to
                your needs – and budget.
              </p>
            </div>
            <div class="mt-auto">
              <NuxtLink
                :to="{ name: 'contact-us' }"
                class="btn btn-outline-primary btn-sm">
                Contact Us
              </NuxtLink>
            </div>
            <div class="cta-img position-absolute right-0 bottom-0">
              <img
                src="~/assets/img/cta-img-1.png"
                alt="cta img"
                class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="col-lg-6 mt-4">
          <div
            class="position-relative d-flex flex-column h-100 flex-wrap bg-primary-soft p-5 rounded-custom">
            <div class="cta-left-info mb-2">
              <h5>Enterprise</h5>
              <p>
                Are you an enterprise company? Trader4 here to launch your
                trading department in your organization.
              </p>
            </div>
            <div class="mt-auto">
              <NuxtLink
                :to="{ name: 'contact-us' }"
                class="btn btn-outline-primary btn-sm">
                Contact Us
              </NuxtLink>
            </div>
            <div class="cta-img position-absolute right-0 bottom-0">
              <img
                src="~/assets/img/cta-img-2.png"
                alt="cta img"
                class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--image feature section end-->
</template>
<script>
export default {
  name: "ImageFeature",
};
</script>
