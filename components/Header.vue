<template>
  <div
    id="coodiv-header"
    class="d-flex mx-auto flex-column moon-edition"
    :class="$global.headerClass">
    <slot name="span" />
    <!-- Fixed navbar -->
    <nav
      id="coodiv-navbar-header"
      class="navbar navbar-expand-md fixed-header-layout">
      <div class="container main-header-coodiv-s">
        <NuxtLink class="navbar-brand" :to="{ name: 'index' }">
          <img class="w-logo" src="img/header/logo.png" alt="bulutly logo" />
          <img class="b-logo" src="img/header/logo.png" alt="bulutly logo" />
        </NuxtLink>
        <button
          class="navbar-toggle offcanvas-toggle menu-btn-span-bar ml-auto"
          @click="showCollaps = !showCollaps"
          data-bs-toggle="offcanvas"
          data-bs-target="#staticBackdrop">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          class="collapse navbar-collapse navbar-offcanvas offcanvas offcanvas-start"
          id="offcanvas-menu-home">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mega-menu demos-dropdown dropdown active">
              <a
                class="nav-link"
                href="#"
                role="button"
                id="header-first-drop-down"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Homepage</a
              >
              <div
                class="dropdown-menu coodiv-menu-dropdown"
                aria-labelledby="header-first-drop-down">
                <div class="dropdown-menu-wrapper">
                  <div class="row justify-content-start">
                    <div class="demos-wrapper col-md-6 col-12 py-7 px-8">
                      <h5 class="title">
                        Check pre-made Bredh 2.0 homepages
                        <small
                          >sales support, suggest and recommend products in a
                          chat conversation.</small
                        >
                      </h5>
                      <div class="row justify-content-start">
                        <div class="col-md-6 col-12">
                          <NuxtLink class="demos-box" :to="{ name: 'index' }">
                            <img src="img/demo/demos/sefar.jpg" alt="" />
                            <div class="text">
                              <h5
                                class="coodiv-text-8 d-flex justify-content-center align-items-center mb-0">
                                Sefar <span class="new-tag">NEW</span>
                              </h5>
                              <p class="coodiv-text-12 mb-0">
                                Modern, pixel-perfect and perfect solution for
                                WebHosting, reseller hosting and domains
                                provider.
                              </p>
                            </div>
                          </NuxtLink>
                        </div>

                        <div class="col-md-6 col-12">
                          <NuxtLink class="demos-box" :to="{ name: 'index' }">
                            <img src="img/demo/demos/hoggar.jpg" alt="" />
                            <div class="text">
                              <h5
                                class="coodiv-text-8 d-flex justify-content-center align-items-center mb-0">
                                Hoggar <span class="soon-tag">SOON</span>
                              </h5>
                              <p class="coodiv-text-12 mb-0">
                                For for all web hosting, business, multi
                                purpose, domain sale websites.
                              </p>
                            </div>
                          </NuxtLink>
                        </div>

                        <div class="col-md-6 col-12">
                          <NuxtLink class="demos-box" :to="{ name: 'index' }">
                            <img src="img/demo/demos/atlas.jpg" alt="" />
                            <div class="text">
                              <h5
                                class="coodiv-text-8 d-flex justify-content-center align-items-center mb-0">
                                Atlas <span class="soon-tag">SOON</span>
                              </h5>
                              <p class="coodiv-text-12 mb-0">
                                For online business,vpn & proxy services, vps
                                providers, personal blogs and similar sites.
                              </p>
                            </div>
                          </NuxtLink>
                        </div>

                        <div class="col-md-6 col-12">
                          <NuxtLink class="demos-box" :to="{ name: 'index' }">
                            <img src="img/demo/demos/chrea.jpg" alt="" />
                            <div class="text">
                              <h5
                                class="coodiv-text-8 d-flex justify-content-center align-items-center mb-0">
                                Chrea <span class="soon-tag">SOON</span>
                              </h5>
                              <p class="coodiv-text-12 mb-0">
                                to all current technology and web regulations to
                                ensure that your web content looks equally
                                stunning
                              </p>
                            </div>
                          </NuxtLink>
                        </div>
                      </div>
                    </div>

                    <div
                      class="demos-wrapper border-right-0 col-md-6 col-12 py-7 px-8">
                      <h5 class="title mb-2">
                        Features sub-pages<small
                          >Using bredh elements you can build any page you
                          want.</small
                        >
                      </h5>
                      <div class="row justify-content-start mt-10">
                        <div class="col-md-6 col-12">
                          <ul class="domo-pages-wrapper">
                            <li v-for="link in homePageLinks">
                              <NuxtLink :to="link.link">
                                {{ link.title }}
                              </NuxtLink>
                              <span
                                v-if="link.isHot"
                                class="badge badge-pill badge-warning"
                                >HOT!</span
                              >
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-6 col-12">
                          <ul class="domo-pages-wrapper">
                            <li v-for="link in secondHomePageLinks">
                              <NuxtLink :to="link.link">
                                {{ link.title }}
                              </NuxtLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item megamenu dropdown">
              <a
                class="nav-link"
                href="#"
                role="button"
                id="services-megamenu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Services</a
              >
              <div
                class="dropdown-menu coodiv-menu-dropdown"
                aria-labelledby="services-megamenu">
                <div class="dropdown-menu-wrapper">
                  <div
                    class="row justify-content-center bd-highlight mb-3 megamenu-items-header">
                    <div class="col-md col-12 bd-highlight">
                      <NuxtLink
                        class="megamenu-services-box"
                        :to="{ name: 'cloud-vps' }">
                        <i
                          style="background-color: #ff2934"
                          class="fad fa-server"></i>
                        <h5 class="coodiv-text-9 mb-0">Managed VPS</h5>
                        <p class="coodiv-text-12">
                          Get 100% worry-free, Fully Managed VPS Hosting with
                          NVMe SSD-powered KVM VPS – high performance hosting.
                        </p>
                      </NuxtLink>
                    </div>

                    <div class="col-md col-12 bd-highlight">
                      <NuxtLink
                        class="megamenu-services-box"
                        :to="{ name: 'dedicated' }">
                        <i
                          style="background-color: #fede48"
                          class="fad fa-hdd"></i>
                        <h5 class="coodiv-text-9 mb-0">Dedicated Webhosting</h5>
                        <p class="coodiv-text-12">
                          Trust your site to the world’s #1 web host with 2 TB
                          of space, unlimited bandwidth and free domain.
                        </p>
                      </NuxtLink>
                    </div>

                    <div class="col-md col-12 bd-highlight">
                      <NuxtLink
                        class="megamenu-services-box"
                        :to="{ name: 'games' }">
                        <i class="fad fa-gamepad"></i>
                        <h5 class="coodiv-text-9 mb-0">Games Servers</h5>
                        <p class="coodiv-text-12">
                          No contract - no minimum terms and Immediate access
                          thanks to our system. Instantly online.
                        </p>
                      </NuxtLink>
                    </div>

                    <div class="col-md col-12 bd-highlight">
                      <NuxtLink
                        class="megamenu-services-box"
                        :to="{ name: 'servers' }">
                        <i
                          style="background-color: #a2fbf3"
                          class="fad fa-microchip"></i>
                        <h5 class="coodiv-text-9 mb-0">Managed Servers</h5>
                        <p class="coodiv-text-12">
                          Get powerful fully Managed single tentant, bare metal
                          servers to run mission-critical apps.
                        </p>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item">
              <NuxtLink class="nav-link" :to="{ name: 'status' }">
                Server Status
              </NuxtLink>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link"
                role="button"
                id="webhosting-megamenu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="#"
                >Hosting <span class="nav-new-tag">New</span></a
              >
              <div
                class="dropdown-menu coodiv-menu-dropdown coodiv-dropdown-header web-menu"
                aria-labelledby="webhosting-megamenu">
                <div class="dropdown-menu-wrapper min-padding">
                  <ul class="web-hosting-menu-header">
                    <li>
                      <i class="fad fa-hdd"></i>

                      <NuxtLink :to="{ name: 'cloud-vps' }">
                        Managed VPS Hosting
                        <span
                          >cPanel/WHM, Plesk Obsidian for easy WordPress
                          admin.</span
                        >
                      </NuxtLink>
                    </li>
                    <li>
                      <i class="fad fa-download"></i>

                      <NuxtLink :to="{ name: 'dedicated' }">
                        Dedicated Hosting
                        <span
                          >Trust your site to the world’s #1 web host, starting
                          at $0.99.</span
                        >
                      </NuxtLink>
                    </li>
                    <li>
                      <i class="fad fa-microphone"></i>

                      <NuxtLink :to="{ name: 'icecast' }">
                        Icecast & SHOUTcast
                        <span
                          >Broadcast worry-free with unlimited internet radio
                          hosting.</span
                        >
                      </NuxtLink>
                    </li>
                    <li>
                      <i class="fad fa-microchip"></i>

                      <NuxtLink :to="{ name: 'servers' }">
                        Managed Servers
                        <span
                          >Get powerful, bare metal servers to run
                          mission-critical apps.</span
                        >
                      </NuxtLink>
                    </li>
                    <li>
                      <i class="fad fa-lock"></i>

                      <NuxtLink :to="{ name: 'ssl' }">
                        SSL Certificates
                        <span
                          >domain SSL certificates only secure a single unique
                          domain or subdomain.</span
                        >
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                role="button"
                id="header-help-drop-down"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Help<span class="sr-only">(current)</span></a
              >
              <ul
                class="dropdown-menu coodiv-menu-dropdown coodiv-dropdown-header"
                aria-labelledby="header-help-drop-down">
                <div class="dropdown-menu-wrapper min-padding">
                  <li v-for="link in helpLinks">
                    <NuxtLink class="dropdown-item" :to="link.link">
                      {{ link.title }}
                    </NuxtLink>
                  </li>
                </div>
              </ul>
            </li>

            <li class="nav-item two-collomn-drop-down dropdown">
              <a
                class="nav-link"
                href="#"
                role="button"
                id="header-pages-drop-down"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Pages<span class="sr-only">(current)</span></a
              >
              <div
                class="dropdown-menu coodiv-menu-dropdown coodiv-dropdown-header web-menu"
                aria-labelledby="header-pages-drop-down">
                <div
                  class="dropdown-menu-wrapper min-padding row justify-content-center pages-links">
                  <h5 class="title coodiv-text-9 col-12 mt-2 mb-5">
                    Bredh 2.0 features sub-pages
                    <small class="d-block coodiv-text-12 color-opacity-5 mt-n2"
                      >Build your project in minutes with the help of countless
                      amazing features and elements of Bredh.</small
                    >
                  </h5>
                  <ul class="col-md-4 col-12">
                    <li v-for="link in pagesLinks">
                      <NuxtLink class="dropdown-item" :to="link.link">
                        {{ link.title }}
                      </NuxtLink>
                    </li>
                  </ul>
                  <ul class="col-md-4 col-12">
                    <li v-for="link in secondPagesLinks">
                      <NuxtLink class="dropdown-item" :to="link.link">
                        {{ link.title }}
                      </NuxtLink>
                    </li>
                  </ul>
                  <ul class="col-md-4 col-12">
                    <li>
                      <NuxtLink
                        class="dropdown-item"
                        :to="{ name: 'help-center' }">
                        help center
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                        class="dropdown-item"
                        :to="{ name: 'knowledgebase' }">
                        knowledgebase
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="dropdown-item" :to="{ name: 'privacy' }">
                        Privacy
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="dropdown-item" :to="{ name: 'status' }">
                        Server Status
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                        class="dropdown-item"
                        :to="{ name: 'contact-us' }">
                        Contact us
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                        class="dropdown-item"
                        :to="{ name: 'authentication-sign-in' }">
                        Signin
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                        class="dropdown-item"
                        :to="{ name: 'authentication-sign-up' }">
                        Signup
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="dropdown-item" :to="{ name: '404' }">
                        404 Page
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="nav-item">
              <NuxtLink class="nav-link" :to="{ name: 'contact-us' }">
                Contact us
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div
          v-if="showCollaps"
          :style="showCollaps ? 'left:0' : 'left:-250px'"
          class="collapse navbar-collapse navbar-offcanvas offcanvas offcanvas-start"
          id="offcanvas-menu-home">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mega-menu demos-dropdown dropdown active">
              <button @click="hideSidebar" class="hideBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16">
                  <path
                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </button>
            </li>

            <li class="nav-item mega-menu demos-dropdown dropdown active">
              <a
                class="nav-link"
                href="#"
                role="button"
                id="header-first-drop-down"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Homepage</a
              >
              <div
                class="dropdown-menu coodiv-menu-dropdown"
                aria-labelledby="header-first-drop-down">
                <div class="dropdown-menu-wrapper">
                  <div class="row justify-content-start">
                    <div class="demos-wrapper col-md-6 col-12 py-7 px-8">
                      <h5 class="title">
                        Check pre-made Bredh 2.0 homepages
                        <small
                          >sales support, suggest and recommend products in a
                          chat conversation.</small
                        >
                      </h5>
                      <div class="row justify-content-start">
                        <div class="col-md-6 col-12">
                          <NuxtLink class="demos-box" :to="{ name: 'index' }">
                            <img src="img/demo/demos/sefar.jpg" alt="" />
                            <div class="text">
                              <h5
                                class="coodiv-text-8 d-flex justify-content-center align-items-center mb-0">
                                Sefar <span class="new-tag">NEW</span>
                              </h5>
                              <p class="coodiv-text-12 mb-0">
                                Modern, pixel-perfect and perfect solution for
                                WebHosting, reseller hosting and domains
                                provider.
                              </p>
                            </div>
                          </NuxtLink>
                        </div>

                        <div class="col-md-6 col-12">
                          <NuxtLink class="demos-box" :to="{ name: 'index' }">
                            <img src="img/demo/demos/hoggar.jpg" alt="" />
                            <div class="text">
                              <h5
                                class="coodiv-text-8 d-flex justify-content-center align-items-center mb-0">
                                Hoggar <span class="soon-tag">SOON</span>
                              </h5>
                              <p class="coodiv-text-12 mb-0">
                                For for all web hosting, business, multi
                                purpose, domain sale websites.
                              </p>
                            </div>
                          </NuxtLink>
                        </div>

                        <div class="col-md-6 col-12">
                          <NuxtLink class="demos-box" :to="{ name: 'index' }">
                            <img src="img/demo/demos/atlas.jpg" alt="" />
                            <div class="text">
                              <h5
                                class="coodiv-text-8 d-flex justify-content-center align-items-center mb-0">
                                Atlas <span class="soon-tag">SOON</span>
                              </h5>
                              <p class="coodiv-text-12 mb-0">
                                For online business,vpn & proxy services, vps
                                providers, personal blogs and similar sites.
                              </p>
                            </div>
                          </NuxtLink>
                        </div>

                        <div class="col-md-6 col-12">
                          <NuxtLink class="demos-box" :to="{ name: 'index' }">
                            <img src="img/demo/demos/chrea.jpg" alt="" />
                            <div class="text">
                              <h5
                                class="coodiv-text-8 d-flex justify-content-center align-items-center mb-0">
                                Chrea <span class="soon-tag">SOON</span>
                              </h5>
                              <p class="coodiv-text-12 mb-0">
                                to all current technology and web regulations to
                                ensure that your web content looks equally
                                stunning
                              </p>
                            </div>
                          </NuxtLink>
                        </div>
                      </div>
                    </div>

                    <div
                      class="demos-wrapper border-right-0 col-md-6 col-12 py-7 px-8">
                      <h5 class="title mb-2">
                        Features sub-pages<small
                          >Using bredh elements you can build any page you
                          want.</small
                        >
                      </h5>
                      <div class="row justify-content-start mt-10">
                        <div class="col-md-6 col-12">
                          <ul class="domo-pages-wrapper">
                            <li v-for="link in homePageLinks">
                              <NuxtLink :to="link.link">
                                {{ link.title }}
                              </NuxtLink>
                              <span
                                v-if="link.isHot"
                                class="badge badge-pill badge-warning"
                                >HOT!</span
                              >
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-6 col-12">
                          <ul class="domo-pages-wrapper">
                            <li v-for="link in secondHomePageLinks">
                              <NuxtLink :to="link.link">
                                {{ link.title }}
                              </NuxtLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item megamenu dropdown">
              <a
                class="nav-link"
                href="#"
                role="button"
                id="services-megamenu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Services</a
              >
              <div
                class="dropdown-menu coodiv-menu-dropdown"
                aria-labelledby="services-megamenu">
                <div class="dropdown-menu-wrapper">
                  <div
                    class="row justify-content-center bd-highlight mb-3 megamenu-items-header">
                    <div class="col-md col-12 bd-highlight">
                      <NuxtLink
                        class="megamenu-services-box"
                        :to="{ name: 'cloud-vps' }">
                        <i
                          style="background-color: #ff2934"
                          class="fad fa-server"></i>
                        <h5 class="coodiv-text-9 mb-0">Managed VPS</h5>
                        <p class="coodiv-text-12">
                          Get 100% worry-free, Fully Managed VPS Hosting with
                          NVMe SSD-powered KVM VPS – high performance hosting.
                        </p>
                      </NuxtLink>
                    </div>

                    <div class="col-md col-12 bd-highlight">
                      <NuxtLink
                        class="megamenu-services-box"
                        :to="{ name: 'dedicated' }">
                        <i
                          style="background-color: #fede48"
                          class="fad fa-hdd"></i>
                        <h5 class="coodiv-text-9 mb-0">Dedicated Webhosting</h5>
                        <p class="coodiv-text-12">
                          Trust your site to the world’s #1 web host with 2 TB
                          of space, unlimited bandwidth and free domain.
                        </p>
                      </NuxtLink>
                    </div>

                    <div class="col-md col-12 bd-highlight">
                      <NuxtLink
                        class="megamenu-services-box"
                        :to="{ name: 'games' }">
                        <i class="fad fa-gamepad"></i>
                        <h5 class="coodiv-text-9 mb-0">Games Servers</h5>
                        <p class="coodiv-text-12">
                          No contract - no minimum terms and Immediate access
                          thanks to our system. Instantly online.
                        </p>
                      </NuxtLink>
                    </div>

                    <div class="col-md col-12 bd-highlight">
                      <NuxtLink
                        class="megamenu-services-box"
                        :to="{ name: 'servers' }">
                        <i
                          style="background-color: #a2fbf3"
                          class="fad fa-microchip"></i>
                        <h5 class="coodiv-text-9 mb-0">Managed Servers</h5>
                        <p class="coodiv-text-12">
                          Get powerful fully Managed single tentant, bare metal
                          servers to run mission-critical apps.
                        </p>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item">
              <NuxtLink class="nav-link" :to="{ name: 'status' }">
                Server Status
              </NuxtLink>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link"
                role="button"
                id="webhosting-megamenu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="#"
                >Hosting <span class="nav-new-tag">New</span></a
              >
              <div
                class="dropdown-menu coodiv-menu-dropdown coodiv-dropdown-header web-menu"
                aria-labelledby="webhosting-megamenu">
                <div class="dropdown-menu-wrapper min-padding">
                  <ul class="web-hosting-menu-header">
                    <li>
                      <i class="fad fa-hdd"></i>

                      <NuxtLink :to="{ name: 'cloud-vps' }">
                        Managed VPS Hosting
                        <span
                          >cPanel/WHM, Plesk Obsidian for easy WordPress
                          admin.</span
                        >
                      </NuxtLink>
                    </li>
                    <li>
                      <i class="fad fa-download"></i>

                      <NuxtLink :to="{ name: 'dedicated' }">
                        Dedicated Hosting
                        <span
                          >Trust your site to the world’s #1 web host, starting
                          at $0.99.</span
                        >
                      </NuxtLink>
                    </li>
                    <li>
                      <i class="fad fa-microphone"></i>

                      <NuxtLink :to="{ name: 'icecast' }">
                        Icecast & SHOUTcast
                        <span
                          >Broadcast worry-free with unlimited internet radio
                          hosting.</span
                        >
                      </NuxtLink>
                    </li>
                    <li>
                      <i class="fad fa-microchip"></i>

                      <NuxtLink :to="{ name: 'servers' }">
                        Managed Servers
                        <span
                          >Get powerful, bare metal servers to run
                          mission-critical apps.</span
                        >
                      </NuxtLink>
                    </li>
                    <li>
                      <i class="fad fa-lock"></i>

                      <NuxtLink :to="{ name: 'ssl' }">
                        SSL Certificates
                        <span
                          >domain SSL certificates only secure a single unique
                          domain or subdomain.</span
                        >
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                role="button"
                id="header-help-drop-down"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Help<span class="sr-only">(current)</span></a
              >
              <ul
                class="dropdown-menu coodiv-menu-dropdown coodiv-dropdown-header"
                aria-labelledby="header-help-drop-down">
                <div class="dropdown-menu-wrapper min-padding">
                  <li v-for="link in helpLinks">
                    <NuxtLink class="dropdown-item" :to="link.link">
                      {{ link.title }}
                    </NuxtLink>
                  </li>
                </div>
              </ul>
            </li>

            <li class="nav-item two-collomn-drop-down dropdown">
              <a
                class="nav-link"
                href="#"
                role="button"
                id="header-pages-drop-down"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Pages<span class="sr-only">(current)</span></a
              >
              <div
                class="dropdown-menu coodiv-menu-dropdown coodiv-dropdown-header web-menu"
                aria-labelledby="header-pages-drop-down">
                <div
                  class="dropdown-menu-wrapper min-padding row justify-content-center pages-links">
                  <h5 class="title coodiv-text-9 col-12 mt-2 mb-5">
                    Bredh 2.0 features sub-pages
                    <small class="d-block coodiv-text-12 color-opacity-5 mt-n2"
                      >Build your project in minutes with the help of countless
                      amazing features and elements of Bredh.</small
                    >
                  </h5>
                  <ul class="col-md-4 col-12">
                    <li v-for="link in pagesLinks">
                      <NuxtLink class="dropdown-item" :to="link.link">
                        {{ link.title }}
                      </NuxtLink>
                    </li>
                  </ul>
                  <ul class="col-md-4 col-12">
                    <li v-for="link in secondPagesLinks">
                      <NuxtLink class="dropdown-item" :to="link.link">
                        {{ link.title }}
                      </NuxtLink>
                    </li>
                  </ul>
                  <ul class="col-md-4 col-12">
                    <li>
                      <NuxtLink
                        class="dropdown-item"
                        :to="{ name: 'help-center' }">
                        help center
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                        class="dropdown-item"
                        :to="{ name: 'knowledgebase' }">
                        knowledgebase
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="dropdown-item" :to="{ name: 'privacy' }">
                        Privacy
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="dropdown-item" :to="{ name: 'status' }">
                        Server Status
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                        class="dropdown-item"
                        :to="{ name: 'contact-us' }">
                        Contact us
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                        class="dropdown-item"
                        :to="{ name: 'authentication-sign-in' }">
                        Signin
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                        class="dropdown-item"
                        :to="{ name: 'authentication-sign-up' }">
                        Signup
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="dropdown-item" :to="{ name: '404' }">
                        404 Page
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="nav-item">
              <NuxtLink class="nav-link" :to="{ name: 'contact-us' }">
                Contact us
              </NuxtLink>
            </li>
          </ul>
        </div>
        <ul class="header-user-info-coodiv">
          <li class="dropdown">
            <a
              role="button"
              id="header-login-dropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              href="#"
              >sign in</a
            >
            <!-- user header dropdown -->
            <div
              class="dropdown-menu coodiv-dropdown-header user-login-dropdown"
              aria-labelledby="header-login-dropdown">
              <form
                class="user-login-dropdown-form"
                action="signin.html"
                data-form="validate">
                <div class="form-group username">
                  <input
                    type="email"
                    name="username"
                    placeholder="Your Email"
                    class="form-control" />
                  <i class="fal fa-at"></i>
                </div>

                <div class="form-group password">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    class="form-control" />
                  <i class="fal fa-lock"></i>
                </div>

                <button
                  data-toggle="tooltip"
                  data-placement="left"
                  title="login"
                  class="user-login-dropdown-form-button"
                  type="submit">
                  <i class="fas fa-angle-right"></i>
                </button>
              </form>
            </div>
            <!-- end user header dropdown -->
          </li>
        </ul>
      </div>
    </nav>

    <slot name="main" />

    <slot name="more-services" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
let showCollaps = ref(false);
const hideSidebar = () => {
  showCollaps.value = false;
  console.log("close");
};
const { $global } = useAppConfig();
const homePageLinks = ref([
  { title: "Managed VPS hosting", link: "/cloud-vps", isHot: true },
  { title: "Cpanel hosting", link: "/cpanel", isHot: false },
  { title: "Dedicated Webhosting", link: "/dedicated", isHot: false },
  { title: "Domain Name Search", link: "/domains", isHot: false },
  { title: "Game Server Hosting", link: "/games", isHot: false },
  { title: "Webhosting Servers", link: "/hosting", isHot: false },
  { title: "Internet Radio Station", link: "/icecast", isHot: false },
  { title: "Fully Managed Dedicated", link: "/servers", isHot: true },
  { title: " managed prodcast server", link: "/shoutcast", isHot: false },
  { title: "SSL Certificates", link: "/ssl", isHot: false },
  { title: "Start your own server", link: "/vps-reseller", isHot: false },
  { title: "WordPress Hosting Solution", link: "/wordpress", isHot: true },
]);
const secondHomePageLinks = ref([
  { title: "404", link: "/404" },
  { title: "bredh customers help center", link: "/help-center" },
  { title: "about us", link: "/about-us" },
  { title: "contact us", link: "/contact-us" },
  { title: "help center", link: "/help-center" },
  { title: "knowledgebase", link: "/knowledgebase" },
  { title: "Privacy", link: "/privacy" },
  { title: "services status", link: "/status" },
  { title: "signin", link: "/authentication/sign-in" },
  { title: "signup", link: "/authentication/sign-up" },
]);
const helpLinks = ref([
  { title: "help center", link: "/help-center" },
  { title: "knowledgebase", link: "/knowledgebase" },
  { title: "privacy", link: "/privacy" },
]);
const pagesLinks = ref([
  { title: "about us", link: "/about-us" },
  { title: "Managed VPS hosting", link: "/cloud-vps" },
  { title: "Cpanel hosting", link: "/cpanel" },
  { title: "Dedicated Servers", link: "/dedicated" },
  { title: "Domain name search", link: "/domains" },
  { title: "Game Server Hosting", link: "/games" },
]);
const secondPagesLinks = ref([
  { title: "Shared Hosting", link: "/hosting" },
  { title: "Icecast Hosting", link: "/icecast" },
  { title: "Managed Dedicated Server", link: "/servers" },
  { title: "Shotcast Hosting", link: "/shoutcast" },
  { title: "SSL Certificates", link: "/ssl" },
  { title: "Self-Managed VPS", link: "/vps-reseller" },
  { title: "WordPress Hosting", link: "/wordpress" },
  { title: "SSL Certificates", link: "/ssl" },
  { title: "Self-Managed VPS", link: "/vps-reseller" },
  { title: "WordPress Hosting", link: "/wordpress" },
]);
</script>

<style></style>
