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
        style="background: #d8f9f6"
        class="services-page-bg-overflow with-montains"></span>
    </template>
    <template #main>
      <main class="container pt-30">
        <div class="row justify-content-center mb-9">
          <div class="col-md-7 col-12 white-text text-center">
            <span class="main-header-top-title mx-auto"
              >Search and buy available domain names</span
            >
            <h3 class="main-header-title coodiv-text-3 font-weight-bold">
              It all starts with a domain name.
            </h3>
            <p class="coodiv-text-9">
              The perfect domain lets people know at a glance why you're online
              (and why you're awesome). Use the domain search bar and find the
              right domain now to grab more attention and visitors.
            </p>
          </div>
        </div>

        <div class="row justify-content-center mb-15">
          <div class="col-md-8 col-12">
            <form class="domain-search-form" action="#" method="GET">
              <div class="domain-search position-relative">
                <input
                  class="domain-search-input-header pl-6"
                  type="text"
                  name="domain"
                  data-role="input-typewrite"
                  required=""
                  aria-label="Register a Domain Name"
                  placeholder="domain.info" />
                <button
                  type="submit"
                  class="btn btn-warning domain-search-button-header position-absolute"
                  role="button"
                  aria-label="Search Domain Name">
                  Search
                </button>
              </div>
            </form>
            <div class="d-flex justify-content-between after-search-btns mt-3">
              <a href="#">Bulk registration</a>
              <a href="#">Bring your domains to Coodiv.cloud</a>
            </div>
          </div>
        </div>
      </main>
    </template>
    <template #more-services>
      <div
        style="background: rgb(24 28 32 / 58%)"
        class="more-services-sub-page">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-9 col-12">
              <div class="owl-carousel more-services-carousel owl-theme">
                <div class="item">
                  <div class="domains-box-prices">
                    <img src=" ~/assets/img/domain/black/com.png" alt="" />
                    <span class="ltd-price">$ 3.99‬</span>
                  </div>
                </div>

                <div class="item">
                  <div class="domains-box-prices">
                    <img src="~/assets/img/domain/black/org.png" alt="" />
                    <span class="ltd-price">$ 3.99‬</span>
                  </div>
                </div>

                <div class="item">
                  <div class="domains-box-prices">
                    <img src="~/assets/img/domain/black/net.png" alt="" />
                    <span class="ltd-price">$ 3.99‬</span>
                  </div>
                </div>

                <div class="item">
                  <div class="domains-box-prices">
                    <img src="~/assets/img/domain/black/shop.png" alt="" />
                    <span class="ltd-price">$ 3.99‬</span>
                  </div>
                </div>

                <div class="item">
                  <div class="domains-box-prices">
                    <img src="~/assets/img/domain/black/life.png" alt="" />
                    <span class="ltd-price">$ 3.99‬</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Header>

  <DomainsDomainFeatures></DomainsDomainFeatures>
  <DomainsCoodivs></DomainsCoodivs>
</template>

<script lang="ts" setup>
const { $global } = useAppConfig();
$global.headerClass = "services-page";
</script>

<style></style>
