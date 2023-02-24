<template>
  <!-- <div class="preloader">

      <div class="preloader-container">
        <svg
          version="1.1"
          id="L5"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"
          xml:space="preserve">
          <circle fill="#675cda" stroke="none" cx="6" cy="50" r="6">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 15 ; 0 -15; 0 15"
              repeatCount="indefinite"
              begin="0.1" />
          </circle>
          <circle fill="#675cda" stroke="none" cx="30" cy="50" r="6">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 10 ; 0 -10; 0 10"
              repeatCount="indefinite"
              begin="0.2" />
          </circle>
          <circle fill="#675cda" stroke="none" cx="54" cy="50" r="6">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.3" />
          </circle>
        </svg>
        <span>loading</span>
      </div>
    </div> -->

  <div
    id="coodiv-header"
    class="d-flex mx-auto flex-column moon-edition services-page">
    <span class="services-page-bg-overflow"></span>

    <main class="container pt-30">
      <div class="row justify-content-start">
        <div class="col-md-7 col-12 white-text">
          <span class="main-header-top-title">Managed VPS Hosting</span>
          <h3 class="main-header-title coodiv-text-3 font-weight-bold">
            Get 100% worry-free, Fully Managed VPS Hosting.
          </h3>
          <ul class="main-header-features">
            <li><i class="fal fa-check"></i> 24/7 fully managed support.</li>
            <li>
              <i class="fal fa-check"></i> NVMe SSD-powered KVM VPS – high
              performance hosting.
            </li>
            <li>
              <i class="fal fa-check"></i> cPanel/WHM, Plesk Obsidian for easy
              WordPress admin.
            </li>
            <li>
              <i class="fal fa-check"></i> Unlimited accounts and easy admin.
            </li>
          </ul>
        </div>

        <div class="col-10 col-md-5">
          <img
            src="../assets/img/demo/features/services.png"
            class="d-block mx-lg-auto img-fluid mt-n10 mb-15"
            alt="Bootstrap Themes"
            width="640"
            height="584"
            loading="lazy" />
        </div>
      </div>
    </main>

    <div class="more-services-sub-page">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 col-12">
            <div class="owl-carousel more-services-carousel owl-theme">
              <div class="item"><a href="hosting.html">Web Hosting</a></div>
              <div class="item">
                <a href="icecast.html">Internet Radio Station</a>
              </div>
              <div class="item">
                <a href="servers.html">Managed Servers</a>
              </div>
              <div class="item">
                <a href="dedicated.html">Dedicated Server</a>
              </div>
              <div class="item">
                <a class="active" href="cloud-vps.html">VPS Hosting</a>
              </div>
              <div class="item">
                <a href="vps-reseller.html">Reseller Hosting</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="py-20">
    <div class="container">
      <h5 class="title-default-coodiv-two m-0 text-left">
        Trust your client sites to the world’s #1 web host.
        <span
          >Get faster sites — up to nearly 40% average improvement in overall
          server response times.</span
        >
      </h5>

      <div class="row justify-content-start mt-10">
        <div class="col-md-4 col-12">
          <i class="fal fa-life-ring coodiv-text-5"></i>
          <h5 class="coodiv-text-9 font-weight-bold">
            24/7 dedicated support.
          </h5>
          <p class="coodiv-text-11 font-weight-light">
            Our expert team is here for you ‘round-the-clock to proactively
            monitor your virtual server (vserver). That means everything from
            CPU utilization to Apache and MySQL processes.
          </p>
        </div>

        <div class="col-md-4 col-12">
          <i class="fal fa-chart-line coodiv-text-5"></i>
          <h5 class="coodiv-text-9 font-weight-bold">
            High-performance servers.
          </h5>
          <p class="coodiv-text-11 font-weight-light">
            Get fast-performing Fully Managed VPS Hosting with NVMe SSD servers
            on OpenStack — and KVM virtualization for total control over
            hardware resources.
          </p>
        </div>

        <div class="col-md-4 col-12">
          <i class="fal fa-user-crown coodiv-text-5"></i>
          <h5 class="coodiv-text-9 font-weight-bold">
            Unlimited accounts and easy admin.
          </h5>
          <p class="coodiv-text-11 font-weight-light">
            Create unlimited hosting accounts from either cPanel/WHM or Plesk
            Obsidian Webhost Edition control panel — including a toolkit for
            managing WordPress sites (CentOS or Windows).
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 bg-default-2 position-relative">
    <div class="container">
      <h5 class="title-default-coodiv-two">
        Fully Managed VPS Hosting plans and prices:
      </h5>

      <div class="row justify-content-center">
        <div id="monthly-yearly-chenge" class="mr-tp-40 style-two">
          <a class="active monthly-price">
            <span class="change-box-text">billed monthly</span>
            <span class="change-box"></span
          ></a>
          <a class="yearli-price">
            <span class="change-box-text">billed annually</span></a
          >
        </div>
      </div>

      <div
        class="row justify-content-start second-pricing-table-container mr-tp-30">
        <div class="col-md-4 px-0">
          <div class="second-pricing-table">
            <h5 class="second-pricing-table-title">
              1 vCPU w/Managed Support <span>mostly for personal using</span>
            </h5>
            <span class="plan-discount">With an annual term (60% savings)</span>
            <span class="second-pricing-table-price monthly">
              <i class="monthly">$1.99<small>/mo</small></i>
              <i class="yearly">$9.99<small>/year</small></i>
            </span>

            <ul class="second-pricing-table-body">
              <li><strong>2 TB</strong> of space</li>
              <li><strong>unlimited</strong> bandwidth</li>
              <li><strong>full backup</strong> systems</li>
              <li><strong>free</strong> domain</li>
              <li><strong>Unlimited</strong> Database</li>
              <li class="not-chacked">Fast SSD Storage</li>
              <li class="not-chacked">unlimited database</li>
            </ul>

            <ul class="second-pricing-table-body-features">
              <li>
                <span
                  ><strong>Dedicated project</strong>big companis,we chose to
                  works with it</span
                >
              </li>
              <li>
                <span
                  ><strong>Easy feedback sharing</strong>Choose your edition,
                  Try it free for 14 days</span
                >
              </li>
            </ul>

            <a class="second-pricing-table-button" href="#"
              >Configure Your Server</a
            >
          </div>
        </div>

        <div class="col-md-4 px-0">
          <div class="second-pricing-table">
            <h5 class="second-pricing-table-title">
              2 vCPU w/Managed Support <span>mostly for personal using</span>
            </h5>
            <span class="plan-discount">With an annual term (60% savings)</span>
            <span class="second-pricing-table-price monthly">
              <i class="monthly">$3.99<small>/mo</small></i>
              <i class="yearly">$42.99<small>/year</small></i>
            </span>

            <ul class="second-pricing-table-body">
              <li><strong>2 TB</strong> of space</li>
              <li><strong>unlimited</strong> bandwidth</li>
              <li><strong>full backup</strong> systems</li>
              <li><strong>free</strong> domain</li>
              <li><strong>Unlimited</strong> Database</li>
              <li><strong>Fast</strong> SSD Storage</li>
              <li class="not-chacked">unlimited database</li>
            </ul>

            <ul class="second-pricing-table-body-features">
              <li>
                <span
                  ><strong>Dedicated project</strong>big companis,we chose to
                  works with it</span
                >
              </li>
              <li>
                <span
                  ><strong>Easy feedback sharing</strong>Choose your edition,
                  Try it free for 14 days</span
                >
              </li>
            </ul>

            <a class="second-pricing-table-button" href="#"
              >Configure Your Server</a
            >
          </div>
        </div>

        <div class="col-md-4 px-0">
          <div class="second-pricing-table style-2 active">
            <h5 class="second-pricing-table-title">
              8 vCPU w/Managed Support <span>mostly for personal using</span>
            </h5>
            <span class="plan-discount">With an annual term (60% savings)</span>
            <span class="second-pricing-table-price monthly">
              <i class="monthly">$6.99<small>/mo</small></i>
              <i class="yearly">$85.99<small>/year</small></i>
            </span>

            <ul class="second-pricing-table-body">
              <li><strong>2 TB</strong> of space</li>
              <li><strong>unlimited</strong> bandwidth</li>
              <li><strong>full backup</strong> systems</li>
              <li><strong>free</strong> domain</li>
              <li><strong>Unlimited</strong> Database</li>
              <li><strong>Fast SSD</strong> Storage</li>
              <li><strong>unlimited</strong> database</li>
            </ul>

            <ul class="second-pricing-table-body-features">
              <li>
                <span
                  ><strong>Dedicated project</strong>big companis,we chose to
                  works with it</span
                >
              </li>
              <li>
                <span
                  ><strong>Easy feedback sharing</strong>Choose your edition,
                  Try it free for 14 days</span
                >
              </li>
            </ul>

            <a class="second-pricing-table-button" href="#"
              >Configure Your Server</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20">
    <div class="container">
      <h5 class="title-default-coodiv-two">
        Choose Web Hosting Plus, Here's Why
      </h5>

      <div class="row justify-content-center mt-20">
        <div class="col-md-4">
          <div class="coodiv-feutres-black-version text-center">
            <i style="background: #88f6ec" class="fad fa-chart-pie mx-auto"></i>
            <div class="text">
              <h5 class="coodiv-text-7 font-weight-bold mb-0">
                Fast speed — CPU and RAM.
              </h5>
              <p class="coodiv-text-11 font-weight-light">
                Get the super-fast speed you're looking for with dedicated CPU
                and RAM, the processing and memory resources that power fast
                sites.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="coodiv-feutres-black-version text-center">
            <i style="background: #79f9c0" class="fad fa-bell mx-auto"></i>
            <div class="text">
              <h5 class="coodiv-text-7 font-weight-bold mb-0">
                1-click install — over 150 free apps.
              </h5>
              <p class="coodiv-text-11 font-weight-light">
                Get access to over 150 free apps to create CMS sites (WordPress,
                Joomla), forums and blogs through Installatron.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="coodiv-feutres-black-version text-center">
            <i
              style="background: #fede48"
              class="fad fa-binoculars mx-auto"></i>
            <div class="text">
              <h5 class="coodiv-text-7 font-weight-bold mb-0">
                Global data centers.
              </h5>
              <p class="coodiv-text-11 font-weight-light">
                Get faster page loads and better visitor experience with nearby,
                state-of-the-art data centers in North America.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="section-product-introduction-image-wrapper">
        <div class="section-product-introduction-background"></div>
        <img
          src="../assets/img/demo/admin-panel.png"
          alt="statistics"
          title="statistics"
          class="section-product-introduction-image"
          loading="lazy" />
      </div>
    </div>
  </section>

  <section class="pt-20 pb-25 border-top">
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
            <a href="dedicated.html" class="btn btn-dark coodiv-text-11 mt-10"
              >Discover all plans and prices</a
            >
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div
            style="background-color: #fede48"
            class="section_text_graphic_image">
            <img
              src="../assets/img/demo/features/yellow-feature.png"
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
              src="../assets/img/demo/features/red-feature.png"
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
            <a href="wordpress.html" class="btn btn-dark coodiv-text-11 mt-10"
              >See all WooCommerce offers</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-default-2 py-25">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-12 text-center">
          <p style="color: #81a2f8" class="eyebrow content-text-author_eyebrow">
            Super fast development
          </p>
          <h3 class="coodiv-text-4 font-weight-bold">
            Build a chatbot without programming
          </h3>
        </div>
      </div>

      <div class="row justify-content-left mr-tp-80">
        <div class="col-md-4">
          <div class="features-box-style-two">
            <i class="e-flaticon-002-plug"></i>
            <h5>Stay connected all the time</h5>
            <p>
              Whether you are looking for a personal website hosting plan or a
              business website hosting plan,
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="features-box-style-two">
            <i class="e-flaticon-025-router"></i>
            <h5>No noisy neighbors</h5>
            <p>
              Whether you are looking for a personal website hosting plan or a
              business website hosting plan,
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="features-box-style-two">
            <i class="e-flaticon-021-virtual-reality"></i>
            <h5>Powerful infrastructure</h5>
            <p>
              Whether you are looking for a personal website hosting plan or a
              business website hosting plan,
            </p>
          </div>
        </div>
      </div>

      <div class="row justify-content-left mr-tp-30">
        <div class="col-md-4">
          <div class="features-box-style-two">
            <i class="e-flaticon-032-sata"></i>
            <h5>Many OS combinations</h5>
            <p>
              Whether you are looking for a personal website hosting plan or a
              business website hosting plan,
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="features-box-style-two">
            <i class="e-flaticon-037-cable"></i>
            <h5>Root administrator access</h5>
            <p>
              Whether you are looking for a personal website hosting plan or a
              business website hosting plan,
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="features-box-style-two">
            <i class="e-flaticon-045-car-key"></i>
            <h5>No long term contracts</h5>
            <p>
              Whether you are looking for a personal website hosting plan or a
              business website hosting plan,
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="map-server-places-section position-relative">
    <div class="container">
      <div class="map-gene-server-place">
        <img src="../assets/img/maps/map.png" alt="" />
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
          <a href="vps-reseller.html" tabindex="0">Read more</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script></script>

<style></style>
