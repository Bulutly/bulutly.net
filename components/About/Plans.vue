<template>
  <section class="plans pt-20 pb-md-20 pb-5 position-relative">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-md-4 side-text-right-container">
          <p style="color: #ee9823" class="eyebrow content-text-author_eyebrow">
            Super fast development
          </p>
          <h3 class="coodiv-text-4 font-weight-bold">
            Yep, We’re here for you, Always
          </h3>
          <p class="content_text_author_description_p">
            We're here with the help and advice you need to bring your idea to
            life. When you're ready to get online, we're prepped, trained, and
            ready to guide you from start to success.
          </p>

          <NuxtLink
            :to="{ name: 'dedicated' }"
            class="btn btn-dark coodiv-text-11 mt-10">
            See all plans and pricing
          </NuxtLink>
        </div>

        <div class="col-md-7 our-services-carousel-container">
          <swiper :navigation="true" :modules="modules" class="mySwiper">
            <SwiperSlide>
              <div class="item">
                <NuxtLink
                  :to="{ name: 'ssl' }"
                  class="coodiv-features-box-black-color">
                  <i style="color: #ff2934" class="fab fa-wordpress"></i>
                  <h5 class="coodiv-text-8 font-weight-bold mb-0">
                    SSL Certificates
                    <span class="coodiv-text-12 font-weight-light"
                      >As low as $4.99</span
                    >
                  </h5>
                  <p class="coodiv-text-11 mb-1">
                    A step-by-step guide to request an SSL certificate and
                    install it.
                  </p>
                </NuxtLink>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="item">
                <NuxtLink
                  :to="{ name: 'hosting' }"
                  class="coodiv-features-box-black-color">
                  <i style="color: #ee9823" class="fal fa-database"></i>
                  <h5 class="coodiv-text-8 font-weight-bold mb-0">
                    Linux Hosting
                    <span class="coodiv-text-12 font-weight-light"
                      >As low as $0.99</span
                    >
                  </h5>
                  <p class="coodiv-text-11 mb-1">
                    Check out our tour of your account Dashboard, WordPress, and
                    cPanel.
                  </p>
                </NuxtLink>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="item">
                <NuxtLink
                  :to="{ name: 'wordpress' }"
                  class="coodiv-features-box-black-color">
                  <i style="color: #2ab8ae" class="far fa-globe-africa"></i>
                  <h5 class="coodiv-text-8 font-weight-bold mb-0">
                    Managed WordPress
                    <span class="coodiv-text-12 font-weight-light"
                      >As low as $3.99</span
                    >
                  </h5>
                  <p class="coodiv-text-11 mb-1">
                    building and maintaining websites easier---and more
                    profitable.
                  </p>
                </NuxtLink>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="item">
                <NuxtLink
                  :to="{ name: 'cpanel' }"
                  class="coodiv-features-box-black-color">
                  <i style="color: #19d681" class="fal fa-apple-crate"></i>
                  <h5 class="coodiv-text-8 font-weight-bold mb-0">
                    Workspace Email
                    <span class="coodiv-text-12 font-weight-light"
                      >As low as $15.99</span
                    >
                  </h5>
                  <p class="coodiv-text-11 mb-1">
                    Build your brand and show the world you mean business with a
                    domain.
                  </p>
                </NuxtLink>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="item">
                <NuxtLink
                  :to="{ name: 'about-us' }"
                  class="coodiv-features-box-black-color">
                  <i style="color: #a2fbf3" class="fal fa-baby-carriage"></i>
                  <h5 class="coodiv-text-8 font-weight-bold mb-0">
                    Websites + Marketing
                    <span class="coodiv-text-12 font-weight-light"
                      >As low as $0.99</span
                    >
                  </h5>
                  <p class="coodiv-text-11 mb-1">
                    Attract customers with breakthrough marketing content.
                  </p>
                </NuxtLink>
              </div>
            </SwiperSlide>
          </swiper>
          <!-- <div class="our-services-carousel">
            <div class="carousel-cell">
              <div class="our-services-coresol-box">
                <i style="color: #ff2934" class="fab fa-wordpress"></i>
                <h5>SSL Certificates</h5>
                <p>
                  A step-by-step guide to request an SSL certificate and install
                  it.
                </p>
              </div>
            </div>

            <div class="carousel-cell">
              <div class="our-services-coresol-box">
                <i style="color: #ee9823" class="fal fa-database"></i>
                <h5>Linux Hosting</h5>
                <p>
                  Check out our tour of your account Dashboard, WordPress, and
                  cPanel.
                </p>
              </div>
            </div>

            <div class="carousel-cell">
              <div class="our-services-coresol-box">
                <i style="color: #2ab8ae" class="far fa-globe-africa"></i>
                <h5>Managed WordPress</h5>
                <p>
                  building and maintaining websites easier---and more
                  profitable.
                </p>
              </div>
            </div>

            <div class="carousel-cell">
              <div class="our-services-coresol-box">
                <i style="color: #19d681" class="fal fa-apple-crate"></i>
                <h5>Workspace Email</h5>
                <p>
                  Build your brand and show the world you mean business with a
                  domain.
                </p>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
