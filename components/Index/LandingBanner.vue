<template>
  <div>
    <!--hero section start-->
    <section
      class="hero-section ptb-120"
      style="
        background: url('~assets/img/shape/dot-dot-wave-shape.svg') no-repeat
          bottom center;
      ">
      <div class="container">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-xl-5 col-lg-5">
            <div
              class="hero-content-wrap text-center text-xl-start text-lg-start aos-init aos-animate">
              <h1 class="fw-bold display-5">ONE Subscription, All Products</h1>
              <p class="lead">
                For first time we introduce subscription plan to level up your
                trading by accessing basket of trading softwares.
              </p>
              <div
                class="hero-subscribe-form-wrap pt-4 position-relative m-auto m-xl-0 d-none d-md-block d-lg-block d-xl-block">
                <form
                  action="http://127.0.0.1:8001/start"
                  method="post"
                  id="subscribe-form"
                  name="email-form"
                  class="hero-subscribe-form d-block d-lg-flex d-md-flex">
                  <input
                    type="hidden"
                    name="_token"
                    value="sR8tISnh8GA9P7UzhJJ6hKuogm2XpMRYXpr5R2Gw" />
                  <input
                    type="email"
                    class="form-control me-2"
                    name="email"
                    data-name="email"
                    placeholder="Enter Your Email Address"
                    id="email-address"
                    required="" />
                  <input
                    type="submit"
                    value="Start Now"
                    data-wait="Please wait..."
                    class="btn btn-primary mt-3 mt-lg-0 mt-md-0" />
                </form>
                <ul class="nav subscribe-feature-list mt-3">
                  <li class="nav-item">
                    <span class="ms-0"
                      ><i class="far fa-check-circle text-primary me-2"></i
                      >Money back guarantee</span
                    >
                  </li>
                  <li class="nav-item">
                    <span
                      ><i class="far fa-check-circle text-primary me-2"></i>No
                      credit card required</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 mt-4 mt-xl-0">
            <div class="hero-img-wrap position-relative aos-init aos-animate">
              <ul
                class="position-absolute animate-element parallax-element shape-service hide-medium">
                <li class="layer" data-depth="0.03">
                  <img
                    src="~/assets/img/color-shape/image-1.svg"
                    alt="shape"
                    class="img-fluid position-absolute color-shape-1" />
                </li>
                <li class="layer" data-depth="0.02">
                  <img
                    src="~/assets/img/color-shape/feature-2.svg"
                    alt="shape"
                    class="img-fluid position-absolute color-shape-2 z-5" />
                </li>
                <li class="layer" data-depth="0.03">
                  <img
                    src="~/assets/img/color-shape/feature-3.svg"
                    alt="shape"
                    class="img-fluid position-absolute color-shape-3" />
                </li>
              </ul>
              <div class="hero-img-wrap position-relative">
                <div class="hero-screen-wrap">
                  <div class="phone-screen">
                    <img
                      src="~/assets/img/screen/iphone-metatrader-notifications.png"
                      alt="supply demand trading strategy"
                      class="position-relative img-fluid" />
                  </div>
                  <div class="mac-screen">
                    <img
                      src="~/assets/img/screen/supply-demand.png"
                      alt="supply demand trading indicator"
                      class="position-relative img-fluid rounded-custom" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--hero section end-->
  </div>
</template>
<script>
export default {
  name: "LandingBanner",
};
</script>
