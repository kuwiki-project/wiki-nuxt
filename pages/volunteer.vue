<template>
  <div>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="10" sm="8">
            <v-card flat>
              <v-card-title>過去問提供</v-card-title>
              <v-card-subtitle>
                過去問を閲覧する方は必ず問題の提供をよろしくお願いします
              </v-card-subtitle>
              <v-card-text>
                <div>
                  全ての共通科目・専門科目を回収しています<br>
                  小テスト・解答・課題なども歓迎します<br>
                  試験問題が流通しないことを教員が希望する場合は問題の要約をお送りください<br>
                </div>
                <div class="text-center ma-4">
                  <div>過去問提供はメールにて</div>
                  <div class="gmail">
                    kuwiki99@gmail.com
                  </div>
                  <div>メールにpdfを添付してお送りください</div>
                </div>
                <h4>形式</h4>
                <ul>
                  <li>件名「過去問提供」</li>
                  <li>1科目の試験問題は<strong>1つのPDF</strong>に</li>
                  <li>
                    スマホでの画像スキャンには無料アプリ Adobe Scan が便利です
                  </li>
                </ul>
                <h4>ファイル名</h4>
                「科目名(教官名)西暦年度.pdf」<br>
                例) 固体物理学1(寺嶋・北村)2020.pdf
                <div>
                  <h5>科目名</h5>
                  正式な科目名を記入<br>
                  略称不可<br>
                  含まれる数字は半角算用数字に変換
                  <h5>教官名</h5>
                  教官の苗字のみ記入<br>
                  教官が2人か3人の場合は中黒(・)で区切って記入<br>
                  4人以上の場合は括弧の中は空欄に
                  <h5>西暦年度</h5>
                  受講年度を西暦4桁半角数字で記入<br>
                  両期開講される科目のみ前期後期を年度のあとに記入
                </div>
                <h4>過去問を大量にお持ちの方へ</h4>
                <div>
                  過去問を集めたフォルダを<strong>ZIPで圧縮</strong>して上記のアドレスまでお送りください。件名は同じく「過去問提供」でお願いします。ファイル名は任意でかまいません。運営側で整理致します。
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <TheFooter />
  </div>
</template>

<script>
export default {
  auth: false,
}
</script>