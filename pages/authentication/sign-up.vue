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

  <div class="auth-wrapper">
    <div class="auth-content">
      <div class="card">
        <div class="card-body text-left">
          <NuxtLink class="auth-content-logo-header" :to="{ name: 'index' }">
            <img src="~/assets/img/header/logo.png" alt="" />
          </NuxtLink>
          <h3 class="mb-4 auth-login-title">
            Create New Account<span
              >Sign up for your trial offer and instantly have deluxe hosting in
              your account with free domain included.</span
            >
          </h3>

          <div class="entry__top mt-6 mb-10 social__sign__contanier">
            <div class="entry__btns mt-2 row">
              <div class="col-6 pr-2">
                <button class="button-stroke entry__button d-block w-100">
                  <i class="fab fa-google mr-2"></i> Google
                </button>
              </div>
              <div class="col-6 pl-2">
                <button class="button-stroke entry__button d-block w-100">
                  <i class="fab fa-apple mr-2"></i> Apple ID
                </button>
              </div>
            </div>
          </div>
          <div class="coodiv-text-12 font-weight-bold mb-4">
            Or continue with email address
          </div>

          <div class="input-group mb-3">
            <input type="email" class="form-control" value="Email" />
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" value="username" />
          </div>
          <div class="input-group mb-4">
            <input type="password" class="form-control" value="password" />
          </div>

          <button class="btn btn-login-auth shadow-2 mb-4">Signup</button>
          <p class="mb-0 authlost-pass-p">
            Allready have an account?

            <NuxtLink :to="{ name: 'authentication-sign-in' }">
              Signin
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
