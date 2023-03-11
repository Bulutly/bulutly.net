<template>
  <section class="py-25 bg-default-2">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-md-6 col-12">
          <div class="title-default-coodiv-four">
            <h5 class="coodiv-text-5 font-weight-bold">
              Frequently asked questions
            </h5>
            <p class="coodiv-text-9">
              Don’t see what you’re looking for?

              <NuxtLink :to="{ name: 'contact-us' }">
                Shoot us a message!
              </NuxtLink>
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="faq-section-bredh" id="faq">
            <div class="faq-section-bredh-section">
              <div class="" id="faqone">
                <button
                  class="faq-section-bredh-title"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne">
                  What is Web Hosting Plus?
                </button>
              </div>

              <div
                id="collapseOne"
                class="faq-section-bredh-text collapse show"
                aria-labelledby="faqone"
                data-parent="#faq">
                <p>
                  If your website is growing, it’s only a matter of time before
                  you’ll need more power than shared hosting can provide. Web
                  Hosting Plus delivers the same power and performance as a
                  Virtual Private Server (VPS) without the pain of server
                  administration. You get all the RAM, CPU and bandwidth you
                  need without having to hire an IT pro to manage your server.
                </p>
              </div>
            </div>

            <div class="faq-section-bredh-section">
              <div class="" id="faqtwo">
                <button
                  class="faq-section-bredh-title"
                  data-toggle="collapse"
                  data-target="#collapsetwo"
                  aria-expanded="false"
                  aria-controls="collapsetwo">
                  How do I activate my Professional Email?
                </button>
              </div>

              <div
                id="collapsetwo"
                class="faq-section-bredh-text collapse"
                aria-labelledby="faqtwo"
                data-parent="#faq">
                <p>
                  Your one-year Professional Email can be activated from your
                  Coodiv account. If you need help migrating your existing email
                  to professional email or want to add more email IDs, call the
                  Email Services team at <b>00213 123 4556 78.</b>
                </p>
              </div>
            </div>

            <div class="faq-section-bredh-section">
              <div class="" id="faqtree">
                <button
                  class="faq-section-bredh-title"
                  data-toggle="collapse"
                  data-target="#collapsetree"
                  aria-expanded="false"
                  aria-controls="collapsetree">
                  What version of PHP and MySQL do I get with Web Hosting?
                </button>
              </div>

              <div
                id="collapsetree"
                class="faq-section-bredh-text collapse"
                aria-labelledby="faqtree"
                data-parent="#faq">
                <p>
                  Web Hosting comes with PHP 8.1, 8.0, 7.4, 7.3, 5.6 and the
                  latest versions of MySQL 5.6. These are a key requirement for
                  Magento, CMS-Drupal and OpenCart websites and anyone running
                  multiple WordPress websites.
                </p>
              </div>
            </div>
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
