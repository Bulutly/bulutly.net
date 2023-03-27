<template>
  <!-- <div class="preloader"> -->
  <!-- start preloader -->
  <!-- <div class="preloader-container">
      <svg
        version="1.1"
        id="L5"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enable-background="new 0 0 0 0"
        xml:space="preserve">
        <circle fill="#675cda" stroke="none" cx="6" cy="50" r="6">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 15 ; 0 -15; 0 15"
            repeatCount="indefinite"
            begin="0.1" />
        </circle>
        <circle fill="#675cda" stroke="none" cx="30" cy="50" r="6">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 10 ; 0 -10; 0 10"
            repeatCount="indefinite"
            begin="0.2" />
        </circle>
        <circle fill="#675cda" stroke="none" cx="54" cy="50" r="6">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.3" />
        </circle>
      </svg>
      <span>loading</span>
    </div>
  </div> -->
  <!-- end preloader -->

  <Header>
    <template #span>
      <div class="bg_overlay_header">
        <div id="particles-bg"></div>
        <div class="cloud-bg"></div>
        <div class="bg-img-header-new-moon">&nbsp;</div>
        <span class="header-shapes shape-03"></span>
      </div>
    </template>
    <template #main>
      <main class="container d-flex align-items-center h-100" style="margin-top: 200px">
        <ClientOnly>
          <div class="carousel carousel-main w-100">
            <swiper :cssMode="true" :pagination="true" :mousewheel="true" :keyboard="true" :modules="modules"
              class="mySwiper">
              <swiper-slide>
                <div class="carousel-cell">
                  <div class="row justify-content-start">
                    <div class="col-lg-8 col-12 white-text">
                      <span class="main-header-top-title">Managed WordPress Hosting</span>
                      <h3 class="main-header-title coodiv-text-3">
                        Get WordPress with free SSL and backups for $5.99/mo
                      </h3>
                      <p class="main-header-sub-title coodiv-text-10 font-weight-light mb-10">
                        Comes with free domain and email. Money-back guarantee
                      </p>
                      <div class="d-flex">
                        <NuxtLink :to="{ name: 'wordpress' }" class="main-header-btn coodiv-text-9 font-weight-bold">
                          Get it now <i class="fal fa-arrow-right"></i>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <SwiperSlide>
                <div class="carousel-cell">
                  <div class="row justify-content-start">
                    <div class="col-lg-8 col-12 white-text">
                      <span class="main-header-top-title">Web Hosting</span>
                      <h3 class="main-header-title coodiv-text-3">
                        Trust your client sites to the world’s #1 web host.
                      </h3>
                      <p class="main-header-sub-title coodiv-text-10 font-weight-light">
                        Get faster sites — up to nearly 40% average improvement in
                        overall server response times.
                      </p>
                      <div class="d-flex">
                        <NuxtLink :to="{ name: 'dedicated' }" class="main-header-btn coodiv-text-9 font-weight-bold">
                          See Plans & Pricing <i class="fal fa-arrow-right"></i>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="carousel-cell">
                  <div class="row justify-content-start">
                    <div class="col-lg-8 col-12 white-text">
                      <span class="main-header-top-title">Self Managed VPS Hosting</span>
                      <h3 class="main-header-title coodiv-text-3">
                        Get Fully Managed Dedicated Server Hosting.
                      </h3>
                      <p class="main-header-sub-title coodiv-text-9 font-weight-light">
                        Experience high-performance NVMe SSDs powered by Virtuozzo
                        for 3X the speed plus unlimited traffic. You also get KVM
                        virtualization for full control of your hardware
                        resources.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </swiper>
          </div>
        </ClientOnly>
      </main>
    </template>
    <!-- <template #more-services>
      <div class="main-header-carousel-container container mt-4">
        <div class="row justify-content-start">
          <div class="carousel carousel-nav" style="display: flex">
            <div class="carousel-cell item-hover">
              <div class="main-header-carousel-nav">
                <div class="main-header-carousel-nav-bg"></div>
                <i class="fal fa-hdd"></i>
                <h5 class="coodiv-text-9 font-weight-bold">
                  Affordablbe WordPress Hosting Solution.
                </h5>
                <p class="coodiv-text-12 font-weight-light">
                  Get fully-loaded WordPress plans for fast site building and
                  easy maintenance.
                </p>
                <ul>
                  <li>
                    <i class="fal fa-check" aria-hidden="true"></i>
                    <b>75 GB﻿</b> storage
                  </li>
                  <li>
                    <i class="fal fa-check" aria-hidden="true"></i>
                    <b>Daily backups</b> with 1-click restore
                  </li>
                  <li>
                    <i class="fal fa-check" aria-hidden="true"></i>
                    <b>Daily﻿</b> malware scans
                  </li>
                </ul>
              </div>
            </div>

            <div class="carousel-cell">
              <div class="main-header-carousel-nav">
                <div class="main-header-carousel-nav-bg"></div>
                <i class="fal fa-microchip"></i>
                <h5 class="coodiv-text-9 font-weight-bold">
                  hosting that's faster — and better.
                </h5>
                <p class="coodiv-text-12 font-weight-light">
                  With our latest optimized server hardware, you'll get nearly
                  40% average improvement in server response.
                </p>
                <ul>
                  <li>
                    <i class="fal fa-check" aria-hidden="true"></i>
                    <b>Unlimited</b> Storage
                  </li>
                  <li>
                    <i class="fal fa-check" aria-hidden="true"></i>
                    <b>Free 1-click</b> WordPress install
                  </li>
                  <li>
                    <i class="fal fa-check" aria-hidden="true"></i>
                    <b>Increased</b> Processing power
                  </li>
                </ul>
              </div>
            </div>

            <div class="carousel-cell">
              <div class="main-header-carousel-nav">
                <div class="main-header-carousel-nav-bg"></div>
                <i class="fal fa-server"></i>
                <h5 class="coodiv-text-9 font-weight-bold">
                  Effortlessly get the power and flexibility you need.
                </h5>
                <p class="coodiv-text-12 font-weight-light">
                  Launch your traffic-ready eCommerce site by installing
                  Magento, OpenCart and PrestaShop — with a single click!
                </p>
                <ul>
                  <li>2</li>
                </ul>
                <ul>
                  <li>
                    <i class="fal fa-check" aria-hidden="true"></i>
                    <b>8 CPU</b> Cores
                  </li>
                  <li>
                    <i class="fal fa-check" aria-hidden="true"></i>
                    <b>16 GB</b> RAM
                  </li>
                  <li>
                    <i class="fal fa-check" aria-hidden="true"></i>
                    <b>400 GB</b> NVMe SSD Storage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template> -->
  </Header>

  <!-- end header -->
  <IndexContentTextAuthor />

  <IndexWebHosting />

  <IndexHompageServices />

  <IndexPartners />

  <IndexGuideLine />

  <CpanelFaq></CpanelFaq>
</template>

<script lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const { $global } = useAppConfig();
    $global.headerClass = "homepage";
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
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
  background: transparent;

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

.swiper-horizontal>.swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: var(--swiper-pagination-bottom, 1px);
}
</style>
