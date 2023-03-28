<template>
  <div>
    <div class="main-wrapper">
      <header class="main-header w-100">
        <nav class="navbar navbar-expand-xl navbar-light sticky-header">
          <div
            class="container d-flex align-items-center justify-content-lg-between position-relative">
            <nuxt-link
              :to="{ name: 'index' }"
              class="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none"
              ><img
                src="~/assets/img/trader4-H.svg"
                alt="Trader4"
                class="img-fluid logo-white" />
              <img
                src="~/assets/img/trader4-H.svg"
                width="150px"
                height="20px"
                alt="Trader4"
                class="img-fluid logo-color"
            /></nuxt-link>
            <a
              class="navbar-toggler position-absolute right-0 border-0"
              href="#offcanvasWithBackdrop"
              role="button">
              <span
                class="far fa-bars"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBackdrop"
                aria-controls="offcanvasWithBackdrop"></span>
            </a>
            <div class="clearfix"></div>
            <div class="collapse navbar-collapse justify-content-center">
              <ul
                class="nav col-12 col-md-auto justify-content-center main-menu">
                <li>
                  <nuxt-link :to="{ name: 'index' }" class="nav-link"
                    >Home</nuxt-link
                  >
                </li>
                <li class="nav-item dropdown">
                  <nuxt-link
                    :to="{ name: 'products' }"
                    class="nav-link dropdown-toggle"
                    >Products & Services</nuxt-link
                  >
                  <div
                    class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                    <div class="dropdown-grid rounded-custom width-full">
                      <div class="dropdown-grid-item">
                        <h6 class="drop-heading">Hack The Market</h6>

                        <nuxt-link
                          :to="{ name: 'products-supply-demand' }"
                          class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                            >SD</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Supply Demand</div>
                            <p>Every Move on Market</p>
                          </div>
                        </nuxt-link>

                        <nuxt-link
                          :to="{ name: 'products-algo-portfolio' }"
                          class="dropdown-link"
                          ><span
                            class="demo-list bg-dark rounded text-white fw-bold"
                            >AP</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Algo Portfolio</div>
                            <p>Forex Portfolio via SQX</p>
                          </div>
                        </nuxt-link>

                        <nuxt-link
                          :to="{ name: 'under-construction' }"
                          class="dropdown-link">
                          <span
                            class="demo-list bg-success rounded text-white fw-bold"
                            >TF</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Trend Friend</div>
                            <p>Follow the Market</p>
                          </div>
                        </nuxt-link>

                        <nuxt-link
                          :to="{ name: 'under-construction' }"
                          class="dropdown-link">
                          <span
                            class="demo-list bg-danger rounded text-white fw-bold"
                            >DX</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Dashboard X</div>
                            <p>Professional way for Professionals</p>
                          </div>
                        </nuxt-link>

                        <nuxt-link
                          :to="{ name: 'under-construction' }"
                          class="dropdown-link">
                          <span
                            class="demo-list bg-info rounded text-white fw-bold"
                            >BZ</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Bazaar</div>
                            <p>Follow Professionals</p>
                          </div>
                        </nuxt-link>

                        <nuxt-link
                          :to="{ name: 'under-construction' }"
                          class="dropdown-link">
                          <span
                            class="demo-list bg-warning rounded text-white fw-bold"
                            >TL</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Trend Line</div>
                            <p>Simplest Way to Trading</p>
                          </div>
                        </nuxt-link>

                        <nuxt-link
                          :to="{ name: 'under-construction' }"
                          class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                            >BT</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Bulut</div>
                            <p>Cloud Infrastructure</p>
                          </div>
                        </nuxt-link>
                      </div>
                      <div
                        class="dropdown-grid-item radius-right-side bg-light">
                        <h6 class="drop-heading">Let`s Work Together</h6>

                        <nuxt-link
                          :to="{ name: 'under-construction' }"
                          class="dropdown-link">
                          <span
                            class="demo-list bg-primary rounded text-white fw-bold"
                            >TC</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Trading Coaching</div>
                            <p>A Coach, Master in Trading</p>
                          </div>
                        </nuxt-link>

                        <nuxt-link
                          :to="{ name: 'under-construction' }"
                          class="dropdown-link">
                          <span
                            class="demo-list bg-dark rounded text-white fw-bold"
                            >AC</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Algo Trading Coach</div>
                            <p>A Master Coach in Algo Trading</p>
                          </div>
                        </nuxt-link>

                        <nuxt-link
                          :to="{ name: 'under-construction' }"
                          class="dropdown-link">
                          <span
                            class="demo-list bg-warning rounded text-white fw-bold"
                            >TM</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Trading Mastermind</div>
                            <p>Boost your mental powers</p>
                          </div>
                        </nuxt-link>

                        <nuxt-link
                          :to="{ name: 'under-construction' }"
                          class="dropdown-link">
                          <span
                            class="demo-list bg-secondary rounded text-white fw-bold"
                            >AC</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Account Recovery</div>
                            <p>Survive your trading accounts</p>
                          </div>
                        </nuxt-link>

                        <nuxt-link
                          :to="{ name: 'under-construction' }"
                          class="dropdown-link">
                          <span
                            class="demo-list bg-info rounded text-white fw-bold"
                            >TR</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Trade Road</div>
                            <p>We are hiring a trader</p>
                          </div>
                        </nuxt-link>

                        <nuxt-link
                          :to="{ name: 'under-construction' }"
                          class="dropdown-link">
                          <span
                            class="demo-list bg-danger rounded text-white fw-bold"
                            >WP</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">Warren Program</div>
                            <p>Be Wealthy Every Year</p>
                          </div></nuxt-link
                        >

                        <nuxt-link
                          :to="{ name: 'under-construction' }"
                          class="dropdown-link">
                          <span
                            class="demo-list bg-success rounded text-white fw-bold"
                            >MM</span
                          >
                          <div class="dropdown-info">
                            <div class="drop-title">
                              Millionaire of the Month
                            </div>
                            <p>Be A Millionaire in One Month</p>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <nuxt-link
                    :to="{ name: 'under-construction' }"
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Resources
                  </nuxt-link>
                  <div
                    class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                    <div class="dropdown-grid rounded-custom width-full">
                      <div class="dropdown-grid-item">
                        <h6 class="drop-heading">T4 Academy</h6>

                        <nuxt-link
                          to="https://blog.trader4.net/category/trading-strategies/"
                          target="_blank"
                          class="dropdown-link px-0">
                          <span class="me-2"><i class="far fa-lamp"></i></span>
                          <div class="drop-title">Trading Strategies</div>
                        </nuxt-link>

                        <nuxt-link
                          to="https://blog.trader4.net/category/trading-systems/"
                          target="_blank"
                          class="dropdown-link px-0">
                          <span class="me-2"
                            ><i class="far fa-microchip"></i
                          ></span>
                          <div class="drop-title">Trading Systems</div>
                        </nuxt-link>

                        <nuxt-link
                          to="https://blog.trader4.net/category/risk-management/"
                          target="_blank"
                          class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-money-check-dollar"></i
                          ></span>
                          <div class="drop-title">Risk Management</div>
                        </nuxt-link>

                        <nuxt-link
                          to="https://blog.trader4.net/category/money-management/"
                          target="_blank"
                          class="dropdown-link px-0">
                          <span class="me-2"
                            ><i class="far fa-dollar-sign"></i
                          ></span>
                          <div class="drop-title">Money Management</div>
                        </nuxt-link>

                        <nuxt-link
                          to="https://blog.trader4.net/category/trading-plans/"
                          target="_blank"
                          class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-rocket-launch"></i
                          ></span>
                          <div class="drop-title">Trading Plans</div>
                        </nuxt-link>
                      </div>
                      <div
                        class="dropdown-grid-item radius-right-side bg-light">
                        <h6 class="drop-heading">More</h6>

                        <nuxt-link
                          to="https://blog.trader4.net/category/wiki/"
                          target="_blank"
                          class="dropdown-link">
                          <span class="me-2"><i class="far fa-w"></i></span>
                          <div class="drop-title">WIKI</div>
                        </nuxt-link>

                        <nuxt-link
                          to="https://blog.trader4.net/category/algo-trading/"
                          target="_blank"
                          class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-microchip-ai"></i
                          ></span>
                          <div class="drop-title">Algo Trading</div>
                        </nuxt-link>

                        <nuxt-link
                          to="https://blog.trader4.net/category/psychology/"
                          target="_blank"
                          class="dropdown-link">
                          <span class="me-2"><i class="far fa-brain"></i></span>
                          <div class="drop-title">Psychology</div>
                        </nuxt-link>

                        <nuxt-link
                          to="https://blog.trader4.net/tag/think-and-grow-rich/"
                          target="_blank"
                          class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-question"></i
                          ></span>
                          <div class="drop-title">Think and Grow Rich</div>
                        </nuxt-link>

                        <nuxt-link
                          to="https://blog.trader4.net/tag/rich-dad-poor-dad/"
                          target="_blank"
                          class="dropdown-link">
                          <span class="me-2"><i class="far fa-book"></i></span>
                          <div class="drop-title">Rich Dad Poor Dad</div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <nuxt-link :to="{ name: 'under-construction' }" class="nav-link">
                    Pricing
                  </nuxt-link>
                </li>
                <li class="nav-item dropdown">
                  <nuxt-link
                    :to="{ name: 'under-construction' }"
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    About
                  </nuxt-link>
                  <div
                    class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                    <div class="dropdown-grid rounded-custom width-full">
                      <div class="dropdown-grid-item">
                        <h6 class="drop-heading">Company</h6>
                        <nuxt-link
                          :to="{ name: 'under-construction' }"
                          class="dropdown-link px-0">
                          <span class="me-2"
                            ><i class="far fa-building"></i
                          ></span>
                          <div class="drop-title">About Us</div>
                        </nuxt-link>

                        <nuxt-link
                          :to="{ name: 'under-construction' }"
                          class="dropdown-link px-0">
                          <span class="me-2"><i class="far fa-phone"></i></span>
                          <div class="drop-title">Contact Us</div>
                        </nuxt-link>

                        <nuxt-link
                          to="https://blog.trader4.net/category/news/"
                          target="_blank"
                          class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-newspaper"></i
                          ></span>
                          <div class="drop-title">Our News</div>
                        </nuxt-link>

                        <nuxt-link
                          :to="{ name: 'under-construction' }"
                          class="dropdown-link px-0">
                          <span class="me-2"
                            ><i class="far fa-graduation-cap"></i
                          ></span>
                          <div class="drop-title">Career</div>
                        </nuxt-link>
                        <nuxt-link
                          :to="{ name: 'under-construction' }"
                          class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-rocket-launch"></i
                          ></span>
                          <div class="drop-title">Integrations</div>
                        </nuxt-link>
                      </div>
                      <div
                        class="dropdown-grid-item radius-right-side bg-light">
                        <h6 class="drop-heading">Support</h6>
                        <nuxt-link
                          to="https://docs.trader4.net/guide/"
                          target="_blank"
                          class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-life-ring"></i
                          ></span>
                          <div class="drop-title">Help Center</div>
                        </nuxt-link>
                        <nuxt-link
                          :to="{ name: 'under-construction' }"
                          class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-headset"></i
                          ></span>
                          <div class="drop-title">Support Center</div>
                        </nuxt-link>

                        <nuxt-link :to="{ name: 'under-construction' }" class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-question"></i
                          ></span>
                          <div class="drop-title">F.A.Q</div>
                        </nuxt-link>

                        <nuxt-link
                          to="https://status.trader4.net"
                          target="_blank"
                          class="dropdown-link">
                          <span class="me-2"
                            ><i class="far fa-heartbeat"></i
                          ></span>
                          <div class="drop-title">Status</div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              class="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
              <nuxt-link
                :to="{ name: 'contact-us' }"
                class="me-3 fw-bolder text-decoration-none text-dark">
                <i class="fas fa-phone"></i>
                +447888872710
              </nuxt-link>
              <nuxt-link
                to="https://app.trader4.net"
                target="_blank"
                class="btn btn-primary btn-sm">
                Get Started
              </nuxt-link>
            </div>
          </div>
        </nav>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasWithBackdrop">
          <div class="offcanvas-header d-flex align-items-center mt-4">
            <nuxt-link
              :to="{ name: 'index' }"
              class="d-flex align-items-center mb-md-0 text-decoration-none">
              <img
                src="~/assets/img/trader4-H.svg"
                width="150px"
                height="19px"
                alt="Trader4"
                class="img-fluid ps-2" />
            </nuxt-link>
            <button
              type="button"
              class="close-btn text-danger"
              data-bs-dismiss="offcanvas"
              aria-label="Close">
              <i class="far fa-close"></i>
            </button>
          </div>
          <div class="offcanvas-body">
            <ul class="nav col-12 col-md-auto justify-content-center main-menu">
              <li>
                <nuxt-link :to="{ name: 'index' }" class="nav-link">
                  Home
                </nuxt-link>
              </li>
              <li class="nav-item dropdown">
                <nuxt-link
                  :to="{ name: 'products' }"
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Products & Services
                </nuxt-link>
                <div
                  class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div class="dropdown-grid rounded-custom width-full">
                    <div class="dropdown-grid-item">
                      <h6 class="drop-heading">Hack The Market</h6>

                      <nuxt-link
                        :to="{ name: 'products-supply-demand' }"
                        class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >SD</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Supply Demand</div>
                          <p>Every Move on Market</p>
                        </div>
                      </nuxt-link>

                      <nuxt-link
                        :to="{ name: 'products-algo-portfolio' }"
                        class="dropdown-link">
                        <span
                          class="demo-list bg-dark rounded text-white fw-bold"
                          >AP</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Algo Portfolio</div>
                          <p>Forex Portfolio via SQX</p>
                        </div>
                      </nuxt-link>

                      <nuxt-link
                        :to="{ name: 'products-trend-friend' }"
                        class="dropdown-link">
                        <span
                          class="demo-list bg-success rounded text-white fw-bold"
                          >TF</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Trend Friend</div>
                          <p>Follow the Market</p>
                        </div>
                      </nuxt-link>

                      <nuxt-link
                        :to="{ name: 'products-dashboard-x' }"
                        class="dropdown-link">
                        <span
                          class="demo-list bg-danger rounded text-white fw-bold"
                          >DX</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Dashboard X</div>
                          <p>Professional way for Professionals</p>
                        </div>
                      </nuxt-link>

                      <nuxt-link
                        :to="{ name: 'products-bazaar' }"
                        class="dropdown-link">
                        <span
                          class="demo-list bg-info rounded text-white fw-bold"
                          >BZ</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Bazaar</div>
                          <p>Follow Professionals</p>
                        </div>
                      </nuxt-link>

                      <nuxt-link
                        :to="{ name: 'products-trend-line' }"
                        class="dropdown-link">
                        <span
                          class="demo-list bg-warning rounded text-white fw-bold"
                          >TL</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Trend Line</div>
                          <p>Simplest Way to Trading</p>
                        </div>
                      </nuxt-link>

                      <nuxt-link
                        :to="{ name: 'products-bulut' }"
                        class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >BT</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Bulut</div>
                          <p>Cloud Infrastructure</p>
                        </div>
                      </nuxt-link>
                    </div>
                    <div class="dropdown-grid-item radius-right-side bg-light">
                      <h6 class="drop-heading">Let`s Work Together</h6>

                      <nuxt-link
                        :to="{ name: 'services-trading-coaching' }"
                        class="dropdown-link">
                        <span
                          class="demo-list bg-primary rounded text-white fw-bold"
                          >TC</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Trading Coaching</div>
                          <p>A Coach, Master in Trading</p>
                        </div>
                      </nuxt-link>

                      <nuxt-link
                        :to="{ name: 'services-algo-trading-coach' }"
                        class="dropdown-link">
                        <span
                          class="demo-list bg-dark rounded text-white fw-bold"
                          >AC</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Algo Trading Coach</div>
                          <p>A Master Coach in Algo Trading</p>
                        </div>
                      </nuxt-link>

                      <nuxt-link
                        :to="{ name: 'services-trading-mastermind' }"
                        class="dropdown-link">
                        <span
                          class="demo-list bg-warning rounded text-white fw-bold"
                          >TM</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Trading Mastermind</div>
                          <p>Boost your mental powers</p>
                        </div>
                      </nuxt-link>

                      <nuxt-link
                        :to="{ name: 'services-recovery' }"
                        class="dropdown-link">
                        <span
                          class="demo-list bg-secondary rounded text-white fw-bold"
                          >AC</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Account Recovery</div>
                          <p>Survive your trading accounts</p>
                        </div>
                      </nuxt-link>

                      <nuxt-link
                        :to="{ name: 'services-trade-road' }"
                        class="dropdown-link">
                        <span
                          class="demo-list bg-info rounded text-white fw-bold"
                          >TR</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Trade Road</div>
                          <p>We are hiring a trader</p>
                        </div>
                      </nuxt-link>

                      <nuxt-link
                        :to="{ name: 'services-warren-program' }"
                        class="dropdown-link">
                        <span
                          class="demo-list bg-danger rounded text-white fw-bold"
                          >WP</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Warren Program</div>
                          <p>Be Wealthy Every Year</p>
                        </div>
                      </nuxt-link>

                      <nuxt-link
                        :to="{ name: 'services-millionaire' }"
                        class="dropdown-link">
                        <span
                          class="demo-list bg-success rounded text-white fw-bold"
                          >MM</span
                        >
                        <div class="dropdown-info">
                          <div class="drop-title">Millionaire of the Month</div>
                          <p>Be A Millionaire in One Month</p>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </li>

              <li class="nav-item dropdown">
                <nuxt-link
                  :to="{ name: 'index' }"
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Education
                </nuxt-link>
                <div
                  class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div class="dropdown-grid rounded-custom width-full">
                    <div class="dropdown-grid-item">
                      <h6 class="drop-heading">Useful Links</h6>

                      <nuxt-link
                        to="https://blog.trader4.net/category/trading-strategies/"
                        target="_blank"
                        class="dropdown-link px-0">
                        <span class="me-2"><i class="far fa-lamp"></i></span>
                        <div class="drop-title">Trading Strategies</div>
                      </nuxt-link>

                      <nuxt-link
                        to="https://blog.trader4.net/category/trading-systems/"
                        target="_blank"
                        class="dropdown-link px-0">
                        <span class="me-2"
                          ><i class="far fa-microchip"></i
                        ></span>
                        <div class="drop-title">Trading Systems</div>
                      </nuxt-link>

                      <nuxt-link
                        to="https://blog.trader4.net/category/risk-management/"
                        target="_blank"
                        class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-money-check-dollar"></i
                        ></span>
                        <div class="drop-title">Risk Management</div>
                      </nuxt-link>

                      <nuxt-link
                        to="https://blog.trader4.net/category/money-management/"
                        target="_blank"
                        class="dropdown-link px-0">
                        <span class="me-2"
                          ><i class="far fa-dollar-sign"></i
                        ></span>
                        <div class="drop-title">Money Management</div>
                      </nuxt-link>

                      <nuxt-link
                        to="https://blog.trader4.net/category/trading-plans/"
                        target="_blank"
                        class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-rocket-launch"></i
                        ></span>
                        <div class="drop-title">Trading Plans</div>
                      </nuxt-link>
                    </div>
                    <div class="dropdown-grid-item radius-right-side bg-light">
                      <h6 class="drop-heading">More</h6>

                      <nuxt-link
                        to="https://blog.trader4.net/category/wiki/"
                        target="_blank"
                        class="dropdown-link">
                        <span class="me-2"><i class="far fa-w"></i></span>
                        <div class="drop-title">WIKI</div>
                      </nuxt-link>

                      <nuxt-link
                        to="https://blog.trader4.net/category/algo-trading/"
                        target="_blank"
                        class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-microchip-ai"></i
                        ></span>
                        <div class="drop-title">Algo Trading</div>
                      </nuxt-link>

                      <nuxt-link
                        to="https://blog.trader4.net/category/psychology/"
                        target="_blank"
                        class="dropdown-link">
                        <span class="me-2"><i class="far fa-brain"></i></span>
                        <div class="drop-title">Psychology</div>
                      </nuxt-link>

                      <nuxt-link
                        to="https://blog.trader4.net/tag/think-and-grow-rich/"
                        target="_blank"
                        class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-question"></i
                        ></span>
                        <div class="drop-title">Think and Grow Rich</div>
                      </nuxt-link>

                      <nuxt-link
                        to="https://blog.trader4.net/tag/rich-dad-poor-dad/"
                        target="_blank"
                        class="dropdown-link">
                        <span class="me-2"><i class="far fa-book"></i></span>
                        <div class="drop-title">Rich Dad Poor Dad</div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <nuxt-link :to="{ name: 'pricing' }" class="nav-link">
                  Pricing
                </nuxt-link>
              </li>
              <li class="nav-item dropdown">
                <nuxt-link
                  :to="{ name: 'about-us' }"
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  About
                </nuxt-link>
                <div
                  class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div class="dropdown-grid rounded-custom width-full">
                    <div class="dropdown-grid-item">
                      <h6 class="drop-heading">Useful Links</h6>

                      <nuxt-link
                        :to="{ name: 'about-us' }"
                        class="dropdown-link px-0">
                        <span class="me-2"
                          ><i class="far fa-building"></i
                        ></span>
                        <div class="drop-title">About Us</div>
                      </nuxt-link>

                      <nuxt-link
                        :to="{ name: 'contact-us' }"
                        class="dropdown-link px-0">
                        <span class="me-2"><i class="far fa-phone"></i></span>
                        <div class="drop-title">Contact Us</div>
                      </nuxt-link>

                      <nuxt-link
                        to="https://blog.trader4.net/category/news/"
                        target="_blank"
                        class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-newspaper"></i
                        ></span>
                        <div class="drop-title">Our News</div>
                      </nuxt-link>

                      <nuxt-link
                        :to="{ name: 'career' }"
                        class="dropdown-link px-0">
                        <span class="me-2"
                          ><i class="far fa-graduation-cap"></i
                        ></span>
                        <div class="drop-title">Career</div>
                      </nuxt-link>

                      <nuxt-link
                        :to="{ name: 'contact-us' }"
                        class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-rocket-launch"></i
                        ></span>
                        <div class="drop-title">Integrations</div>
                      </nuxt-link>
                    </div>
                    <div class="dropdown-grid-item radius-right-side bg-light">
                      <h6 class="drop-heading">Utility Pages</h6>

                      <nuxt-link
                        to="https://docs.trader4.net"
                        target="_blank"
                        class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-life-ring"></i
                        ></span>
                        <div class="drop-title">Documentation</div>
                      </nuxt-link>
                      <!-- <a
                        href="http://127.0.0.1:8001/panel/tickets/create"
                        class="dropdown-link">
                        <span class="me-2"><i class="far fa-headset"></i></span>
                        <div class="drop-title">Support Center</div>
                      </a> -->
                      <nuxt-link :to="{ name: 'index' }" class="dropdown-link">
                        <span class="me-2"><i class="far fa-headset"></i></span>
                        <div class="drop-title">Support Center</div>
                      </nuxt-link>

                      <nuxt-link :to="{ name: 'faq' }" class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-question"></i
                        ></span>
                        <div class="drop-title">F.A.Q</div>
                      </nuxt-link>

                      <nuxt-link
                        to="https://status.trader4.net"
                        target="_blank"
                        class="dropdown-link">
                        <span class="me-2"
                          ><i class="far fa-heartbeat"></i
                        ></span>
                        <div class="drop-title">Status</div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="action-btns mt-4 ps-3">
              <nuxt-link
                to="https://app.trader4.net"
                target="_blank"
                :to="{ name: 'index' }"
                class="btn btn-primary">
                Get Started
              </nuxt-link>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: "Header",
  setup() {},
});
</script>

<style>
@media (min-width: 1200px) {
  .dropdown-menu {
    visibility: hidden;
    opacity: 0;
    display: unset;
  }
  .dropdown:hover .dropdown-menu {
    visibility: visible;
    opacity: 1;
    animation: fadeIn 0.4s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
