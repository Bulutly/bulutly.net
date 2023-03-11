<template>
  <section class="pt-10 pb-25 position-relative">
    <div class="body_overlay_ono"></div>
    <div class="container">
      <div class="row justify-content-center mr-tp-60">
        <div class="col-md-3">
          <div class="box-features-sevices-home active">
            <span class="box-features-sevices-ovelow"></span>
            <i class="fad fa-cog"></i>
            <h5 class="box-title">Account Management</h5>
            <p class="box-text">
              Troubleshoot in your account? Find solutions to common problems
            </p>
            <a class="box-btn" href="#">Read articles</a>
          </div>
        </div>

        <div class="col-md-3">
          <div class="box-features-sevices-home">
            <span class="box-features-sevices-ovelow"></span>
            <i class="fad fa-globe"></i>
            <h5 class="box-title">Domains & Webhosting</h5>
            <p class="box-text">
              Check out what domains are and how they're the first step in
              building your online brand
            </p>
            <a class="box-btn" href="#">Read articles</a>
          </div>
        </div>

        <div class="col-md-3">
          <div class="box-features-sevices-home">
            <span class="box-features-sevices-ovelow"></span>
            <i class="fad fa-browser"></i>
            <h5 class="box-title">Websites & Marketing</h5>
            <p class="box-text">
              Learn about setting up your website, email marketing, and online
              store
            </p>
            <a class="box-btn" href="#">Read articles</a>
          </div>
        </div>

        <div class="col-md-3">
          <div class="box-features-sevices-home">
            <span class="box-features-sevices-ovelow"></span>
            <i class="fab fa-cpanel"></i>
            <h5 class="box-title">Linux Hosting (cPanel)</h5>
            <p class="box-text">
              Browse a list of Linux Hosting articles and learn to set up your
              account
            </p>
            <a class="box-btn" href="#">Read articles</a>
          </div>
        </div>
      </div>

      <div class="row question-area-page justify-content-left mr-tp-120">
        <div class="col-md-5 no-phone-display">
          <div class="question-area-answer-navs">
            <div class="nuhost-filter-container">
              <!-- start q&a filter -->
              <i class="fas fa-search"></i>
              <input
                type="text"
                id="nuhost-filter-input"
                onkeyup="FilterListSection()"
                placeholder="Search for quastions here.." />
              <!-- q&a filter input -->
            </div>
            <div class="nuhost-filter-list-container min-height-auto">
              <!-- q&a filter list container -->
              <ul id="nuhost-filter-list">
                <!-- start q&a filter item list -->
                <li>
                  <a class="animated-link" href="#go-to-qst-01"
                    >I forgot my username <i class="fal fa-angle-right"></i
                  ></a>
                </li>
                <!-- filter item -->
                <li>
                  <a class="animated-link" href="#go-to-qst-02"
                    >What is delegate access? <i class="fal fa-angle-right"></i
                  ></a>
                </li>
                <!-- filter item -->
                <li>
                  <a class="animated-link" href="#go-to-qst-03"
                    >Change my 2-step verification phone number
                    <i class="fal fa-angle-right"></i
                  ></a>
                </li>
                <!-- filter item -->
                <li>
                  <a class="animated-link" href="#go-to-qst-04"
                    >Remove a delegate user from my account
                    <i class="fal fa-angle-right"></i
                  ></a>
                </li>
                <!-- filter item -->
                <li>
                  <a class="animated-link" href="#go-to-qst-05"
                    >Manually renew my products or services
                    <i class="fal fa-angle-right"></i
                  ></a>
                </li>
                <!-- filter item -->
                <li>
                  <a class="animated-link" href="#go-to-qst-06"
                    >Turn off auto-renew <i class="fal fa-angle-right"></i
                  ></a>
                </li>
                <!-- filter item -->
                <li>
                  <a class="animated-link" href="#go-to-qst-07"
                    >Change my subscription payment method
                    <i class="fal fa-angle-right"></i
                  ></a>
                </li>
                <!-- filter item -->
              </ul>
              <!-- end q&a filter item list -->
            </div>
            <!-- end q&a filter -->
          </div>
        </div>

        <div class="col-md-7">
          <div class="question-area-answer-body">
            <ul>
              <li id="go-to-qst-01">
                <span>I forgot my username</span>
                <p>
                  Go to the Retrieve <b>Username page.</b><br />
                  Enter the Email address associated with your account, then
                  select <b>Continue</b>. Complete the security challenge if
                  it's offered.<br />
                  If you have a domain name, enter any Domain Name associated
                  with your account (for example, coodiv.net) and then select
                  Filter. We'll send a one-time-use
                  <b>PIN to your email address.</b><br />
                  Under 6-digit Code, enter the PIN, then select
                  <b>Verify Code</b>. We’ll show you your username.
                </p>
              </li>

              <li id="go-to-qst-02">
                <span>What is delegate access?</span>
                <p>
                  Delegate access lets <b>Coodiv</b> customers share access to
                  their accounts with other people, but without having to share
                  passwords or other secure information
                </p>
              </li>

              <li id="go-to-qst-03">
                <span>Change my 2-step verification phone number</span>
                <p>
                  To change your 2-step verification phone number, you need to
                  delete <b>the existing number</b> and then add the new one to
                  your account. Even if you changed the phone number on your
                  Coodiv My <a href="#">Profile page</a>, you still need to
                  update the number for 2SV.
                </p>
              </li>

              <li id="go-to-qst-04">
                <span>Remove a delegate user from my account</span>
                <p>
                  As an account owner, you can cancel access for any delegate at
                  any time from your <a href="#">account.</a>
                </p>
                <div class="alert alert-warning" role="alert">
                  <strong>Note:</strong> If you invited someone to access your
                  account but your invitation isn't accepted within 48 hours,
                  the invitation expires and you don't need to follow these
                  steps.
                </div>
              </li>

              <li id="go-to-qst-05">
                <span>Manually renew my products or services</span>
                <p>
                  Manually renew your products at any time, even if they're set
                  to auto-renew.
                </p>
                <div class="alert alert-info" role="alert">
                  <strong>Note:</strong> Products auto-renew for the same length
                  of time as their most recent manual renewal, instead of their
                  original registration length. This also applies to domains
                  that are manually renewed after July 16, 2020. For example, if
                  a domain is manually renewed after July 16, 2020 for a
                  three-year term, it will auto-renew for the same three-year
                  term when the time comes. For full details, see our Domain
                  Name Registration Agreement.
                </div>
              </li>

              <li id="go-to-qst-06">
                <span>Turn off auto-renew</span>
                <p>
                  Turn off auto-renew and cancel subscriptions for your
                  products. When you cancel renewal for a product, your
                  subscription will end and you won’t be charged on the next
                  billing date. If you change your mind, you can manually
                  <a href="#">renew the product</a>.
                </p>
              </li>

              <li id="go-to-qst-07">
                <span>Change my subscription payment method</span>
                <p>
                  Whether you have auto-renew enabled or you manually renew your
                  products, you can change the designated payment method for
                  your products.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="cta-row-careers mt-20">
        <div class="cta-row-careers_container">
          <h3>Still no luck? We can help!</h3>
          <p class="body-lg">
            Contact us and we’ll get back to you as soon as possible.
          </p>

          <NuxtLink tabindex="0" :to="{ name: 'contact-us' }">
            Submit a request
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
