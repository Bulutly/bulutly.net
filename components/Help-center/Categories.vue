<template>
  <section class="categories pt-5 pb-25 position-relative">
    <div class="container">
      <div
        class="row justify-content-center nav our-help-center-tabs-nav"
        id="nav-tab"
        role="tablist">
        <a
          class="col-md-4 active"
          id="nav-first-help-categorie-tab"
          data-toggle="tab"
          href="#nav-first-help-categorie"
          role="tab"
          aria-controls="nav-first-help-categorie"
          aria-selected="true">
          <div class="support-contact-us-box">
            <i class="fad fa-backpack"></i>
            <div class="text">
              <h5>Website Security, Backups & SSL</h5>
              <p>
                If you have any questions related to using and managing Website
                Security, Backups & SSL from coodiv.
              </p>
            </div>
          </div>
        </a>

        <a
          class="col-md-4"
          id="nav-second-help-categorie-tab"
          data-toggle="tab"
          href="#nav-second-help-categorie"
          role="tab"
          aria-controls="nav-second-help-categorie-tab"
          aria-selected="false">
          <div class="support-contact-us-box">
            <i class="fad fa-bullseye-pointer"></i>
            <div class="text">
              <h5>Marketing Tools</h5>
              <p>
                If you have any questions related to the marketing tools
                included in Websites + Marketing.
              </p>
            </div>
          </div>
        </a>

        <a
          class="col-md-4"
          id="nav-third-help-categorie-tab-tab"
          data-toggle="tab"
          href="#nav-third-help-categorie"
          role="tab"
          aria-selected="false">
          <div class="support-contact-us-box">
            <i class="fad fa-inbox-in"></i>
            <div class="text">
              <h5>Email & Office</h5>
              <p>
                If you have any questions related to email management, SmartLine
                and Microsoft 365.
              </p>
            </div>
          </div>
        </a>
      </div>

      <div class="row justify-content-start mr-tp-80">
        <div id="nav-tabContent" class="col-md-9 tab-content">
          <div
            class="tab-pane fade show active"
            id="nav-first-help-categorie"
            role="tabpanel"
            aria-labelledby="nav-first-help-categorie-tab">
            <span class="help-center-box-popular">most popular categories</span>

            <div class="help-center-box-item">
              <!-- start the help center box  -->
              <div class="help-center-box-icon">
                <!-- start the help center icon  -->
                <i class="fas fa-server"></i>
                <!-- help center item icon  -->
              </div>
              <!-- end the help center icon  -->

              <div class="help-center-box-text">
                <span>our servers status </span>
                <!-- help center item title  -->
                <span
                  >is simply dummy text of the printing and typesetting
                  industry.</span
                >
                <!-- help center item sub title  -->
              </div>

              <NuxtLink :to="{ name: 'privacy' }" class="help-center-box-link">
                <i class="fas fa-angle-right"></i>
              </NuxtLink>

              <!-- help center item link  -->
            </div>
            <!-- end the help center box  -->

            <div class="help-center-box-item">
              <!-- start the help center box  -->
              <div class="help-center-box-icon">
                <!-- start the help center icon  -->
                <i class="fas fa-binoculars"></i>
                <!-- help center item icon  -->
              </div>
              <!-- end the help center icon  -->

              <div class="help-center-box-text">
                <span>our domains services </span>
                <!-- help center item title  -->
                <span
                  >is simply dummy text of the printing and typesetting
                  industry.</span
                >
                <!-- help center item sub title  -->
              </div>

              <NuxtLink :to="{ name: 'privacy' }" class="help-center-box-link">
                <i class="fas fa-angle-right"></i>
              </NuxtLink>
              <!-- help center item link  -->
            </div>
            <!-- end the help center box  -->

            <div class="help-center-box-item">
              <!-- start the help center box  -->
              <div class="help-center-box-icon">
                <!-- start the help center icon  -->
                <i class="fas fa-chart-pie"></i>
                <!-- help center item icon  -->
              </div>
              <!-- end the help center icon  -->

              <div class="help-center-box-text">
                <span>payment issue </span>
                <!-- help center item title  -->
                <span
                  >is simply dummy text of the printing and typesetting
                  industry.</span
                >
                <!-- help center item sub title  -->
              </div>

              <NuxtLink :to="{ name: 'privacy' }" class="help-center-box-link">
                <i class="fas fa-angle-right"></i>
              </NuxtLink>
              <!-- help center item link  -->
            </div>
            <!-- end the help center box  -->
          </div>

          <div
            class="tab-pane fade"
            id="nav-second-help-categorie"
            aria-labelledby="nav-second-help-categorie-tab">
            <h5 class="no-cat-error">
              there is no categories here
              <span
                >is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.</span
              >
            </h5>
          </div>

          <div class="tab-pane fade" id="nav-third-help-categorie">
            <h5 class="no-cat-error">
              there is no categories here
              <span
                >is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.</span
              >
            </h5>
          </div>
        </div>

        <div class="col-md-3">
          <h5 class="immediate-help-center-title">
            Need some immediate <br />help ?
          </h5>
          <p class="immediate-help-center-text">
            our suuport team here for you 24/7
          </p>

          <a class="immediate-help-center-link" href="#">00213 123 45 67 89</a>
          <a class="immediate-help-center-link" href="#">support@coodiv.net</a>

          <NuxtLink
            :to="{ name: 'contact-us' }"
            class="immediate-help-center-link">
            send a leter
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
