<template>
  <div>
    <SharedPageHeaderSection
      title="Products"
      desc="Proudly built by a team of passionate developers, traders, and
            investors, our products are designed to help you make the most
            out of your trading experience."
    />
    <section class="feature-section bg-light ptb-120">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="feature-grid">
              <div class="feature-card bg-white shadow-sm highlight-card rounded-custom p-5">
                <div class="icon-box d-inline-block rounded-circle bg-primary-soft mb-32">
                  <i class="fal fa-analytics icon-sm text-primary"></i>
                </div>
                <div class="feature-content">
                  <h3 class="h5 mb-3">For All</h3>
                    <ul class="list-unstyled mb-0">
                      <li class="fw-bold mt-1">
                        <nuxt-link :to="{name:'products-supply-demand'}">
                          <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/supplydemand/sign.svg"/>
                          Supply Demand
                        </nuxt-link>
                      </li>
                      <li class="fw-bold mt-1">
                        <nuxt-link :to="{name:'products-supply-demand'}">
                          <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/trend-line/sign.svg"/>
                          Trend Line
                        </nuxt-link>
                      </li>
                      <li class="fw-bold mt-1">
                        <nuxt-link :to="{name:'products-supply-demand'}">
                          <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                          Algo Portfolio
                        </nuxt-link>
                      </li>
                      <li class="fw-bold mt-1">
                        <nuxt-link :to="{name:'products-supply-demand'}">
                          <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                          Algo Mirzakhani
                        </nuxt-link>
                      </li>
                      <li class="fw-bold mt-1">
                        <nuxt-link :to="{name:'products-supply-demand'}">
                          <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/algo-pishro/sign.svg"/> Algo Pishro
                        </nuxt-link>
                      </li>
                      <li class="fw-bold mt-1">
                        <nuxt-link :to="{name:'products-supply-demand'}">
                          <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                          Account Recovery
                        </nuxt-link>
                      </li>
                      <li class="fw-bold mt-1">
                        <nuxt-link :to="{name:'products-supply-demand'}">
                          <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                          Warren Program
                        </nuxt-link>
                      </li>
                      <li class="fw-bold mt-1">
                        <nuxt-link :to="{name:'products-supply-demand'}">
                          <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                          Cloud Trading Server
                        </nuxt-link>
                      </li>
                      <li class="fw-bold mt-1">
                        <nuxt-link :to="{name:'products-supply-demand'}">
                          <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                          Bazaar
                        </nuxt-link>
                      </li>
                    </ul>
                </div>
              </div>
              <div class="feature-card bg-white shadow-sm rounded-custom p-5">
                <div class="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                  <i class="fal fa-file-chart-line icon-sm text-success"></i>
                </div>
                <div class="feature-content">
                  <h3 class="h5 mb-3">For Developers</h3>
                  <ul class="list-unstyled mb-0">
                    <li class="fw-bold mt-1">
                      <nuxt-link :to="{name:'products-supply-demand'}">
                        <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                        Marketplace
                      </nuxt-link>
                    </li>
                    <li class="fw-bold mt-1">
                      <nuxt-link :to="{name:'products-supply-demand'}">
                        <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                        License System
                      </nuxt-link>
                    </li>
                    <li class="fw-bold mt-1">
                      <nuxt-link :to="{name:'products-supply-demand'}">
                        <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                        Trading Framework
                      </nuxt-link>
                    </li>
                    <li class="fw-bold mt-1">
                      <nuxt-link :to="{name:'products-supply-demand'}">
                        <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                        Rest APIs
                      </nuxt-link>
                    </li>
                    <li class="fw-bold mt-1">
                      <nuxt-link :to="{name:'products-supply-demand'}">
                        <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                        Bazaar SDK
                      </nuxt-link>
                    </li>
                    <li class="fw-bold mt-1">
                      <nuxt-link :to="{name:'products-supply-demand'}">
                        <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                        Cloud SDK
                      </nuxt-link>
                    </li>
                    <li class="fw-bold mt-1">
                      <nuxt-link :to="{name:'products-supply-demand'}">
                        <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                        CLI
                      </nuxt-link>
                    </li>
                    <li class="fw-bold mt-1">
                      <nuxt-link :to="{name:'products-supply-demand'}">
                        <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                        Git VCS
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="feature-card bg-white shadow-sm rounded-custom p-5">
                <div class="icon-box d-inline-block rounded-circle bg-danger-soft mb-32">
                  <i class="fal fa-user-friends icon-sm text-danger"></i>
                </div>
                <div class="feature-content">
                  <h3 class="h5 mb-3">For Traders</h3>
                  <ul class="list-unstyled mb-0">
                    <li class="fw-bold mt-1">
                      <nuxt-link :to="{name:'products-supply-demand'}">
                        <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/services/bazaar/sign.svg"/>
                        Bazaar
                      </nuxt-link>
                    </li>
                    <li class="fw-bold mt-1">
                      <nuxt-link :to="{name:'products-supply-demand'}">
                        <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                        Mastermind
                      </nuxt-link>
                    </li>
                    <li class="fw-bold mt-1">
                      <nuxt-link :to="{name:'products-supply-demand'}">
                        <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                        Coaching
                      </nuxt-link>
                    </li>
                    <li class="fw-bold mt-1">
                      <nuxt-link :to="{name:'products-supply-demand'}">
                        <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                        Algo Coaching
                      </nuxt-link>
                    </li>
                    <li class="fw-bold mt-1">
                      <nuxt-link :to="{name:'products-supply-demand'}">
                        <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                        Trade Road
                      </nuxt-link>
                    </li>
                    <li class="fw-bold mt-1">
                      <nuxt-link :to="{name:'products-supply-demand'}">
                        <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/services/capital-road/sign.svg"/>
                        Capital Road
                      </nuxt-link>
                    </li>
                    <li class="fw-bold mt-1">
                      <nuxt-link :to="{name:'products-supply-demand'}">
                        <img class="img-fluid me-2" width="18px" height="18px" src="~/assets/img/products/sign.svg"/>
                        Millionaire of Month
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Prodcuts",
};
</script>
