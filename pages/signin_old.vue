<template>
  <section class="min-vh-100 d-flex bg-primary align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6 justify-content-center">
          <div class="card bg-primary shadow-soft border-light p-4">
            <div class="card-header text-center pb-0">
              <h2 class="h4">Sign in to our platform</h2>
            </div>
            <div class="card-body">
              <form class="mt-4" @submit.prevent="login">
                <!-- Form -->
                <div class="form-group">
                  <label for="exampleInputIcon3">Your email</label>
                  <div class="input-group mb-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <span class="fas fa-envelope"></span>
                      </span>
                    </div>
                    <input
                      class="form-control"
                      v-model="credentials.username"
                      name="username"
                      placeholder="example@company.com"
                      type="text"
                      aria-label="email adress"
                      required
                    />
                  </div>
                </div>
                <!-- End of Form -->
                <div class="form-group">
                  <!-- Form -->
                  <div class="form-group">
                    <label for="exampleInputPassword6">Password</label>
                    <div class="input-group mb-4">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <span class="fas fa-unlock-alt"></span>
                        </span>
                      </div>
                      <input
                        class="form-control"
                        v-model="credentials.password"
                        name="password"
                        id="exampleInputPassword6"
                        placeholder="Password"
                        type="password"
                        aria-label="Password"
                        required
                      />
                    </div>
                  </div>
                  <!-- End of Form -->
                  <div class="d-block d-sm-flex justify-content-between align-items-center mb-4">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value id="defaultCheck5" />
                      <label class="form-check-label" for="defaultCheck5">Remember me</label>
                    </div>
                    <div>
                      <a href="#" class="small text-right">Lost password?</a>
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-block btn-primary">Sign in</button>
              </form>
              <div class="d-block d-sm-flex justify-content-center align-items-center mt-4">
                <span class="font-weight-normal">
                  Not registered?
                  <a href="#" class="font-weight-bold">Create account</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import axios from "axios";
import Swal from "sweetalert2";
import router from "../.nuxt/router";
export default {
  name: "Login",
  data: () => ({
    credentials: {}
  }),
  methods: {
    login() {
      axios
        .post("http://copynight.net/api/login/", this.credentials)
        .then(res => {
          this.$store.dispatch('setLoginInfo', res.data)
          //router.push()←リダイレクト
        })
        .catch(e => {
          if (
            this.credentials.username != null &&
            this.credentials.password != null
          )
            Swal.fire({
              title: "Error",
              text: "ユーザー名またはパスワード、または両方が間違っています",
              showConfirmButton: false,
              showCloseButton: false,
              timer: 3000
            });
        });
    }
  }
};
</script>