<template>
  <!--feature promo section start-->
  <section class="feature-promo ptb-120 bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-10">
          <div class="section-heading text-center">
            <h2>With all the Features You Need</h2>
            <p>
              Credibly grow premier ideas rather than bricks-and-clicks
              strategic theme areas distributed for stand-alone web-readiness.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="single-feature-promo p-lg-5 p-4 text-center mt-3">
            <div
              class="feature-icon icon-center pb-5 rounded-custom bg-primary"
            >
              <i class="fal fa-layer-group fa-2x text-white"></i>
            </div>
            <div class="feature-info-wrap">
              <h3 class="h5">Good Performance</h3>
              <p>
                Appropriately grow competitive leadership rather than strategic
                technically sound processes without state.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-feature-promo p-lg-5 p-4 text-center mt-3">
            <div class="feature-icon icon-center pb-5 rounded-custom bg-danger">
              <i class="fal fa-shield-check fa-2x text-white"></i>
            </div>
            <div class="feature-info-wrap">
              <h3 class="h5">Highly Secure</h3>
              <p>
                Appropriately grow competitive leadership rather than strategic
                technically sound processes without state.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-feature-promo p-lg-5 p-4 text-center mt-3">
            <div class="feature-icon icon-center pb-5 rounded-custom bg-dark">
              <i class="fal fa-code fa-2x text-white"></i>
            </div>
            <div class="feature-info-wrap">
              <h3 class="h5">Fast Development</h3>
              <p>
                Appropriately grow competitive leadership rather than strategic
                technically sound processes without state.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row pt-lg-5 pt-3">
        <div class="col-lg-6 mt-4">
          <div
            class="position-relative d-flex flex-column h-100 flex-wrap bg-danger-soft p-5 rounded-custom"
          >
            <div class="cta-left-info mb-2">
              <h5>Utilize your software data</h5>
              <p>
                Progressively reinvent models and niche revolutionary benefits
                for integrated niches.
              </p>
            </div>
            <div class="mt-auto">
              <nuxt-link
                :to="{ name: 'request' }"
                class="btn btn-outline-primary btn-sm"
                >Start For Free</nuxt-link
              >
            </div>
            <div class="cta-img position-absolute right-0 bottom-0">
              <img
                src="~/assets/img/cta-img-1.png"
                alt="cta img"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-6 mt-4">
          <div
            class="position-relative d-flex flex-column h-100 flex-wrap bg-primary-soft p-5 rounded-custom"
          >
            <div class="cta-left-info mb-2">
              <h5>Get real time updated anytime</h5>
              <p>
                Progressively reinvent models and niche revolutionary benefits
                for integrated niches.
              </p>
            </div>
            <div class="mt-auto">
              <nuxt-link
                :to="{ name: 'request' }"
                class="btn btn-outline-primary btn-sm"
                >Start For Free</nuxt-link
              >
            </div>
            <div class="cta-img position-absolute right-0 bottom-0">
              <img
                src="~/assets/img/cta-img-2.png"
                alt="cta img"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--feature promo section end-->
</template>
<script>
export default {
  name: "Promo",
};
</script>
