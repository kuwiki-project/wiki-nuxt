<template>
  <div class="steps-container">
    <span class="text step1">利用者情報</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="200"
      class="arrow"
      viewBox="0 0 100 200"
    >
      <path
        id="パス_1"
        class="step1"
        data-name="パス 1"
        d="M100,0,200,60H0Z"
        transform="translate(60) rotate(90)"
      />
      <path
        id="パス_3"
        class="step2"
        data-name="パス 3"
        d="M-577-333h-75l60-100-60-100h75v200Z"
        transform="translate(677 533)"
      />
    </svg>

    <span class="text step2">メール送信</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="200"
      class="arrow"
      viewBox="0 0 100 200"
    >
      <path
        id="パス_1"
        class="step2"
        data-name="パス 1"
        d="M100,0,200,60H0Z"
        transform="translate(60) rotate(90)"
      />
      <path
        id="パス_3"
        class="step3"
        data-name="パス 3"
        d="M-577-333h-75l60-100-60-100h75v200Z"
        transform="translate(677 533)"
      />
    </svg>
    <span class="text step3">登録完了</span>
  </div>
</template>
<style scoped>
.steps-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0;
  font-size: 12px;
}
.steps-container .text {
  display: inline-block;
  width: 7em;
  height: 2em;
  line-height: 2em;
  text-align: center;
  background-color: lightgray;
  color: gray;
}
.steps-container .arrow {
  height: 2em;
  width: 1em;
  /* align-self: flex-start; */
}
.arrow .step1,
.arrow .step2,
.arrow .step3 {
  fill: lightgray;
}
</style>
