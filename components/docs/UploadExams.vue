<template>
  <div>
    <v-card-title>過去問提供</v-card-title>
    <v-card-subtitle>メールにて過去問を受け付けています</v-card-subtitle>
    <v-card-text>
      <div><v-icon small>$star</v-icon> すべての全学共通科目・専門科目</div>
      <div><v-icon small>$star</v-icon> すべての年代の過去問</div>
      <div>
        <v-icon small>$star</v-icon>
        期末試験・中間試験・小テスト・問題要約・解答・解答例・課題など
      </div>

      <div>
        <v-icon small>$smile</v-icon>
        試験問題が流通しないことを教員が希望する場合は問題の要約してください
      </div>

      <h3 class="info--text text-center">ファイルの作成方法</h3>
      <ul>
        <li>1科目の試験問題は<strong>1つのPDF</strong>に</li>
        <li>
          問題用紙配布の場合はスキャン<br />
          スマホでの画像スキャンには無料アプリ Adobe Scan が便利です
        </li>
        <li>書き込みは消すこと</li>
      </ul>

      <h3 class="info--text text-center">ファイル命名</h3>
      <div class="text-center text-subtitle-1 my-3">
        <span class="under-red">科目名</span>
        (
        <span class="under-green">教官名</span>
        )
        <span class="under-blue">西暦年度</span>
        .pdf
      </div>

      <v-row class="text-left">
        <v-col cols="12" sm="4">
          <div class="box-red">
            <span class="text-subtitle-2 under-red">科目名</span>
            <div class="text-caption">
              <ul>
                <li>正式な科目名を記入</li>
                <li>略称不可</li>
                <li>含まれる数字は半角算用数字に変換</li>
              </ul>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="4">
          <div class="box-green">
            <span class="text-subtitle-2 under-green">教官名</span>
            <div class="text-caption">
              <ul>
                <li>教官の苗字のみ記入</li>
                <li>()は半角/スペースなし</li>
                <li>教官が2人か3人の場合は中黒(・)で区切って記入</li>
                <li>4人以上の場合は括弧の中は空欄に</li>
              </ul>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="4">
          <div class="box-blue">
            <span class="text-subtitle-2 under-blue">西暦年度</span>
            <div class="text-caption">
              <ul>
                <li>受講年度を西暦4桁半角数字で記入</li>
                <li>両期開講される科目のみ前期後期を年度のあとに記入</li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>
      <div class="text-center my-3">例) 固体物理学1(寺嶋・北村)2020.pdf</div>

      <h3 class="info--text text-center">送信方法</h3>
      <div class="ma-1">
        <div>アドレス：kuwiki99@gmail.com</div>
        <div>件名：過去問提供</div>
      </div>
      <div class="ma-2">
        <v-btn
          small
          rounded
          outlined
          href="mailto:kuwiki99@gmail.com?subject=過去問提供&body=ファイルを添付します"
          class="mr-2"
          target="”_blank”"
        >
          メールを作成
        </v-btn>
        <span>PDFファイルを添付してお送りください</span>
      </div>
    </v-card-text>
  </div>
</template>
<style scoped>
.under-red {
  background: linear-gradient(transparent 70%, #ff99ab 70%);
}
.under-green {
  background: linear-gradient(transparent 70%, #66cdaa 70%);
}
.under-blue {
  background: linear-gradient(transparent 70%, #add8e6 70%);
}
.box-red {
  padding: 0.5em 1em;
  margin: -0.5em -0.5em;
  border: solid 0.2em #ff99ab;
  border-radius: 10px;
}
.box-green {
  padding: 0.5em 1em;
  margin: -0.5em -0.5em;
  border: solid 0.2em #66cdaa;
  border-radius: 10px;
}
.box-blue {
  padding: 0.5em 1em;
  margin: -0.5em -0.5em;
  border: solid 0.2em #add8e6;
  border-radius: 10px;
}
</style>
