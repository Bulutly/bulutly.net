<template>
  <div>
    <section class="coming-soon-section min-vh-100 ptb-120 overflow-hidden position-relative w-100 d-flex flex-column justify-content-center" style="background: url('assets/img/page-header-bg.svg')no-repeat bottom right">
      <div class="bg-dark fixed-bg"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-12">
            <div class="coming-soon-content-wrap position-relative z-2">
              <nuxt-link to="/" class="w-25 mb-5 d-block"><img src="~/assets/img/brand/sign-wh.svg" alt="Trader4" class="img-fluid"/></nuxt-link>

              <h3 class="text-white">We are working...</h3>
              <p class="text-white">We are getting ready to serve this product/service, Please Stay With us!</p>
              <div class="action-btns">
                <nuxt-link to="/" class="btn btn-outline-light btn-sm me-3 mt-5">Back to Home</nuxt-link>
              </div>

              <div class="social-list-wrap mt-100">
                <ul class="list-unstyled author-social-list social-bg-ts list-inline mb-0">
                  <li class="list-inline-item">
                    <nuxt-link
                        to="https://github.com/traderfour"
                        target="_blank">
                      <i class="fab fa-github"></i>
                    </nuxt-link>
                  </li>
                  <li class="list-inline-item">
                    <nuxt-link
                        to="https://www.youtube.com/channel/UCe8CyzFbWhYoH0OAQuh7shg"
                        target="_blank">
                      <i class="fab fa-youtube"></i>
                    </nuxt-link>
                  </li>
                  <li class="list-inline-item">
                    <nuxt-link to="https://discord.gg/hXSQ8PEzzM" target="_blank">
                      <i class="fab fa-discord"></i>
                    </nuxt-link>
                  </li>
                  <li class="list-inline-item">
                    <nuxt-link
                        to="https://twitter.com/trader4_net"
                        target="_blank">
                      <i class="fab fa-twitter"></i>
                    </nuxt-link>
                  </li>
                  <li class="list-inline-item">
                    <nuxt-link to="https://t.me/traderfour" target="_blank">
                      <i class="fab fa-telegram"></i>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="animated-circle list-unstyled z--1">
        <li class="transition-delay-1 bg-danger"></li>
        <li class="transition-delay-2 bg-warning"></li>
        <li class="transition-delay-3 bg-primary"></li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  name: "UnderConstruction",
};
definePageMeta({
  layout: "raw",
});
</script>
