<template>
  <div>
    <section
      class="contact-us-form pt-60 pb-120"
      style="
        background: url('~/assets/img/shape/contact-us-bg.svg') no-repeat center
          bottom;
      ">
      <div class="container">
        <div class="row justify-content-lg-between align-items-center">
          <div class="col-lg-6 col-md-8">
            <div class="section-heading">
              <h2>Talk to Our Sales &amp; Marketing Department Team</h2>
              <p>
                Collaboratively promote client-focused convergence vis-a-vis
                customer directed alignments via standardized infrastructures.
              </p>
            </div>
            <form action="#" class="register-form">
              <div class="row">
                <div class="col-sm-6">
                  <label for="firstName" class="mb-1"
                    >First name <span class="text-danger">*</span></label
                  >
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      required=""
                      placeholder="First name"
                      aria-label="First name" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <label for="lastName" class="mb-1">Last name</label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder="Last name"
                      aria-label="Last name" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <label for="phone" class="mb-1"
                    >Phone <span class="text-danger">*</span></label
                  >
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      required=""
                      placeholder="Phone"
                      aria-label="Phone" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <label for="email" class="mb-1"
                    >Email<span class="text-danger">*</span></label
                  >
                  <div class="input-group mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      required=""
                      placeholder="Email"
                      aria-label="Email" />
                  </div>
                </div>
                <div class="col-12">
                  <label for="yourMessage" class="mb-1"
                    >Message <span class="text-danger">*</span></label
                  >
                  <div class="input-group mb-3">
                    <textarea
                      class="form-control"
                      id="yourMessage"
                      required=""
                      placeholder="How can we help you?"
                      style="height: 120px"></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary mt-4">
                Get in Touch
              </button>
            </form>
          </div>
          <div class="col-lg-5 col-md-10">
            <div class="contact-us-img">
              <img
                src="@/assets/img/contact-us-img-2.svg"
                alt="contact us"
                class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "ContactUsForm",
};
</script>
