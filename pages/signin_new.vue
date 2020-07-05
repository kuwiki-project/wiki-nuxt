<template>
<div id="app">
  <v-app id="inspire">
    <v-container class="fill-height">
      <v-card outlined class="mx-auto" width="300px">
        <v-card-text class="pa-6">
          <v-form class="mx-6 my-2">
            <v-text-field v-model="email" :rules="emailRules" label="email" autofocus required >
            </v-text-field>
            <v-text-field v-model="password" :rules="passwordRules" :type="'password'" label="password" reqired >
            </v-text-field>
          </v-form>
          <v-card-actions class="mx-3 my-2">
            <v-btn color="primary" depressed block>ログイン</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-container>

  </v-app>
</div>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    email: '',
    password: '',
    // emailRules: [
    //   v => /^.+@st.kyoto-u.ac.jp$/.test(v) || '学生用メール @st.kyoto-u.ac.jp',
    // ],
  })
}
</script>
