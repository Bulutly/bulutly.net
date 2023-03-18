<template>
  <section class="py-25 position-relative">
    <div class="container">
      <div class="row justify-content-center text-center">
        <h1 class="coodiv-text-5 font-weight-bold">
          Trust your site to the world’s #1 web host.
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="coodiv-text-10">
            Choose the package that is right for you.
          </p>
        </div>
      </div>

      <div class="row justify-content-center align-items-center mb-15">
        <div id="monthly-yearly-chenge" class="style-two mb-0">
          <a
            @click="activeItems = dataMonthly"
            :class="activeItems == dataMonthly ? 'active' : ''"
            class="monthly-price">
            <span class="change-box-text">billed monthly</span>
            <span class="change-box"></span
          ></a>
          <a
            :class="activeItems == dataAnnually ? 'active' : ''"
            @click="activeItems = dataAnnually"
            class="yearli-price">
            <span class="change-box-text">billed annually</span></a
          >
        </div>
      </div>
      <HostingPriceCard :items="activeItems" />
      <!-- 
      <div
        class="row justify-content-start second-pricing-table-container dedicated-version collage-plans mr-tp-30">
        <div class="col-md-4 col-12 pr-md-0">
          <div class="second-pricing-table">
            <h5 class="second-pricing-table-title">
              Basic plan <span>mostly for personal using</span>
            </h5>
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

            <a class="second-pricing-table-button" href="#">next setup</a>
          </div>
        </div>

        <div class="col-md-4 col-12 px-md-0">
          <div class="second-pricing-table style-2 active mt-n8">
            <h5 class="second-pricing-table-title">
              Relluxe plan <span>mostly for personal using</span>
            </h5>
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
              <li><strong>free</strong> domain</li>
              <li><strong>Unlimited</strong> Database</li>
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

            <a class="second-pricing-table-button" href="#">next setup</a>
          </div>
        </div>

        <div class="col-md-4 col-12 pl-md-0">
          <div class="second-pricing-table">
            <h5 class="second-pricing-table-title">
              Expert plan <span>mostly for personal using</span>
            </h5>
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

            <a class="second-pricing-table-button" href="#">next setup</a>
          </div>
        </div>
      </div> -->
      <div class="row justify-content-start mt-15">
        <div class="col-md-4 col-12 mb-md-0 mb-8 text-center">
          <i class="fal fa-life-ring coodiv-text-5"></i>
          <h5 class="coodiv-text-9 font-weight-bold">
            24/7 dedicated support.
          </h5>
          <p class="coodiv-text-11 font-weight-light">
            Our expert team is here for you ‘round-the-clock to proactively
            monitor your virtual server (vserver). That means everything from
            CPU utilization MySQL.
          </p>
        </div>

        <div class="col-md-4 col-12 mb-md-0 mb-8 text-center">
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

        <div class="col-md-4 col-12 text-center">
          <i class="fal fa-user-crown coodiv-text-5"></i>
          <h5 class="coodiv-text-9 font-weight-bold">
            Unlimited accounts and easy admin.
          </h5>
          <p class="coodiv-text-11 font-weight-light">
            Create unlimited hosting accounts from either cPanel/WHM or Plesk
            Obsidian Webhost Edition control panel — including for managing
            WordPress sites.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const dataMonthly = ref<IPriceCard[]>([
  {
    title: "Basic plan",
    subtitle: "Mostly For Personal Using",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$1.99",
      type: "/mo",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "2 TB",
        value: "of space",
      },
      {
        isUnavailable: false,
        text: "unlimited",
        value: "bandwidth",
      },
      {
        isUnavailable: false,
        text: "full backup",
        value: "systems",
      },
      {
        isUnavailable: false,
        text: "free",
        value: "domain",
      },
      {
        isUnavailable: false,
        text: "Unlimited",
        value: "Database",
      },
      {
        isUnavailable: true,
        text: "",
        value: "Fast SSD Storage",
      },
      {
        isUnavailable: true,
        text: "",
        value: "unlimited database",
      },
    ],
    extraInfo: [
      {
        title: "Dedicated project",
        text: "big companis,we chose to works with it",
      },
      {
        title: "Easy feedback sharing",
        text: "Choose your edition, Try it free for 14 days",
      },
    ],
    ctaBtn: { text: "next setup", variant: "primary" },
  },
  {
    title: "Relluxe plan",
    subtitle: "Mostly For Personal Using",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$6.99",
      type: "/mo",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "2 TB",
        value: "of space",
      },
      {
        isUnavailable: false,
        text: "unlimited",
        value: "bandwidth",
      },
      {
        isUnavailable: false,
        text: "full backup",
        value: "systems",
      },
      {
        isUnavailable: false,
        text: "free",
        value: "domain",
      },
      {
        isUnavailable: false,
        text: "Unlimited",
        value: "Database",
      },
      {
        isUnavailable: false,
        text: "Fast SSD",
        value: "Storage",
      },
      {
        isUnavailable: false,
        text: "unlimited",
        value: "database",
      },
      {
        isUnavailable: false,
        text: "free",
        value: "domain",
      },
      {
        isUnavailable: false,
        text: "Unlimited",
        value: "Databaseiiiiiiiiiiiiiiiiii",
      },
    ],
    extraInfo: [
      {
        title: "Dedicated project",
        text: "big companis,we chose to works with it",
      },
      {
        title: "Easy feedback sharing",
        text: "Choose your edition, Try it free for 14 days",
      },
    ],

    ctaBtn: { text: "next setup", variant: "primary" },
  },
  {
    title: "Expert plan",
    subtitle: "Mostly For Personal Using",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$3.99",
      type: "/mo",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "2 TB ",
        value: "of space",
      },
      {
        isUnavailable: false,
        text: "unlimited",
        value: "bandwidth",
      },
      {
        isUnavailable: false,
        text: "full backup",
        value: "systems",
      },
      {
        isUnavailable: false,
        text: "free",
        value: "domain",
      },
      {
        isUnavailable: false,
        text: "Unlimited",
        value: "Database",
      },
      {
        isUnavailable: false,
        text: "Fast",
        value: "SSD Storage",
      },
      {
        isUnavailable: true,
        text: "",
        value: "unlimited database",
      },
    ],

    extraInfo: [
      {
        title: "Dedicated project",
        text: "big companis,we chose to works with it",
      },

      {
        title: "Easy feedback sharing",
        text: "Choose your edition, Try it free for 14 days",
      },
    ],

    ctaBtn: { text: "next setup", variant: "primary" },
  },
]);
const dataAnnually = ref<IPriceCard[]>([
  {
    title: "Basic plan",
    subtitle: "Mostly For Personal Using",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$9.99",
      type: "/year",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "2 TB",
        value: "of space",
      },
      {
        isUnavailable: false,
        text: "unlimited",
        value: "bandwidth",
      },
      {
        isUnavailable: false,
        text: "full backup ",
        value: "systems",
      },
      {
        isUnavailable: false,
        text: "free",
        value: "domain",
      },
      {
        isUnavailable: false,
        text: "Unlimited",
        value: "Database",
      },
      {
        isUnavailable: true,
        text: "",
        value: "Fast SSD Storage",
      },
      {
        isUnavailable: true,
        text: "",
        value: "unlimited database",
      },
    ],
    extraInfo: [
      {
        title: "Dedicated project",
        text: "big companis,we chose to works with it",
      },
      {
        title: "Easy feedback sharing",
        text: "Choose your edition, Try it free for 14 days",
      },
    ],
    ctaBtn: { text: "next setup", variant: "primary" },
  },
  {
    title: "Relluxe plan",
    subtitle: "Mostly For Personal Using",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$85.99",
      type: "/year",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "2 TB ",
        value: "of space",
      },
      {
        isUnavailable: false,
        text: "unlimited",
        value: "bandwidth",
      },
      {
        isUnavailable: false,
        text: "full backup",
        value: "systems",
      },
      {
        isUnavailable: false,
        text: "free",
        value: "domain",
      },
      {
        isUnavailable: false,
        text: "Unlimited",
        value: "Database",
      },
      {
        isUnavailable: false,
        text: "Fast SSD",
        value: "Storage",
      },
      {
        isUnavailable: false,
        text: "unlimited",
        value: "database",
      },
      {
        isUnavailable: false,
        text: "free",
        value: "domain",
      },
      {
        isUnavailable: false,
        text: "Unlimited",
        value: "Database",
      },
    ],
    extraInfo: [
      {
        title: "Dedicated project",
        text: "big companis,we chose to works with it",
      },
      {
        title: "Easy feedback sharing",
        text: "Choose your edition, Try it free for 14 days",
      },
    ],
    ctaBtn: { text: "next setup", variant: "primary" },
  },
  {
    title: "Expert plan",
    subtitle: "Mostly For Personal Using",
    alertMsg: {
      text: "",
      isSpan: false,
    },
    price: {
      currency: "$42.99",
      type: "/year",
    },
    serviceList: [
      {
        isUnavailable: false,
        text: "2 TB ",
        value: "of space",
      },
      {
        isUnavailable: false,
        text: "unlimited",
        value: "bandwidth",
      },
      {
        isUnavailable: false,
        text: "full backup ",
        value: "systems",
      },
      {
        isUnavailable: false,
        text: "free",
        value: "domain",
      },
      {
        isUnavailable: false,
        text: "Unlimited",
        value: "Database",
      },
      {
        isUnavailable: false,
        text: "Fast",
        value: "SSD Storage",
      },
      {
        isUnavailable: true,
        text: "",
        value: "unlimited database",
      },
    ],
    extraInfo: [
      {
        title: "Dedicated project",
        text: "big companis,we chose to works with it",
      },
      {
        title: "Easy feedback sharing",
        text: "Choose your edition, Try it free for 14 days",
      },
    ],
    ctaBtn: { text: "next setup", variant: "primary" },
  },
]);
const activeItems = ref<IPriceCard[]>(dataMonthly.value);
</script>

<style></style>
