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
      <span
        style="background: #c1efff"
        class="services-page-bg-overflow"></span>
    </template>
    <!-- Fixed navbar -->

    <template #main>
      <main class="container pt-30">
        <div class="row justify-content-start">
          <div class="col-md-7 col-12 white-text">
            <span class="main-header-top-title">Cpanel Hosting</span>
            <h3 class="main-header-title coodiv-text-3 font-weight-bold">
              Simplify website & server management.
            </h3>
            <ul class="main-header-features">
              <li>
                <i class="fal fa-check"></i> Manage domains & Launch databases.
              </li>
              <li>
                <i class="fal fa-check"></i> Control and flexibility at your
                fingertips.
              </li>
              <li><i class="fal fa-check"></i> Fuel your business.</li>
              <li>
                <i class="fal fa-check"></i> Backup, transfer & manage files.
              </li>
            </ul>
          </div>

          <div class="col-10 col-md-5">
            <img
              src="img/demo/features/services-2.png"
              class="d-block mx-lg-auto img-fluid mt-n10 mb-15"
              alt="Bootstrap Themes"
              width="640"
              height="584"
              loading="lazy" />
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
                <div class="item"><a href="hosting.html">Web Hosting</a></div>
                <div class="item">
                  <a href="icecast.html">Internet Radio Station</a>
                </div>
                <div class="item">
                  <a href="servers.html">Managed Servers</a>
                </div>
                <div class="item">
                  <a href="dedicated.html">Dedicated Server</a>
                </div>
                <div class="item">
                  <a class="active" href="cpanel.html">Cpanel Hosting</a>
                </div>
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
  <CpanelHostPack></CpanelHostPack>

  <CpanelServerFeatures></CpanelServerFeatures>
  <CpanelFeatures />

  <CpanelFaq></CpanelFaq>
</template>

<script lang="ts" setup>
const { $global } = useAppConfig();
$global.headerClass = "services-page";
</script>

<style></style>
