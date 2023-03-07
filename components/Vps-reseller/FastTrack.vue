<template>
  <section class="fast-track pt-20 pb-25">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-md-6 col-12">
          <div
            style="background-color: transparent"
            class="section_text_graphic_image">
            <img
              src="~/assets/img/demo/features/services.png"
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
              :to="{ name: 'servers' }"
              class="btn btn-dark coodiv-text-11 mt-10">
              Start building your server
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="cta-row-careers mt-20">
        <div class="cta-row-careers_container">
          <h3>Need a self-managed VPS?</h3>
          <p class="body-lg">
            We also offer self-managed VPS hosting plans starting at $ 4.99/mo.
          </p>

          <NuxtLink :to="{ name: 'wordpress' }" tabindex="0">
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
