<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>過去問提供のご協力のお願い</h2>
          <p>
            京大wikiはみなさまからの過去問提供で成り立っています．
            <strong>定期試験問題</strong>や<strong>レポート問題</strong>
            などをお持ちの方は、今後の京大生のために提供をよろしくお願いします
          </p>
          <div class="text-center">
過去問提供はメールにて
</div>
          <div class="text-center gmail daiji">
kuwiki99
</div>
          <div>
            上記のアドレスに試験問題をPDFファイルとして添付し送信してください．<br />
            解答・小テスト・課題も歓迎です<br />
            専門科目や履修者の少ない科目も大歓迎です<br />
            試験問題が流通しないよう教員が希望している場合は試験問題そのものではなく要約をお送りください<br />
          </div>
          <h3>形式について</h3>
          <ul>
            <li>
              メールの<strong>件名</strong>には「<strong>過去問提供</strong>」と記入してください
            </li>
            <li>本文は空，送信元アドレスはなんでもOKです</li>
            <li>問題用紙はきれいにスキャンしてください</li>
            <li>
              一科目の試験問題は<strong>ひとつのPDF</strong>にまとめてください
            </li>
            <li>スマホでの画像スキャンには無料アプリ Adobe Scan が便利です</li>
            <li>
              ファイルのタイトルは「<strong>科目名(教官名)西暦年度</strong>.pdf」
              <br />
              例) 固体物理学1(寺嶋・北村)2020.pdf
              <ul>
                <li>
                  【科目名】正式な科目名を記入してください。略称は不可です。含まれる数字は半角算用数字(1,
                  2, 3…)に変換してください。
                </li>
                <li>
                  【教官名】担当教官の苗字のみ記入してください。担当教官が2人か3人の場合は中黒(・)で区切ってください。それより人数が多い場合は括弧の中は空欄にしてください。
                </li>
                <li>
                  【西暦年度】受講年度を西暦4桁半角数字で記入してください。前期後期は基本書く必要はありませんが、両期開講される科目については記入をお願いします。
                </li>
              </ul>
            </li>
          </ul>
          <h3>過去問を大量にお持ちの方へ</h3>
          <div>
            過去問を集めたフォルダを<strong>ZIPで圧縮</strong>して上記のアドレスまでお送りください。件名は同じく「過去問提供」でお願いします。ファイル名は任意でかまいません。運営側で整理致します。
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<style scoped>
.termCard {
  margin: 10pt;
  padding: 30pt;
}

p.zenbun {
  margin: 0pt 0pt 20pt;
}

h2 {
  margin: 20pt 0pt 10pt;
}

h3 {
  margin: 20pt 0pt 10pt;
}

.gmail::after {
  content: "\040gmail.com";
}

.daiji {
  font-size: 1.5rem;
}
</style>
