<template>
  <div class="scroll-page">
    <h1>過去問提供</h1>
    <div>メールにて過去問を受け付けています</div>
    <h2>回収対象</h2>
    <ul>
      <li><strong>すべて</strong>の全学共通科目・専門科目</li>
      <li>
        期末試験・中間試験・小テスト・課題・再現問題・問題要約・解答・解答例などなんでも
      </li>
      <li>
        試験問題が流通しないことを教員が希望する場合は問題の要約をお送りください
      </li>
      <li>
        当期の回収済み過去問は
        <NuxtLink to="/collected" class="link-underline">
          回収済み過去問リスト
        </NuxtLink>
        をご確認ください
      </li>
    </ul>
    <h2>ファイルの作り方</h2>
    <ul>
      <li>書き込みは消すこと</li>
      <li>
        きれいにスキャンすること（スマホでの画像スキャンには無料スマホアプリ
        <a
          href="https://acrobat.adobe.com/jp/ja/acrobat/mobile/scanner-app.html"
          target="_blank"
          class="link-underline"
        >🔗Adobe Scan</a>
        が便利です）
      </li>
      <li>1科目の試験問題は<strong>1つのPDF</strong>にまとめること</li>
    </ul>

    <h2>ファイル名の付け方</h2>
    <p class="box">
      <span class="under-red">科目名</span>
      (
      <span class="under-green">教官名</span>
      )
      <span class="under-blue">西暦年度</span>
      .pdf
    </p>

    <p>例） 固体物理学1(寺嶋・北村)2020.pdf</p>

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

    <h2>送信方法</h2>
    <p>
      to: kuwiki99@gmail.com<br />
      件名: 過去問提供<br />
      PDFファイルを添付してお送りください
    </p>
    <a
      href="mailto:kuwiki99@gmail.com?subject=過去問提供&body=ファイルを添付します"
      target="_blank"
      class="button-white"
    >
      メールを作成
    </a>
  </div>
</template>
<script>
export default {
  head: {
    title: "過去問提供"
  },
  auth: false
}
</script>
<style scoped>
.under-red {
  background: linear-gradient(transparent 80%, var(--color-error) 80%);
}
.under-green {
  background: linear-gradient(transparent 80%, var(--color-success) 80%);
}
.under-blue {
  background: linear-gradient(transparent 80%, var(--color-primary) 80%);
}
/* .border-box {
  padding: 0.5em 1em;
  margin: 0.5em 0;
  display: block;
  border: solid 0.1em gray;
  border-radius: 0.8em;
} */

/* .border-red {
  border: solid 0.2em var(--color-error);
}
.border-green {
  border: solid 0.2em var(--color-success);
}
.border-blue {
  border: solid 0.2em var(--color-primary);
} */
.button-white {
  margin: 0 0 1em 0;
}
.box {
  padding: 1em;
  background-color: whitesmoke;
}
h2 {
  background-color: var(--color-pale);
}
</style>
