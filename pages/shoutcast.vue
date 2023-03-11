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
        style="
          background-image: linear-gradient(
            81.38deg,
            rgb(224 237 243) 30.56%,
            rgb(179 225 234) 71.66%
          );
        "
        class="services-page-bg-overflow"></span>
    </template>
    <template #main>
      <main class="container pt-30 pb-25">
        <div
          style="background-image: url('images/voice-panel.png')"
          class="hero-img-bg"></div>
        <div class="row justify-content-start">
          <div class="col-md-7 col-12 white-text">
            <span style="background: #b7eaf1" class="main-header-top-title"
              >Icecast & SHOUTcast</span
            >
            <h3 class="main-header-title coodiv-text-3 font-weight-bold">
              Create, manage and scale your radion & prodcast
            </h3>
            <p class="coodiv-text-9">
              The easiest way to start your own online radio station. Join
              hundreds of other communities who choose us to broadcast their
              internet radio stations globally.
            </p>
            <ul class="main-header-features green-check">
              <li>
                <i class="fal fa-check"></i> Unlimited NVMe Auto DJ Storage
              </li>
              <li>
                <i class="fal fa-check"></i> Unlimited Bandwidth & Listeners.
              </li>
            </ul>
            <a href="#" class="btn btn-dark coodiv-text-11 mt-10"
              >Start your free trial</a
            >
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
                <div class="item"><a href="#">Web Hosting</a></div>
                <div class="item"><a href="#">Windows Hosting</a></div>
                <div class="item"><a href="#">Web Hosting Plus</a></div>
                <div class="item"><a href="#">Dedicated Server</a></div>
                <div class="item">
                  <a class="active" href="#">VPS Hosting</a>
                </div>
                <div class="item"><a href="#">Reseller Hosting</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Header>

  <ShoutcastFeatures></ShoutcastFeatures>

  <ShoutcastRadioPricing></ShoutcastRadioPricing>

  <ShoutcastPartners></ShoutcastPartners>

  <ShoutcastTools></ShoutcastTools>

  <ShoutcastMapServer></ShoutcastMapServer>

  <ShoutcastServices></ShoutcastServices>
</template>

<script lang="ts" setup>
const { $global } = useAppConfig();
$global.headerClass = "services-page";
</script>

<style></style>
