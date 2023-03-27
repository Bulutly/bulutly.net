<template>
  <section class="guideLine py-25 border-top">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-md-8 col-12">
          <div class="title-default-coodiv-four">
            <p
              style="color: #079d63"
              class="eyebrow content-text-author_eyebrow">
              All-day, we got your back
            </p>
            <h5 class="coodiv-text-5 font-weight-bold">
              Yep, We’re here for you, Always.
            </h5>
            <p class="coodiv-text-9">
              We're here with the help and advice you need to bring your idea to
              life. When you're ready to get online, we're prepped, trained, and
              ready to guide you from start to success.
            </p>
          </div>
        </div>
      </div>
      <swiper
        :navigation="false"
        :pagination="true"
        :modules="modules"
        class="mySwiper">
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
                A step-by-step guide to request an SSL certificate and install
                it.
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
                building and maintaining websites easier---and more profitable.
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

      <!-- <div class="coodiv-features-box-black-color-carousel">
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
              A step-by-step guide to request an SSL certificate and install it.
            </p>
          </NuxtLink>
        </div>

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
              building and maintaining websites easier---and more profitable.
            </p>
          </NuxtLink>
        </div>

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
      </div> -->
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
