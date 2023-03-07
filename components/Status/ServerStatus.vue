<template>
  <section class="server pt-25 position-relative">
    <div class="container">
      <div class="the_breadcrumb_conatiner_page">
        <div class="the_breadcrumb">
          <div class="breadcrumbs">
            <i class="fas fa-home"></i>

            <NuxtLink :to="{ name: 'index' }"> bredh </NuxtLink> /

            <NuxtLink :to="{ name: 'help-center' }"> help center </NuxtLink> /
            Server Status
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 help-center-header">
          <h5 class="help-center-title">
            <span>Last Revised: 06/08/2022</span>Bredh Server Status
          </h5>
          <p class="help-center-text">
            Below is a real-time overview of our servers where you can check if
            there's any known issues.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
