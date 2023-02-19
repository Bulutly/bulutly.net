<template>
  <div>
    <section
      class="page-header position-relative overflow-hidden ptb-60 bg-dark"
      style="background: url('/img/page-header-bg.svg') no-repeat bottom left"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12">
            <h1 class="display-5 fw-bold">{{ title }}</h1>
            <p class="lead">
              {{ desc }}
            </p>
          </div>
        </div>
        <div
          class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"
        ></div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "SharedPageHeaderSection",
  props: {
    title: {
      type: String,
      default: "Page Title",
      required: false,
    },
    desc: {
      type: String,
      default: "Page desc",
      required: false,
    },
  },
};
</script>
