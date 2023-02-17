<template>
  <!--pricing section start-->
  <section
    class="pricing-section position-relative overflow-hidden bg-dark text-white pt-120"
    style="
      background: url('~/assets/img/page-header-bg.svg') no-repeat center center;
    ">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-12">
          <div class="section-heading text-center z-5 position-relative">
            <h4 class="h5 text-warning">Premium Account</h4>
            <h2>Check Our Valuable Price</h2>
            <p>
              Boost your account with premium plan to use full-featured services
              & products.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div
            class="pricing-content-wrap mb--100 bg-white rounded-custom shadow-lg border d-fle position-relative">
            <div
              class="price-feature-col pricing-feature-info left-radius bg-primary-soft p-5">
              <h5>Our Products</h5>
              <ul
                class="list-unstyled pricing-feature-list pricing-included-list mb-0">
                <li class="py-1">
                  <i class="fas fa-check-circle text-primary me-2"></i>

                  <NuxtLink
                    :to="{ name: 'products-supply-demand' }"
                    class="text-decoration-none text-body">
                    Supply Demand
                  </NuxtLink>
                </li>
                <li class="py-1">
                  <i class="fas fa-check-circle text-primary me-2"></i>

                  <NuxtLink
                    :to="{ name: 'products-algo-portfolio' }"
                    class="text-decoration-none text-body">
                    Algo Portfolio
                  </NuxtLink>
                </li>
                <li class="py-1">
                  <i class="fas fa-check-circle text-primary me-2"></i>

                  <NuxtLink
                    :to="{ name: 'products-trend-friend' }"
                    class="text-decoration-none text-body"
                    >Trend Friend</NuxtLink
                  >
                </li>
                <li class="py-1">
                  <i class="fas fa-check-circle text-primary me-2"></i>

                  <NuxtLink
                    :to="{ name: 'products-dashboard-x' }"
                    class="text-decoration-none text-body">
                    Dashboard X
                  </NuxtLink>
                </li>
                <li class="py-1">
                  <i class="fas fa-check-circle text-primary me-2"></i>

                  <NuxtLink
                    :to="{ name: 'products-trend-line' }"
                    class="text-decoration-none text-body">
                    Trend Line
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="price-feature-col pricing-action-info p-5">
              <ul
                class="nav nav-pills mb-4 pricing-tab-list"
                id="pills-tab"
                role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true">
                    Premium
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                    class="">
                    Advance
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade active show"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab">
                  <h3 class="h5">Premium</h3>
                  <p>Experience world-class of trading softwares on Trader4.</p>
                  <div class="pricing-price mt-5">
                    <h4 class="h1 fw-bold">
                      $99<small>.99</small> <span>/month</span>
                    </h4>
                  </div>
                  <!-- <a
                    href="http://127.0.0.1:8001/panel/accounts/subscription"
                    class="btn btn-primary mt-3"
                    >Let`s Start</a
                  > -->
                  <NuxtLink
                    :to="{ name: 'index' }"
                    class="btn btn-primary mt-3">
                    Let`s Start
                  </NuxtLink>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab">
                  <h3 class="h5">Advance</h3>
                  <p>
                    Discover uniquely AI portfolio and super feature softwares.
                  </p>
                  <div class="pricing-price mt-5">
                    <h4 class="h1 fw-bold">
                      $999<small>.99</small> <span>/month</span>
                    </h4>
                  </div>
                  <!-- <a
                    href="http://127.0.0.1:8001/panel/accounts/subscription"
                    class="btn btn-primary mt-3"
                    >Let`s Start</a
                  > -->
                  <NuxtLink
                    :to="{ name: 'index' }"
                    class="btn btn-primary mt-3">
                    Let`s Start
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning left-5"></div>
    <div class="white-space-100 bg-white w-100"></div>
  </section>
  <!--pricing section end-->
</template>
<script>
export default {
  name: "PricingSection",
};
</script>
