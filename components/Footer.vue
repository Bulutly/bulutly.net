<template>
  <section class="footer-section-banner">
    <div class="container">
      <div class="row free-trial-footer-banner">
        <div class="col-md-8">
          <h5 class="free-trial-footer-banner-title">
            join now and have free month of deluxe hosting
          </h5>
          <p class="free-trial-footer-banner-text">
            We offers a free month of service for new customers.* Sign up for
            your trial offer and instantly have deluxe hosting in your account
            with free domain included.
          </p>
        </div>

        <div class="col-md-4 free-trial-footer-links d-flex align-items-center justify-content-end">
          <div class="d-flex align-items-center">
            <NuxtLink class="sign-btn" :to="{ name: 'authentication-sign-up' }">sign up</NuxtLink>

            <NuxtLink class="log-btn" :to="{ name: 'authentication-sign-in' }">log in</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="footer-section">
    <div class="container">
      <div class="row">
        <div class="col-md-9 col-12 quiq-links-footer">
          <div class="row justify-content-center">
            <div class="col-md-4 col-6">
              <h5 class="quiq-links-footer-title">Quick Links</h5>
              <ul class="quiq-links-footer-ul">
                <li>
                  <NuxtLink :to="{ name: 'help-center' }">Support center</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{ name: 'knowledgebase' }">Knowledgebase</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{ name: 'privacy' }">Coodiv Privacy</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{ name: 'about-us' }">About us</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{ name: 'contact-us' }">My Support Tickets</NuxtLink>
                </li>
              </ul>
            </div>
            <div class="col-md-4 col-6">
              <h5 class="quiq-links-footer-title">Shopping</h5>
              <ul class="quiq-links-footer-ul">
                <li>
                  <NuxtLink :to="{ name: 'domains' }">Domain Search</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{ name: 'hosting' }">Websites & hosting</NuxtLink>
                </li>
                <li>
                  <!-- <a href="wordpress.html">WordPress solution</a> -->
                  <NuxtLink :to="{ name: 'wordpress' }">WordPress solution</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{ name: 'servers' }">Reseller Programs</NuxtLink>
                </li>

                <li>
                  <NuxtLink :to="{ name: 'ssl' }">SSL Certificates</NuxtLink>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <h5 class="quiq-links-footer-title">Quick Links</h5>
              <ul class="quiq-links-footer-ul">
                <li>
                  <NuxtLink :to="{ name: 'cloud-vps' }">Managed VPS hosting</NuxtLink>
                  <span class="badge badge-pill badge-warning">HOT!</span>
                </li>
                <li>
                  <NuxtLink :to="{ name: 'cpanel' }">Cpanel hosting</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{ name: 'dedicated' }">Dedicated Webhosting</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{ name: 'domains' }">Domain Name Search</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{ name: 'games' }">Game Server Hosting</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{ name: 'hosting' }">Webhosting Servers</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{ name: 'icecast' }">Internet Radio Station</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{ name: 'servers' }">Fully Managed Dedicated</NuxtLink>
                  <span class="badge badge-pill badge-warning">HOT!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-12 row justify-content-between">
          <div class="secure-img-footer-area col-12">
            <h5 class="quiq-links-footer-title">secure and contact</h5>
            <img src="~/assets/img/footer/secure.png" alt="" />
            <span>this is for demo reason only</span>
          </div>
          <div class="footercontact-information d-flex flex-column col-6 col-12 mt-md-0 mt-8">
            <a href="#">support@coodiv.net</a>
            <a href="#">marketing@coodiv.net</a>
            <a href="#">00123 456 789001</a>
          </div>
        </div>
      </div>

      <div class="mr-tp-40 row justify-content-between footer-area-under">
        <div class="col-md col-12 d-flex align-items-center">
          <a href="#"><img class="footer-logo-blue" src="~/assets/img/header/logo-w.png" alt="" /></a>
          <div class="footer-social-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-dribbble"></i></a>
            <a href="#"><i class="fab fa-google"></i></a>
          </div>
        </div>

        <div class="col-md col-12 d-flex justify-content-md-end justify-content-start">
          <ul class="under-footer-ullist">
            <li>
              <NuxtLink :to="{ name: 'help-center' }">Support center</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{ name: 'knowledgebase' }">Knowledgebase</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{ name: 'privacy' }">Coodiv Privacy</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="row justify-content-between final-footer-area mr-tp-40">
        <div class="col-md col-12">
          <div class="final-footer-area-text">
              {{ version }} © Copyright {{ new Date().getFullYear() }}
          </div>
        </div>
        <div class="col-md col-12 d-flex justify-content-end">
          <div class="footer-lang-changer">
            <div class="lang-changer-drop-up">
              <a class="menu-btn-changer" role="button" id="dropupmenulagchanger" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" href="#"><i class="fas fa-globe-asia"></i> english</a>
              <div class="dropdown-menu dropupmenulagchanger" aria-labelledby="dropupmenulagchanger">
                <a class="dropdown-item" href="#">english</a>
                <a class="dropdown-item" href="#">العربية</a>
                <a class="dropdown-item" href="#">Español</a>
                <a class="dropdown-item" href="#">Nederlands</a>
                <a class="dropdown-item" href="#">Français</a>
                <a class="dropdown-item" href="#">Dansk</a>
                <a class="dropdown-item" href="#">Português</a>
                <a class="dropdown-item" href="#">Deutsch</a>
              </div>
            </div>

            <div class="lang-changer-drop-up">
              <a class="menu-btn-changer" href="#"><img src="~/assets/img/flags/usa.svg" alt="" /> united
                states</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import {version} from '../package.json'

</script>

<style></style>
