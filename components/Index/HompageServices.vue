<template>
  <section class="pb-25 position-relative">
    <div class="container">
      <ul
        class="nav homepage-services-tab-titles mb-15"
        id="homepageservices"
        role="tablist">
        <li>
          <NuxtLink
            class="active"
            id="hosting-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="hosting"
            aria-selected="true"
            :to="{ name: 'hosting' }"
            >Linux with cPanel Hosting</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            :to="{ name: 'cloud-vps' }"
            id="vps-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="vps"
            aria-selected="false">
            VPS Hosting
          </NuxtLink>
        </li>
        <li>
          <a
            id="emails-tab"
            data-toggle="tab"
            href="#emails"
            role="tab"
            aria-controls="emails"
            aria-selected="false"
            >Professional Email</a
          >
        </li>
      </ul>

      <div class="tab-content" id="homepageservicesContent">
        <div
          class="tab-pane fade show active"
          id="hosting"
          role="tabpanel"
          aria-labelledby="hosting-tab">
          <h5 class="title-default-coodiv-two">
            Trust your client sites to the world’s #1 web host.
            <span
              >Get faster sites — up to nearly 40% average improvement in
              overall server response times.</span
            >
          </h5>

          <div class="row justify-content-center">
            <div id="monthly-yearly-chenge" class="mr-tp-40 style-two">
              <a
                @click="activeItems = dataMonthly"
                class="monthly-price"
                :class="activeItems == dataMonthly ? 'active' : ''">
                <span class="change-box-text">billed monthly</span>
                <span class="change-box"></span
              ></a>
              <a
                class="yearli-price"
                @click="activeItems = dataannually"
                :class="activeItems == dataannually ? 'active' : ''">
                <span class="change-box-text">billed annually</span>
              </a>
            </div>
          </div>
        </div>

        <CloudVpsPriceCards :items="activeItems" />

        <div
          class="tab-pane fade"
          id="vps"
          role="tabpanel"
          aria-labelledby="vps-tab">
          <h5 class="title-default-coodiv-two">
            Effortlessly get the power and flexibility you need.<span
              >Total control with full root access and optional control
              panels.</span
            >
          </h5>

          <div class="table-responsive mt-15">
            <table id="prices">
              <thead id="theadHide">
                <tr class="price-dsc" id="toDisapear">
                  <th class="features banner">
                    <div class="banner-servers-box">
                      <div class="banner-text-left">
                        <h5>our server is<strong>24% faster</strong></h5>
                        <p>with under 60 seconds worldwide Deploy!</p>
                      </div>
                    </div>
                  </th>
                  <th class="checklist left">
                    <p>
                      Shoutcast Server
                      <span class="soft-type">Freemium</span>
                      <span class="price"
                        ><span class="currency currencytags">$</span>1.99</span
                      >
                    </p>

                    <div class="call-to-action">
                      <a>per month</a>
                      <a class="btn-empty" href="#" target="_blank"
                        >Get started</a
                      >
                    </div>
                  </th>
                  <th class="checklist left">
                    <p>
                      Shoutcast Server
                      <span class="soft-type">Business</span>
                      <span class="price"
                        ><span class="currency currencytags">$</span>13</span
                      >
                    </p>

                    <div class="call-to-action">
                      <a>per month</a>
                      <a class="btn-empty" href="#" target="_blank"
                        >Get started</a
                      >
                    </div>
                  </th>
                  <th class="checklist left">
                    <p>
                      Shoutcast Server
                      <span class="soft-type">Enterprise</span>
                      <span class="price"
                        ><span class="currency currencytags">$</span>44</span
                      >
                    </p>

                    <div class="call-to-action">
                      <a>per month</a>
                      <a class="btn-empty" href="#" target="_blank"
                        >Get started</a
                      >
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody id="features-body">
                <tr class="feature">
                  <td class="feature">
                    <span class="name">Compatible With Any Encoder</span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                </tr>

                <tr class="feature">
                  <td class="feature">
                    <span class="name">Unlimited Stations</span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                </tr>
                <tr class="feature">
                  <td class="feature">
                    <span class="name">Live Broadcasting</span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                </tr>
                <tr class="feature">
                  <td class="feature">
                    <span class="name">Unlimited Simultaneous Listeners</span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                </tr>
                <tr class="feature">
                  <td class="feature">
                    <span class="name">MP3&amp;AAC Format Supported </span>
                    <span class="remark">(up to 320kbps)</span>
                  </td>
                  <td>
                    <span>Limited MP3 128kbps</span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                </tr>
                <tr class="feature">
                  <td class="feature">
                    <span class="name">Scalability</span>
                    <span class="remark"
                      >(Support up to 12,000 unique listeners)</span
                    >
                  </td>
                  <td>
                    <span class="no"></span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                  <td>
                    <span>Not applicable</span>
                  </td>
                </tr>
                <tr class="feature">
                  <td class="feature">
                    <span class="name">Shoutcast Automation System</span>
                    <span class="remark">(Planner)</span>
                  </td>
                  <td>
                    <span>Not applicable</span>
                  </td>
                  <td>
                    <span>Not applicable</span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                </tr>
                <tr class="feature">
                  <td class="feature">
                    <span class="name">Support Backup URL</span>
                  </td>
                  <td>
                    <span class="no"></span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                  <td>
                    <span>Not applicable</span>
                  </td>
                </tr>
                <tr class="feature">
                  <td class="feature">
                    <span class="name">SSL Support</span>
                  </td>
                  <td>
                    <span>Personal &amp; Customisable SSL Certificate</span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                  <td>
                    <span class="yes"></span>
                  </td>
                </tr>
                <tr class="feature">
                  <td class="feature">
                    <span class="name">Vanity URL</span>
                  </td>
                  <td>
                    <span>Not applicable</span>
                  </td>
                  <td>
                    <span>Not applicable</span>
                  </td>
                  <td>
                    <span class="no"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="emails"
          role="tabpanel"
          aria-labelledby="emails-tab">
          <h5 class="title-default-coodiv-two">
            Your business will look better than ever.<span
              >Earn your customers' trust with a professional email address that
              matches your business name.</span
            >
          </h5>

          <div class="row justify-content-start mt-15">
            <div class="col-md-4 plan-ssl-special">
              <h5 class="res-titl">
                Individual
                <span>Ideal for getting your business up and running.</span>
              </h5>
              <span class="res-price"
                ><i>$</i>0.00 <small>per user/mo</small></span
              >
              <span class="plan-discount"
                >With an annual term (60% savings)</span
              >
              <span class="res-sub-text"
                >basic encryption <img src="~/assets/img/demo/ssl.png" alt=""
              /></span>

              <div class="body-ress-v2">
                <p><b>FREE</b> Email that matches your domain</p>
                <p>256MB <b> of email storage</b></p>
                <p><b>Mobile-friendly</b> webmail</p>
                <p>
                  <s>Unlimited <b>Premium SSLs</b></s>
                </p>
                <p><s>Share calendars and contacts with your team</s></p>
                <p><s>Works with the email app of your choice</s></p>
                <p><s>Assign tasks to your team members</s></p>
                <p>
                  <s><b>DDOS & spam</b> Protection</s>
                </p>

                <p><a class="ress-install-btn" href="#">Get started</a></p>
              </div>
            </div>

            <div class="col-md-4 plan-ssl-special">
              <h5 class="res-titl">
                Team
                <span
                  >Great for collaboration with everyone on your team..</span
                >
              </h5>
              <span class="res-price"
                ><i>$</i>1.33 <small>per user/mo</small></span
              >
              <span class="plan-discount"
                >With an annual term (60% savings)</span
              >
              <span class="res-sub-text"
                >advanced encryption
                <img src="~/assets/img/demo/ssl.png" alt=""
              /></span>

              <div class="body-ress-v2">
                <p><b>FREE</b> Email that matches your domain</p>
                <p>5GB <b> of email storage</b></p>
                <p><b>Mobile-friendly</b> webmail</p>
                <p>Unlimited <b>Premium SSLs</b></p>
                <p>Share calendars and contacts with your team</p>
                <p><s>Works with the email app of your choice</s></p>
                <p><s>Assign tasks to your team members</s></p>
                <p>
                  <s><b>DDOS & spam</b> Protection</s>
                </p>

                <p><a class="ress-buy-btn" href="#">buy</a></p>
              </div>
            </div>

            <div class="col-md-4 plan-ssl-special">
              <h5 class="res-titl">
                Individual
                <span>Ideal for getting your business up and running.</span>
              </h5>
              <span class="res-price"
                ><i>$</i>4.99 <small>per user/mo</small></span
              >
              <span class="plan-discount"
                >With an annual term (60% savings)</span
              >
              <span class="res-sub-text"
                >best encryption <img src="~/assets/img/demo/ssls.png" alt=""
              /></span>

              <div class="body-ress-v2">
                <p><b>FREE</b> Email that matches your domain</p>
                <p>UNLIMITED <b> email storage</b></p>
                <p><b>Mobile-friendly</b> webmail</p>
                <p>Unlimited <b>Premium SSLs</b></p>
                <p>Share calendars and contacts with your team</p>
                <p>Works with the email app of your choice</p>
                <p>Assign tasks to your team members</p>
                <p><b>DDOS & spam</b> Protection</p>

                <p><a class="ress-buy-btn" href="#">buy</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end container -->
  </section>
</template>

<script setup lang="ts">
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
const dataannually = ref<IPriceCard[]>([
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
