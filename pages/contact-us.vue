<template>
  <!-- <div class="preloader"> -->
  <!-- start preloader -->
  <!-- <div class="preloader-container">
            <svg version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                <circle fill="#675cda" stroke="none" cx="6" cy="50" r="6">
                    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1" />
                </circle>
                <circle fill="#675cda" stroke="none" cx="30" cy="50" r="6">
                    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2" />
                </circle>
                <circle fill="#675cda" stroke="none" cx="54" cy="50" r="6">
                    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3" />
                </circle>
            </svg>
            <span>loading</span>
        </div>
    </div> -->
  <!-- end preloader -->

  <Header>
    <div class="bg_overlay_header">
      <div id="particles-bg"></div>
      <div class="cloud-bg"></div>
      <div class="bg-img-header-new-moon">&nbsp;</div>
    </div>
    <template #main>
      <main class="container mt-25">
        <div class="row">
          <div class="col-md-5 pt-15">
            <span class="main-header-top-title">You still got questions ?</span>
            <h3 class="mt-3 contact-us-hero-title coodiv-text-3">
              you can talk to our humans.
            </h3>
            <div class="contact-us-social-icons">
              <a class="fb" href="#"><i class="fab fa-facebook-f"></i></a>
              <a class="tw" href="#"><i class="fab fa-twitter"></i></a>
              <a class="yb" href="#"><i class="fab fa-youtube"></i></a>
            </div>
          </div>

          <div class="col-md-7">
            <form
              class="row form-contain-home contact-page-form-send"
              id="ajax-contact"
              method="post"
              action="mailer.php">
              <!-- start form -->
              <h5>
                get in touch
                <span>discouver how can our services grow your business.</span>
              </h5>
              <div id="form-messages"></div>
              <!-- form message -->

              <div class="col-md-12">
                <!-- start col -->
                <div class="field input-field">
                  <input
                    class="form-contain-home-input"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="entre your name"
                    required />
                  <!-- input -->
                  <i class="fas fa-user"></i>
                </div>
              </div>
              <!-- end col -->

              <div class="col-md-12">
                <!-- start col -->
                <div class="field input-field">
                  <input
                    class="form-contain-home-input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="entre your email"
                    required />
                  <!-- input -->
                  <i class="far fa-envelope"></i>
                </div>
              </div>
              <!-- end col -->

              <div class="col-md-12">
                <!-- start col -->
                <div class="field input-field">
                  <textarea
                    class="form-contain-home-input"
                    id="message"
                    name="message"
                    placeholder="entre your message"
                    required></textarea>
                  <!-- textarea -->
                </div>
              </div>
              <!-- end col -->

              <div class="btn-holder-contect">
                <button type="submit">Send</button>
                <!-- submit button -->
              </div>
            </form>
            <!-- end form -->
          </div>
        </div>
      </main>
    </template>
  </Header>

  <ContactMobileForm></ContactMobileForm>
  <ContactHelpCenter></ContactHelpCenter>
</template>

<script lang="ts" setup>
const { $global } = useAppConfig();
$global.headerClass = "subpages-header";
</script>

<style></style>
