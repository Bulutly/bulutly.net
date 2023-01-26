<template>
  <div>
    <!--our story section start-->
    <section
      class="our-story-section pt-60 pb-120"
      style="
        background: url('/img/shape/dot-dot-wave-shape.svg') no-repeat left
          bottom;
      "
    >
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-5 col-md-12 order-lg-1">
            <div class="section-heading sticky-sidebar">
              <h4 class="h5 text-primary">Our Story</h4>
              <h2>A Great Story Starts with a Friendly Team</h2>
              <p>
                Globally e-enable principle-centered e-business before dynamic
                quality vectors cross-media materials before proactive
                outsourcing leverage other's vertical technology leadership.
              </p>
              <div class="mt-4">
                <h6 class="mb-3">We Are Awarded By-</h6>
                <img
                  src="~/assets/img/awards-01.svg"
                  alt="awards"
                  class="me-4 img-fluid"
                />
                <img
                  src="~/assets/img/awards-02.svg"
                  alt="awards"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 order-lg-0">
            <div class="story-grid-wrapper position-relative">
              <!--animated shape start-->
              <ul
                class="position-absolute animate-element parallax-element shape-service d-none d-lg-block"
                style="
                  transform: translate3d(0px, 0px, 0px);
                  transform-style: preserve-3d;
                  backface-visibility: hidden;
                "
              >
                <li
                  class="layer"
                  data-depth="0.02"
                  style="
                    position: relative;
                    display: block;
                    left: 0px;
                    top: 0px;
                    transform: translate3d(-4.44569px, 13.883px, 0px);
                    transform-style: preserve-3d;
                    backface-visibility: hidden;
                  "
                >
                  <img
                    src="~/assets/img/color-shape/image-2.svg"
                    alt="shape"
                    class="img-fluid position-absolute color-shape-2 z-5"
                  />
                </li>
                <li
                  class="layer"
                  data-depth="0.03"
                  style="
                    position: absolute;
                    display: block;
                    left: 0px;
                    top: 0px;
                    transform: translate3d(-6.66853px, 20.8244px, 0px);
                    transform-style: preserve-3d;
                    backface-visibility: hidden;
                  "
                >
                  <img
                    src="~/assets/img/color-shape/feature-3.svg"
                    alt="shape"
                    class="img-fluid position-absolute color-shape-3"
                  />
                </li>
              </ul>
              <!--animated shape end-->
              <div
                class="story-grid rounded-custom bg-dark overflow-hidden position-relative"
              >
                <div class="story-item bg-light border">
                  <h3 class="display-5 fw-bold mb-1 text-success">550K+</h3>
                  <h6 class="mb-0">Active Users</h6>
                </div>
                <div class="story-item bg-white border">
                  <h3 class="display-5 fw-bold mb-1 text-primary">250+</h3>
                  <h6 class="mb-0">Team Members</h6>
                </div>
                <div class="story-item bg-white border">
                  <h3 class="display-5 fw-bold mb-1 text-dark">$20M+</h3>
                  <h6 class="mb-0">Revenue Per/Year</h6>
                </div>
                <div class="story-item bg-light border">
                  <h3 class="display-5 fw-bold mb-1 text-warning">8 Years</h3>
                  <h6 class="mb-0">In Business</h6>
                </div>
                <div class="story-item bg-light border">
                  <h3 class="display-5 fw-bold mb-1 text-danger">425+</h3>
                  <h6 class="mb-0">Clients Worldwide</h6>
                </div>
                <div class="story-item bg-white border">
                  <h3 class="display-5 fw-bold mb-1 text-primary">855+</h3>
                  <h6 class="mb-0">Projects Completed</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--our story section end-->
  </div>
</template>
<script>
export default {
  name: "AboutUsOurStory",
};
</script>
