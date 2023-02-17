<template>
  <!--faq section start-->
  <section class="faq-section ptb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-12">
          <div class="section-heading text-center">
            <h4 class="h5 text-primary">F.A.Q.</h4>
            <h2>Frequently Asked Questions</h2>
            <p>
              Do you have a question about premium account on Trader4? Here is
              frequently asked questions.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-10">
          <div class="faq-content-wrap d-flex mb-5">
            <span class="faq-icon me-3"
              ><i class="fal fa-copyright text-primary"></i
            ></span>
            <div class="faq-info">
              <h5>How long does it take to activate the product license?</h5>
              <p class="mb-0">
                <strong>Immediately</strong> after processing and confirming the
                payment, the product license will be activated for you. Payment
                processing and confirmation times vary by payment method.
                Sometimes cryptocurrency payments take up to 30 minutes.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-10">
          <div class="faq-content-wrap d-flex mb-5">
            <span class="faq-icon me-3"
              ><i class="fal fa-credit-card text-primary"></i
            ></span>
            <div class="faq-info">
              <h5>
                Will the license of all products be activated by purchasing a
                subscription?
              </h5>
              <p class="mb-0">
                <strong>Yes</strong>, just by purchasing a monthly subscription
                according to the type of license subscription, all the products
                of that subscription type will be activated for you without any
                restrictions.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-10">
          <div class="faq-content-wrap d-flex mb-5">
            <span class="faq-icon me-3"
              ><i class="fal fa-clipboard-list-check text-primary"></i
            ></span>
            <div class="faq-info">
              <h5>If I cancel my subscription, will you refund my money?</h5>
              <p class="mb-0">
                <strong>Of course</strong>, You can cancel your subscription
                anytime, you will be charged for the unused days.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-10">
          <div class="faq-content-wrap d-flex mb-5">
            <span class="faq-icon me-3"
              ><i class="fal fa-microphone text-primary"></i
            ></span>
            <div class="faq-info">
              <h5>
                Is it possible to test the products before buying a
                subscription?
              </h5>
              <p class="mb-0">
                <strong>Yes</strong>, You can visit our

                <NuxtLink
                  to="https://www.youtube.com/channel/UCe8CyzFbWhYoH0OAQuh7shg"
                  target="_blank"
                  rel="noreferrer">
                  <strong>YouTube channel</strong>
                </NuxtLink>
                to see the live performance of the products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="bg-dark shadow-lg p-5 rounded-custom mt-lg-5">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-7">
            <div class="cta-content">
              <h3 class="mb-2">Have More Questions?</h3>
              <p class="mb-lg-0 mb-xl-0">
                Drop us a note, and we’ll get back to you within 24 hours.
              </p>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="text-lg-end">
              <NuxtLink :to="{ name: 'contact-us' }" class="btn btn-light">
                Get in Touch
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--faq section end-->
</template>
<script>
export default {
  name: "FaqSection",
};
</script>
