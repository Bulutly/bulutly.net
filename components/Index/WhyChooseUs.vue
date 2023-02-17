<template>
  <!--why choose us section start-->
  <section class="why-choose-us ptb-120">
    <div class="container">
      <div class="row justify-content-lg-between align-items-center">
        <div class="col-lg-5 col-12">
          <div class="why-choose-content">
            <div
              class="icon-box rounded-custom bg-primary shadow-sm d-inline-block">
              <i class="fal fa-chart-line fa-2x text-white"></i>
            </div>
            <h2>Supply and Demand</h2>
            <p>
              Every move on market, has basic and deep reason! Yes, supply and
              demand. We are here to introduce you best selling supply and
              demand product on the internet.
            </p>
            <ul class="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
              <li class="py-1">
                <i class="fas fa-check-circle me-2 text-primary"></i>Auto zones
              </li>
              <li class="py-1">
                <i class="fas fa-check-circle me-2 text-primary"></i>Multi time
                frames
              </li>
              <li class="py-1">
                <i class="fas fa-check-circle me-2 text-primary"></i>Trail entry
                price
              </li>
              <li class="py-1">
                <i class="fas fa-check-circle me-2 text-primary"></i>Draw custom
                zones
              </li>
              <li class="py-1">
                <i class="fas fa-check-circle me-2 text-primary"></i>Position
                techniques
              </li>
              <li class="py-1">
                <i class="fas fa-check-circle me-2 text-primary"></i>Risk
                management
              </li>
              <li class="py-1">
                <i class="fas fa-check-circle me-2 text-primary"></i>Zones
                filters
              </li>
              <li class="py-1">
                <i class="fas fa-check-circle me-2 text-primary"></i>Dashboard
                mode
                <small class="rounded bg-primary-soft">Portfolio</small>
              </li>
              <li class="py-1">
                <i class="fas fa-check-circle me-2 text-primary"></i>Trend line
                entries
              </li>
              <li class="py-1">
                <i class="fas fa-check-circle me-2 text-primary"></i>Buy Sell
                mode
              </li>
              <li class="py-1">
                <i class="fas fa-check-circle me-2 text-primary"></i>Additional
                patterns
              </li>
              <li class="py-1">
                <i class="fas fa-check-circle me-2 text-primary"></i>Reward
                Multiplier
              </li>
              <li class="py-1">
                <i class="fas fa-check-circle me-2 text-primary"></i
                >MT4/MT5/TradingView
              </li>
            </ul>

            <NuxtLink
              :to="{ name: 'products-supply-demand' }"
              class="read-more-link text-decoration-none"
              >Find out Supply Demand <i class="far fa-arrow-right ms-2"></i>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
            <img
              src="~/assets/img/screen/supply-demand.png"
              class="img-fluid"
              alt="feature-image" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--why choose us section end-->
</template>
<script>
export default {
  name: "WhyChooseUs",
};
</script>
