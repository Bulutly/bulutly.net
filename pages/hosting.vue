<template>
  <!-- <div class="preloader"> -->
  <!-- start preloader -->
  <!-- <div class="preloader-container">
            <svg version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                <circle fill="#675cda" stroke="none" cx="6" cy="50" r="6">
                    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1" />
                </circle>
                <circle fill="#675cda" stroke="none" cx="30" cy="50" r="6">
                    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2" />
                </circle>
                <circle fill="#675cda" stroke="none" cx="54" cy="50" r="6">
                    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3" />
                </circle>
            </svg>
            <span>loading</span>
        </div>
    </div> -->
  <!-- end preloader -->

  <Header>
    <template #span>
      <span
        style="background: #faf8ac"
        class="services-page-bg-overflow"></span>
    </template>
    <template #main>
      <main class="container pt-30 pb-25">
        <div
          style="background-image: url('images/admin-panel.png')"
          class="hero-img-bg"></div>
        <div class="row justify-content-start">
          <div class="col-md-7 col-12 white-text">
            <span class="main-header-top-title">Web Hosting</span>
            <h3 class="main-header-title coodiv-text-3 font-weight-bold">
              Trust your client sites to the world’s #1 web host.
            </h3>
            <ul class="main-header-features">
              <li><i class="fal fa-check"></i> 24/7 fully managed support.</li>
              <li>
                <i class="fal fa-check"></i> NVMe SSD-powered KVM VPS – high
                performance hosting.
              </li>
              <li>
                <i class="fal fa-check"></i> cPanel/WHM, Plesk Obsidian for easy
                WordPress admin.
              </li>
              <li>
                <i class="fal fa-check"></i> Up to nearly 40% average
                improvement in overall server response times.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </template>
    <template #more-services>
      <div class="more-services-sub-page">
        <div class="container">
          <div class="row justify-content-start">
            <div class="col-md-9 col-12">
              <div class="owl-carousel more-services-carousel owl-theme">
                <div class="item">
                  <a class="active" href="hosting.html">Web Hosting</a>
                </div>
                <div class="item">
                  <a href="icecast.html">Internet Radio Station</a>
                </div>
                <div class="item">
                  <a href="servers.html">Managed Servers</a>
                </div>
                <div class="item">
                  <a href="dedicated.html">Dedicated Server</a>
                </div>
                <div class="item"><a href="cloud-vps.html">VPS Hosting</a></div>
                <div class="item">
                  <a href="vps-reseller.html">Reseller Hosting</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Header>

  <HostingPrices></HostingPrices>

  <HostingTools></HostingTools>

  <HostingManagment></HostingManagment>

  <HostingReview></HostingReview>

  <HostingUserExperince></HostingUserExperince>
</template>

<script lang="ts" setup>
const { $global } = useAppConfig();
$global.headerClass = "services-page";
</script>

<style></style>
