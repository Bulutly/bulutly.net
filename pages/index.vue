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
      <main class="container d-flex align-items-center h-100">
        <div class="carousel carousel-main w-100">
          <div class="carousel-cell">
            <div class="row justify-content-start">
              <div class="col-lg-8 col-12 white-text">
                <span class="main-header-top-title"
                  >Managed WordPress Hosting</span
                >
                <h3 class="main-header-title coodiv-text-3">
                  Get WordPress with free SSL and backups for $5.99/mo
                </h3>
                <p
                  class="main-header-sub-title coodiv-text-10 font-weight-light mb-10">
                  Comes with free domain and email. Money-back guarantee
                </p>
                <div class="d-flex">
                  <a
                    class="main-header-btn coodiv-text-9 font-weight-bold"
                    href="wordpress.html"
                    >Get it now <i class="fal fa-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="row justify-content-start">
              <div class="col-lg-8 col-12 white-text">
                <span class="main-header-top-title">Web Hosting</span>
                <h3 class="main-header-title coodiv-text-3">
                  Trust your client sites to the world’s #1 web host.
                </h3>
                <p
                  class="main-header-sub-title coodiv-text-10 font-weight-light">
                  Get faster sites — up to nearly 40% average improvement in
                  overall server response times.
                </p>
                <div class="d-flex">
                  <a
                    class="main-header-btn coodiv-text-9 font-weight-bold"
                    href="dedicated.html"
                    >See Plans & Pricing <i class="fal fa-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="row justify-content-start">
              <div class="col-lg-8 col-12 white-text">
                <span class="main-header-top-title"
                  >Self Managed VPS Hosting</span
                >
                <h3 class="main-header-title coodiv-text-3">
                  Get Fully Managed Dedicated Server Hosting.
                </h3>
                <p
                  class="main-header-sub-title coodiv-text-9 font-weight-light">
                  Experience high-performance NVMe SSDs powered by Virtuozzo for
                  3X the speed plus unlimited traffic. You also get KVM
                  virtualization for full control of your hardware resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </template>
    <template #more-services>
      <div class="main-header-carousel-container container">
        <div class="row justify-content-start">
          <div class="carousel carousel-nav">
            <div class="carousel-cell">
              <div class="main-header-carousel-nav">
                <div class="main-header-carousel-nav-bg"></div>
                <i class="fal fa-hdd"></i>
                <h5 class="coodiv-text-9 font-weight-bold">
                  Affordable WordPress Hosting Solution.
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
    </template>
  </Header>

  <!-- end header -->
  <IndexContentTextAuthor />

  <IndexWebHosting />

  <IndexHompageServices />

  <IndexPartners />

  <IndexGuideLine />

  <CpanelFaq></CpanelFaq>
</template>

<script lang="ts" setup>
const { $global } = useAppConfig();
$global.headerClass = "homepage";
</script>

<style></style>
