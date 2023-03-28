<template>
  <section class="map-server-places-section position-relative">
    <div class="container">
      <div class="map-gene-server-place">
        <img src="img/maps/map.png" alt="" />
        <div class="server-places-spans">
          <span style="top: 34%; left: 17%">
            <b>USA Server</b> <small class="good">99.99%</small></span
          >
          <span style="top: 76%; left: 29%">
            <b>BRAZIL Server</b> <small class="avrage">85.70%</small></span
          >
          <span style="top: 50%; left: 43%">
            <b>ALGERIA Server</b> <small class="bad">40.80%</small></span
          >
          <span style="top: 30%; left: 70%">
            <b>ASIA Server</b> <small class="avrage">75.20%</small></span
          >
          <span style="top: 82%; left: 76%">
            <b>AUSTRALIA Server</b> <small class="good">95.89%</small></span
          >
        </div>
      </div>

      <div class="map-comment-area">
        <h3 class="map-comment-area-title">
          We are running in all of the world
        </h3>
        <p class="map-comment-area-text">
          Our 4 million users are the 4 million reasons why you have to use our
          services. Each service we provide is a source of real-time
          intelligence about new and current threats. That’s how we run our
          servers to make that network even stronger.
        </p>
      </div>
    </div>

    <div class="container">
      <div class="cta-row-careers mt-20">
        <div class="cta-row-careers_container">
          <h3>Need a self-managed VPS?</h3>
          <p class="body-lg">
            We also offer self-managed VPS hosting plans starting at $ 4.99/mo.
          </p>

          <NuxtLink :to="{ name: 'vps-reseller' }" tabindex="0">
            Read more
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
