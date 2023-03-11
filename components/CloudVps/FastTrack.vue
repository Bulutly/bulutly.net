<template>
  <section class="fastTrack pt-20 pb-25 border-top">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-md-6 col-12 d-flex align-items-center">
          <div class="content-text-author mb-md-0 mb-14">
            <p
              style="color: #ee9823"
              class="eyebrow content-text-author_eyebrow">
              Super fast development
            </p>
            <h3 class="coodiv-text-4 font-weight-bold">
              A fast track to more sales.
            </h3>
            <p class="content_text_author_description_p">
              Did you know that 57% of users will leave your site if it takes
              longer than 3 seconds to load? That’s a lot of lost revenue. And
              with Web Hosting Plus, your pages load faster than shared hosting,
              so more visitors convert to customers.
            </p>
            <p class="content_text_author_description_p">
              With our latest optimized server hardware, you'll get faster sites
              — up to nearly 40% average improvement in overall server response
              times*.
            </p>

            <NuxtLink
              :to="{ name: 'dedicated' }"
              class="btn btn-dark coodiv-text-11 mt-10">
              Discover all plans and prices
            </NuxtLink>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div
            style="background-color: #fede48"
            class="section_text_graphic_image">
            <img
              src="~/assets/img/demo/features/yellow-feature.png"
              alt=""
              title=""
              loading="lazy" />
          </div>
        </div>
      </div>

      <div class="row justify-content-start mt-22">
        <div class="col-md-6 col-12">
          <div
            style="background-color: #ff5059"
            class="section_text_graphic_image">
            <img
              src="~/assets/img/demo/features/red-feature.png"
              alt=""
              title=""
              loading="lazy" />
          </div>
        </div>
        <div class="col-md-6 col-12 d-flex align-items-center">
          <div class="content-text-author mt-md-0 mt-14">
            <p
              style="color: #ff2934"
              class="eyebrow content-text-author_eyebrow">
              MANAGED WORDPRESS ECOMMERCE
            </p>
            <h3 class="coodiv-text-4 font-weight-bold">
              WooCommerce offers powerful online stores.
            </h3>
            <p class="content_text_author_description_p">
              Managed WordPress Ecommerce offers hassle-free online store setup,
              built-in speed and performance, plus free access to over 40
              WooCommerce extensions.
            </p>
            <p class="content_text_author_description_p">
              Build client sites quickly with the latest version of WordPress
              installed. From there you can start from scratch or save time
              picking from dozens of flexible, editable themes.
            </p>

            <NuxtLink
              :to="{ name: 'wordpress' }"
              class="btn btn-dark coodiv-text-11 mt-10">
              See all WooCommerce offers
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
