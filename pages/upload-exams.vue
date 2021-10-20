<template>
  <div class="scroll-page">
    <h1>過去問提供</h1>
    <div>メールにて過去問を受け付けています</div>
  
    <h3>ファイルの作り方</h3>
    <li class="icon-list"><star-icon size="1.2x" class="icon" />書き込みは消してください</li>
    <li class="icon-list">
      <star-icon size="1.2x" class="icon" />きれいにスキャンしてください（スマホでの画像スキャンには無料スマホアプリ
      <a href="https://acrobat.adobe.com/jp/ja/acrobat/mobile/scanner-app.html" target="_blank" class="link-text"><ExternalLinkIcon class="link-icon" />Adobe scan</a> が便利です）
    </li>
    <li class="icon-list">
      <star-icon size="1.2x" class="icon" />
      1科目の試験問題は<strong>1つのPDF</strong>にまとめてください
    </li>


    <h3>ファイル名の付け方</h3>
    <p>
      <span class="under-red">科目名</span>
      (
      <span class="under-green">教官名</span>
      )
      <span class="under-blue">西暦年度</span>
      .pdf
    </p>

    <p>例) 固体物理学1(寺嶋・北村)2020.pdf</p>

    <div class="border-box border-red">
      <span class="under-red">科目名</span>
      <ul>
        <li>正式な科目名を記入</li>
        <li>略称不可</li>
        <li>含まれる数字は半角算用数字に変換</li>
      </ul>
    </div>

    <div class="border-box border-green">
      <span class="under-green">教官名</span>
      <ul>
        <li>教官の苗字のみ記入</li>
        <li>()は半角/スペースなし</li>
        <li>教官が2人か3人の場合は中黒(・)で区切って記入</li>
        <li>4人以上の場合は括弧の中は空欄に</li>
      </ul>
    </div>
 

    <div class="border-box border-blue">
      <span class="under-blue">西暦年度</span>
      <ul>
        <li>受講年度を西暦4桁半角数字で記入</li>
        <li>両期開講される科目のみ前期後期を年度のあとに記入</li>
      </ul>
    </div>

     

    <h3>回収対象</h3>
    <li class="icon-list"><star-icon size="1.2x" class="icon" />すべての全学共通科目・専門科目</li>
    <li class="icon-list">
      <star-icon size="1.2x" class="icon" />期末試験・中間試験・小テスト・課題・再現問題・問題要約・解答・解答例などなんでも
    </li>
    <li class="icon-list">
      <smile-icon size="1.2x" class="icon" />試験問題が流通しないことを教員が希望する場合は問題の要約をお送りください
    </li>
    <li class="icon-list">
      <star-icon size="1.2x" class="icon" />
        

      <NuxtLink to="collected" class="link-text"><chevron-right-icon class="link-icon"></chevron-right-icon>回収済み過去問リスト</NuxtLink>もご確認ください
    </li>

    <h3>送信方法</h3>
    <p>
      アドレス：kuwiki99@gmail.com<br />
      件名：過去問提供<br />
      PDFファイルを添付してお送りください
    </p>
    <a
      href="mailto:kuwiki99@gmail.com?subject=過去問提供&body=ファイルを添付します"
      target="_blank"
      class="white-link-button"
    >
      メールを作成
    </a>
  </div>
</template>
<script>
import { SmileIcon, StarIcon, ChevronRightIcon, ExternalLinkIcon } from 'vue-feather-icons'
export default {
  components: {
    SmileIcon,
    StarIcon,
    ChevronRightIcon,
    ExternalLinkIcon
  },
  head: {
    title: "過去問提供"
  },
  auth: false
}
</script>
<style scoped>
.under-red {
  background: linear-gradient(transparent 80%, lightpink 80%);
}
.under-green {
  background: linear-gradient(transparent 80%, lightseagreen 80%);
}
.under-blue {
  background: linear-gradient(transparent 80%, cornflowerblue 80%);
}
.border-box {
  padding: 1em 1em;
  margin: 0.5em 0;
  display: block;
  border: solid 0.2em;
  border-radius: 0.8em;
}

.border-red {
  border: solid 0.2em lightpink;
}
.border-green {
  border: solid 0.2em lightseagreen;
}
.border-blue {
  border: solid 0.2em cornflowerblue;
}
.icon-list{
  list-style: none;
}
.icon-list .icon{
  padding: 0.05em 0.25em 0.05em 0;
  vertical-align: text-bottom;
}

</style>

