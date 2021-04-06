<template>
  <div class="bg-gray-200 flex flex-col h-screen">
    <div class="flex flex-grow items-center w-full bg-teal-lighter">
      <div
        class="w-full bg-gray-900 text-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto flex-grow"
      >
        <div class="flex justify-center md:mb-6">Login</div>
        <form
          @submit.prevent="onSubmit"
          class="mb-4 md:flex md:flex-wrap md:justify-between"
        >
          <div class="flex flex-col mb-4 md:w-full">
            <label class="mb-2 font-bold text-sm" for="email">E-Mail</label>
            <input
              type="text"
              v-model.trim="$v.email.$model"
              name="email"
              class="border py-2 px-3 text-grey-darkest rounded text-black"
              :class="{
                'is-invalid': submitted && $v.email.$error,
              }"
            />
            <div
              v-if="submitted && !$v.email.required"
              class="invalid-feedback text-red-600"
            >
              E-mail is required!
            </div>
          </div>

          <div class="flex flex-col mb-4 md:w-full">
            <label htmlFor="password" class="mb-2 font-bold text-sm"
              >Password</label
            >
            <input
              type="password"
              v-model.trim="$v.password.$model"
              name="password"
              class="border py-2 px-3 text-grey-darkest rounded text-black"
              :class="{
                'is-invalid': submitted && $v.password.$error,
              }"
            />
            <div
              v-if="submitted && !$v.password.required"
              class="invalid-feedback text-red-600"
            >
              Password is required!
            </div>
          </div>

          <button
            type="submit"
            class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 mx-auto"
          >
            <svg
              v-show="loading"
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Login
          </button>
        </form>
        <div v-if="error" class="text-red-700 mt-10 md:mx-auto text-center">
          {{ error }}
        </div>
      </div>
    </div>
    <div class="md:mx-auto text-sm mb-10 text-gray-400">
      <p>
        Copyright &copy; {{ getYear() }}
      </p>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

import { router } from "../_helpers";
import { authenticationService } from "../_services";
import config from "../config";

export default {
  data() {
    return {
      email: "",
      password: "",
      submitted: false,
      loading: false,
      returnUrl: "",
      error: ""
    };
  },
  validations: {
    email: { required },
    password: { required }
  },
  created() {
    // redirect to home if already logged in
    const currentUser = authenticationService.currentUser();

    if (currentUser) {
      return router.push("/");
    }

    // get return url from route parameters or default to '/'
    this.returnUrl = this.$route.query.returnUrl || "/";
  },
  methods: {
    getYear: () => new Date().getFullYear(),
    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const { email, password } = this.$data;

      this.loading = true;
      axios
        .post(`${config.apiUrl}/login`, { email, password })
        .then(result => {
          localStorage.setItem("currentUser", JSON.stringify(result.data));
          return router.push("/");
        })
        .catch(error => {
          this.error = error;
          this.loading = false;
        });
    }
  }
};
</script>
