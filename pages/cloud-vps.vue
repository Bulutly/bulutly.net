<template>
  <!-- <div class="preloader">

      <div class="preloader-container">
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

  <Header>
    <template #span>
      <span class="services-page-bg-overflow"></span>
    </template>
    <template #main>
      <main class="container pt-30">
        <div class="row justify-content-start">
          <div class="col-md-7 col-12 white-text">
            <span class="main-header-top-title">Managed VPS Hosting</span>
            <h3 class="main-header-title coodiv-text-3 font-weight-bold">
              Get 100% worry-free, Fully Managed VPS Hosting.
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
                <i class="fal fa-check"></i> Unlimited accounts and easy admin.
              </li>
            </ul>
          </div>

          <div class="col-10 col-md-5">
            <img
              src="/img/demo/features/services.png"
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
          <div class="row justify-content-center">
            <div class="col-md-9 col-12">
              <div class="row justify-content-around">
                <RouterLink v-for="link in links" :to="link.link">
                  {{ link.title }}
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Header>

  <CloudVpsClientSite />

  <CloudVpsPrices />

  <IndexWebHosting />

  <CloudVpsFeatures />

  <CloudVpsChatbot />

  <CloudVpsMapServer />
</template>

<script lang="ts" setup>
const { $global } = useAppConfig();
$global.headerClass = "services-page";

const links = ref([
  { title: "Web Hosting", link: "/hosting" },
  { title: "Internet Radio Station", link: "/icecast" },
  { title: "Managed Servers", link: "/Dedicated" },
  { title: "VPS Hosting", link: "/cloud-vps" },
  { title: "Reseller Hosting", link: "/vps-reseller" },
]);
</script>

<style></style>
