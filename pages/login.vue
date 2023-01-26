<template>
  <div>
    <div class="main-wrapper">
      <section
        class="sign-up-in-section bg-dark ptb-60"
        style="
          background: url('/img/page-header-bg.svg') no-repeat right bottom;
        "
      >
        <div class="container">
          <LoginForm />
        </div>
      </section>
    </div>
  </div>
</template>
<script>
definePageMeta({
  layout: "auth",
});
export default {
  name: "Login",
};
</script>
