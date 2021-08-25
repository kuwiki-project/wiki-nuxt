<template>
  <div class="scroll-page">
    <h1>使い方</h1>

    <input id="acd-check1" class="acd-check" type="checkbox">
    <label class="acd-label" for="acd-check1">
      <chevron-right-icon class="right-icon" size="1.5x"></chevron-right-icon>
      <chevron-down-icon class="down-icon" size="1.5x"></chevron-down-icon>
      <div>科目検索</div>
    </label>
    <div class="acd-content">
      <p>
        キーワード検索で科目や過去問を探すことができます．検索窓には科目名の他にも学部や開講している曜時限などのキーワードを入力してもOK！数字は半角数字でお願いします
        <br> 例) 水1 理学部
        <br>
        京大wikiの過去問を閲覧したら，試験の後には試験問題を提供してね！
      </p>
    </div>

    <input id="acd-check2" class="acd-check" type="checkbox">
    <label class="acd-label" for="acd-check2">
      <chevron-right-icon class="right-icon" size="1.5x"></chevron-right-icon>
      <chevron-down-icon class="down-icon" size="1.5x"></chevron-down-icon>
      <div>ねこ</div>
    </label>
    <div class="acd-content">
      <p>キーワード検索で過去問を探すことができます．検索窓には，科目名の他，学部や開講している曜時限など入力してもOK！過去問を閲覧したら，試験の後には過去問提供してね...！</p>
    </div>

    

    <input id="acd-check3" class="acd-check" type="checkbox">
    <label class="acd-label" for="acd-check3">
      <chevron-right-icon class="right-icon" size="1.5x"></chevron-right-icon>
      <chevron-down-icon class="down-icon" size="1.5x"></chevron-down-icon>
      <div>過去問検索</div>
    </label>
    <div class="acd-content">
      <p>キーワード検索で過去問を探すことができます．検索窓には，科目名の他，学部や開講している曜時限など入力してもOK！過去問を閲覧したら，試験の後には過去問提供してね...！</p>
    </div>
    
    <input id="acd-check4" class="acd-check" type="checkbox">
    <label class="acd-label" for="acd-check4">
      <chevron-right-icon class="right-icon" size="1.5x"></chevron-right-icon>
      <chevron-down-icon class="down-icon" size="1.5x"></chevron-down-icon>
      <div>過去問検索</div>
    </label>
    <div class="acd-content">
      <p>キーワード検索で過去問を探すことができます．検索窓には，科目名の他，学部や開講している曜時限など入力してもOK！過去問を閲覧したら，試験の後には過去問提供してね...！</p>
    </div>
  </div>
</template>
<script>
import { ChevronDownIcon, ChevronRightIcon} from 'vue-feather-icons'
export default {
  auth: false,
  components: {
    ChevronDownIcon,ChevronRightIcon
  },
  head: {
    title: "使い方"
  },
}
</script>
<style scoped>
.acd-check{
  display: none;
}
.acd-label{
  background: lightsteelblue;
  color: #fff;
  display: flex;
  margin: 0.5em 0;
  width: 100%;
  height: 3em;
  padding: auto 0;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
}
.right-icon , .acd-check:checked + .acd-label > .down-icon{
    display: inline-block;
  margin: 0 0.5em;

}

.down-icon , .acd-check:checked + .acd-label > .right-icon{
  display:none;
}
.acd-content{
  display: flex;
  box-sizing: border-box;
  height: 0;
  opacity: 0;
  visibility: hidden;
}
.acd-check:checked + .acd-label + .acd-content{
  height: auto;
  opacity: 1;
  padding: 0em 1em;
  visibility: visible;
}
</style>
