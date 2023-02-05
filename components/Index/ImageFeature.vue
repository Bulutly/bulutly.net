<template>
  <!--image feature section start-->
  <section class="image-feature pt-60 pb-120">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-5 col-12 order-lg-1">
          <div class="feature-img-content">
            <div
              class="icon-box rounded-custom bg-dark shadow-sm d-inline-block"
            >
              <i class="fal fa-fingerprint fa-2x text-white"></i>
            </div>
            <h2>Match Everything to Brand and Style</h2>
            <p>
              Intrinsicly pontificate reliable metrics with enabled. Holisticly
              maintain clicks-and-mortar manufactured products empower viral
              customer service through resource deliverables.
            </p>
            <p>
              Customer service through resource pontificate reliable metrics
              with enabled expedite resource maximizing information maintain
              manufactured products.
            </p>

            <nuxt-link
              :to="{ name: 'about-us' }"
              class="read-more-link text-decoration-none d-block mt-4"
              >Know More About Us <i class="far fa-arrow-right ms-2"></i
            ></nuxt-link>
          </div>
        </div>
        <div class="col-lg-6 col-12 order-lg-0">
          <div class="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
            <img
              src="~/assets/img/screen/widget-12.png"
              class="img-fluid"
              alt="feature-image"
            />
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
