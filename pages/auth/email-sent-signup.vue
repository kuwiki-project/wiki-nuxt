<template>
  <div class="narrow-scroll-page">
    <h1 class="title">メール送信完了</h1>
    <StepsSignUp class="signup-steps"></StepsSignUp>
    <div>
      メールアドレス確認用のメールを送信しました。1時間以内にメール記載のURLをタップすることで新規登録が完了します
    </div>
  </div>
</template>
<script>
export default {
  auth: false,
  head: {
    title: "送信完了"
  }
}
</script>
<style scoped>
.signup-steps:deep(.step2) {
  fill: var(--color-primary);
  background-color: var(--color-primary);
  color: white;
}
</style>
