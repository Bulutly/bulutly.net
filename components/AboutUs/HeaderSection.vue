<template>
  <div>
    <!--about header section start-->
    <section
      class="about-header-section ptb-120 position-relative overflow-hidden bg-dark"
      style="background: url('/img/page-header-bg.svg') no-repeat center right"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div
              class="section-heading-wrap d-flex justify-content-between z-5 position-relative"
            >
              <div class="about-content-left">
                <div class="about-info mb-5">
                  <h1 class="fw-bold display-5">
                    Grow your Business &amp; Customer Satisfaction with Quiety
                  </h1>
                  <p class="lead">
                    Dynamically disintermediate technically sound technologies
                    with compelling quality vectors error-free communities.
                  </p>
                  <a href="career.html" class="btn btn-primary mt-4 me-3"
                    >Open Positions</a
                  >
                  <a href="#our-team" class="btn btn-soft-primary mt-4"
                    >Meet Our Team</a
                  >
                </div>
                <img
                  src="~/assets/img/about-img-1.jpg"
                  alt="about"
                  class="img-fluid about-img-first mt-5 rounded-custom shadow"
                />
              </div>
              <div class="about-content-right">
                <img
                  src="~/assets/img/about-img-2.jpg"
                  alt="about"
                  class="img-fluid mb-5 rounded-custom shadow"
                />
                <img
                  src="~/assets/img/about-img-3.jpg"
                  alt="about"
                  class="rounded-custom about-img-last shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5"
      ></div>
    </section>
    <!--about header section end-->
  </div>
</template>
<script>
export default {
  name: "AboutUsHeaderSection",
};
</script>
