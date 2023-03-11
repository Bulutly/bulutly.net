<template>
  <!-- start modal video -->
  <div
    class="modal fade"
    id="videomodal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="videomodal"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>

          <!-- 16:9 aspect ratio -->
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" id="video"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end modal video -->

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

  <Header></Header>

  <ServersPricing></ServersPricing>
  <ServersTools></ServersTools>
  <ServersManagement></ServersManagement>

  <ServersServerManagement></ServersServerManagement>

  <ServersWordpress></ServersWordpress>
</template>

<script lang="ts" setup>
const { $global } = useAppConfig();
$global.headerClass = "simple-sub-page";
</script>

<style></style>
