<template>
  <section class="pt-20 pb-25">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-md-6 col-12 d-flex align-items-center">
          <div class="content-text-author mb-md-0 mb-14">
            <p
              style="color: #ee9823"
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
              See all WordPress prices
            </NuxtLink>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div
            style="background-color: transparent"
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
            style="background-color: transparent"
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
              DEDICATED SERVER HOSTING
            </p>
            <h3 class="coodiv-text-4 font-weight-bold">
              Dedicated Server Hosting for system admins and developers.
            </h3>
            <p class="content_text_author_description_p">
              Calling all experienced developers, system admins or agencies
              seeking powerful server capabilities: our Dedicated Server Hosting
              provides high-performance server options with isolated resources
              to run mission-critical applications where latency and uptime
              matters.
            </p>
            <p class="content_text_author_description_p">
              All plans come with free standard hosting support. Optional paid
              server management services include fully managed support and
              task-based services.
            </p>

            <NuxtLink
              :to="{ name: 'servers' }"
              class="btn btn-dark coodiv-text-11 mt-10">
              Start configure your server now
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
