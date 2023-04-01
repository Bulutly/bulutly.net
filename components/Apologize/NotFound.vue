<template>
  <div class="notFound bg-default-2 mx-md-15 mx-5 py-20 mb-10 mt-24">
    <div class="container text-center">
      <img class="not-found-img mb-10" src="/img/demo/404.jpg" alt="" />
      <h1 class="coodiv-text-3 font-weight-bold">We sincerely apologize</h1>
      <div class="col-lg-6 mx-auto">
        <p class="coodiv-text-9">
          The page you are looking for does not exist, Please check entered
          address and try again or go to

          <NuxtLink :to="{ name: 'index' }"> homepage </NuxtLink>
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-10">
          <NuxtLink
            :to="{ name: 'index' }"
            class="btn btn-black btn-lg px-15 py-5">
            Homepage
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
