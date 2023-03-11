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
        style="background-image: url(images/apex-bg.jpg)"
        class="services-page-bg-overflow full-width img-bg"></span>
    </template>
    <template #main>
      <main class="container pt-30">
        <div class="row justify-content-start">
          <div class="col-md-7 col-12 white-text">
            <span class="main-header-top-title"
              >The Global Game Hosting Network</span
            >
            <h3 class="main-header-title coodiv-text-3 font-weight-bold">
              Game Server Hosting On A Next Level.
            </h3>
            <ul class="main-header-features">
              <li>
                <i class="fal fa-check"></i> Immediate access thanks to our
                system. Instantly online
              </li>
              <li>
                <i class="fal fa-check"></i> No contract - no minimum terms
              </li>
              <li>
                <i class="fal fa-check"></i> Easy management of all services on
                a single account
              </li>
              <li>
                <i class="fal fa-check"></i> Full cost control through Nitrado's
                prepay system
              </li>
            </ul>
          </div>
        </div>
        <div class="row justify-content-start mt-10 mb-15">
          <div class="col-md-3 col-12 mb-md-0 mb-6">
            <div class="games-server-features-header">
              <i class="fad fa-gamepad"></i>
              <h5 class="coodiv-text-9 font-weight-bold">
                Gamecloud – Including Game Switching
              </h5>
              <p class="coodiv-text-11">
                Switch to another game quickly and flexibly
              </p>
            </div>
          </div>

          <div class="col-md-3 col-12 mb-md-0 mb-6">
            <div class="games-server-features-header">
              <i class="fad fa-plug"></i>
              <h5 class="coodiv-text-9 font-weight-bold">Immediately Online</h5>
              <p class="coodiv-text-11">
                Your server is available in under 3 minutes
              </p>
            </div>
          </div>

          <div class="col-md-3 col-12 mb-md-0 mb-6">
            <div class="games-server-features-header">
              <i class="fad fa-headset"></i>
              <h5 class="coodiv-text-9 font-weight-bold">Live console</h5>
              <p class="coodiv-text-11">
                Track events and logs in real time through the web interface
              </p>
            </div>
          </div>

          <div class="col-md-3 col-12">
            <div class="games-server-features-header">
              <i class="fad fa-server"></i>
              <h5 class="coodiv-text-9 font-weight-bold">
                Backup Storage Space
              </h5>
              <p class="coodiv-text-11">
                50GB backup space for your savegames and configs
              </p>
            </div>
          </div>
        </div>
      </main>
    </template>
  </Header>

  <GamesPopular></GamesPopular>

  <GamesPartners></GamesPartners>

  <GamesModpack></GamesModpack>

  <IndexGuideLine></IndexGuideLine>

  <CpanelFaq></CpanelFaq>
</template>

<script lang="ts" setup>
const { $global } = useAppConfig();
$global.headerClass = "services-page";
</script>

<style></style>
