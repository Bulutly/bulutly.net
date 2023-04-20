<template>
  <div>
      <section class="bg-gray-50 dark:bg-gray-900">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-20 lg:py-16 lg:grid-cols-12">
              <div class="w-full col-span-6 mx-auto bg-white rounded-lg shadow dark:bg-gray-800 md:mt-0 sm:max-w-lg xl:p-0">
                  <div class="p-6 space-y-4 lg:space-y-6 sm:p-8">
                      <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 sm:text-2xl dark:text-white">
                          Confirm Code
                      </h1>
                      <Form class="space-y-4 lg:space-y-6" @submit="loginUser" :validation-schema="schema">
                          <div>
                              <label for="code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Code</label>
                              <Field v-model="code" type="number" name="code" id="code" placeholder="For Example, 413850" autofocus
                                     class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                              <ErrorMessage class="text-red-700 text-sm" name="code" />
                          </div>
                          <button type="submit" disabled
                                  class="w-full disabled:bg-gray-400 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Sign in
                          </button>
                      </Form>
                  </div>
              </div>
              <div class="mr-auto place-self-center lg:col-span-4">
                  <img class="hidden mx-auto lg:flex" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg" alt="illustration">
              </div>
          </div>
      </section>
  </div>
</template>

<script setup lang="ts">
import { ErrorMessage, Field, Form } from "vee-validate";
import * as Yup from "yup";

const code = ref("");

const loginUser = () => {
  console.log(code.value);
};

const schema = Yup.object({
  code: Yup.number().required("Seems you even not entered verify code, not sure?, Contact Us.")
      .typeError("Confirm code should look like 413850, not sure?, Contact Us."),
});
</script>