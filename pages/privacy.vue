<template>
  <div>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="10" sm="8">
            <v-card-title>プライバシーポリシー</v-card-title>
            <v-card-text>
              <h4>個人情報の管理</h4>
              当サイトは個人情報の保護に努めて適切に管理し，利用者本人の了承がある場合を除き第三者に開示することはありません。

              <h4>個人情報の収集</h4>
              当サイトでは利用登録やサイトのご利用によって利用者から自発的に提供されるメールアドレスなどの個人情報を収集します。
              また，利用者が本サイトにアクセスするときの，IPアドレス，デバイスIDなどを特定の情報を受け取り，それらの情報を記録することがあります。

              <h4>Cookieについて</h4>
              デバイスからログインに利用しているアカウントなど，利用者のデバイスの設定を記憶するために，Cookieやそれと類似の技術を使用します。

              <h4>アクセス解析ツールについて</h4>
              当サイトでは，GoogleInc.が提供するアクセス解析ツール「Googleアナリティクス」を利用しています。
              Googleアナリティクスでは，トラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており，個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ます。
              Googleアナリティクスの詳細は「Googleアナリティクス利用規約」をご覧ください。
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <TheFooter />
  </div>
</template>
<script>
export default {
  auth: false
}
</script>
<style scoped>
h4 {
  margin: 10pt 0pt 5pt;
}
</style>
