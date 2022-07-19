<template>
  <div class="narrow-scroll-page">
    <h1 class="title">メール送信完了</h1>
    <StepsPwReset class="steps"></StepsPwReset>
    <p>
      ご登録のメールアドレス宛にパスワード再発行用のURLを記載したメールを送信しました。
      1時間以内にメール記載のURLをタップするとパスワード変更を行えます。
    </p>
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
.steps:deep(.step2) {
  fill: var(--color-primary);
  background-color: var(--color-primary);
  color: white;
}
</style>
