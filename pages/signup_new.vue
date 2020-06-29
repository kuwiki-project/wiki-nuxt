<template>
<div id="app">
  <v-app id="inspire">
    <v-container class="fill-height">
      <v-card outlined class="mx-auto" width="500px">
        <v-card-text class="pa-6">
          <v-form class="mx-6 my-2">
            <v-text-field v-model="email" :rules="emailRules" type="email" label="メールアドレス *" filled rounded dense required autofocus>
            </v-text-field>
            <v-text-field v-model="name" :rules="nameRules" type="text" label="ユーザー名 *"  filled rounded dense required>
            </v-text-field>
            <v-text-field v-model="password" :rules="passwordRules" type="password" label="パスワード *" filled rounded dense reqired>
            </v-text-field>
            <v-text-field v-model="passwordconfirm" :rules="passwordRules" type="password" label="パスワード確認 *" filled rounded dense reqired>
            </v-text-field>
          </v-form>
          <v-card-actions class="mx-7 my-2">
            <v-btn color="primary" depressed block large>アカウント作成</v-btn>
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
    name: '',
    nameRules: [
      v => !!v || '入力してください',
      v => /^\w+$/.test(v) || '英数字とアンダーバーが使えます',
      v => v.length > 3 || '4文字以上',
      v => v.length <= 10 || '10文字以下',
    ],
    email: '',
    emailRules: [
      v => /^.+@st.kyoto-u.ac.jp$/.test(v) || '学生用メール @st.kyoto-u.ac.jp を入力してください',
    ],
    password: '',
    passwordconfirm: '',
    passwordRules: [
      v => !!v || '入力してください',
      v => v.length >7 || '8文字以上',
    ],
  })
}
</script>
