<template>
  <div>
    あとで適当にアプリ一覧とかに分割したい
    <v-main>
      <v-container>
        <v-row justify="center">
          <div id="kuwiki-is">
            <v-img src="/kiwi.svg" width="80" class="mx-auto" />
            <span class="hutoji daiji">京大wiki</span>
            とは<br />
            学内資料を<br />
            <span class="hutoji">共有</span>するプロジェクト
          </div>
        </v-row>
      </v-container>

      <v-container>
        <v-row justify="center">
          <v-col v-for="item in items" :key="item.name" cols="10" md="5">
            <v-card elevation="1" min-height="150">
              <v-card-title>
                <v-avatar size="45" icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-avatar>
                {{ item.name }}
                <v-spacer />
                <v-card-actions>
                  <v-btn
                    v-for="button in item.buttons"
                    :key="button.text"
                    :to="button.link"
                    color="secondary"
                  >
                    <v-icon>{{ button.icon }}</v-icon>
                    <div>{{ button.text }}</div>
                  </v-btn>
                </v-card-actions>
              </v-card-title>
              <v-card-text class="mx-1">
                {{ item.detail }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <h3>過去問提供のご協力のお願い</h3>
            <p>
              京大wikiはみなさまからの過去問提供で成り立っています<br />
              <strong>定期試験問題</strong>や<strong>レポート問題</strong>
              などをお持ちの方は、今後の京大生のために提供をよろしくお願いします
            </p>
            <div class="text-center">過去問提供はメールにて</div>
            <div class="text-center gmail">kuwiki99</div>
            <div>
              試験問題をPDFファイルとして添付し送信してください<br />
              解答・小テスト・課題も歓迎です<br />
              専門科目や履修者の少ない科目も大歓迎です<br />
              試験問題が流通しないよう教員が希望している場合は試験問題そのものではなく要約をお送りください<br />
            </div>
            <h4>形式について</h4>
            <ul>
              <li>
                メールの<strong>件名</strong>には「<strong>過去問提供</strong>」と記入してください
              </li>
              <li>本文は空，送信元アドレスはなんでもOKです</li>
              <li>問題用紙はきれいにスキャンしてください</li>
              <li>
                一科目の試験問題は<strong>ひとつのPDF</strong>にまとめてください
              </li>
              <li>
                スマホでの画像スキャンには無料アプリ Adobe Scan が便利です
              </li>
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
            <h4>過去問を大量にお持ちの方へ</h4>
            <div>
              過去問を集めたフォルダを<strong>ZIPで圧縮</strong>して上記のアドレスまでお送りください。件名は同じく「過去問提供」でお願いします。ファイル名は任意でかまいません。運営側で整理致します。
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <h3 class="mb-2">運営について</h3>
            <div>学生有志がごく少数で活動しています</div>
            <div class="my-2">
              <h4>活動目的</h4>
              学生の立場で，学内の資料を引き継ぎつつ共有することを活動の主目的としています．
              全学で学年を越えて誰でも過去問を閲覧できるようにしています．
              また明文化されず口伝えされること，SNSで書かれていることが散逸しないように記事を作成しています
            </div>
            <div class="my-2">
              <h4>活動経緯</h4>
              <h5>2014年</h5>
              ある学生が過去問を収集，過去問を見せた相手から問題を回収 <br />
              <h5>2018年</h5>
              過去問をGoogleサイトでネット上に公開し過去問を募るように <br />
              <h5>2020年</h5>
              各自治会との連携を開始，現サイトに移行して過去問の閲覧を京大生に限定<br />
            </div>
            <div class="my-2">
              <h4>運営参加希望の方へ</h4>
              一晩寝て課題を終わらせてから連絡ください
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <TheFooter />
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        icon: "mdi-folder-clock",
        name: "過去問",
        detail:
          "すべての般教科目・専門科目を取り扱っています．過去問を閲覧する方は提供してください",
        buttons: [
          {
            link: "/courses",
            text: "閲覧",
            icon: "mdi-magnify",
          },
          {
            link: "/volunteer",
            text: "提供",
            icon: "mdi-file-upload-outline",
          },
        ],
      },
      {
        icon: "mdi-book",
        name: "wiki",
        detail: "🌸新入生必見🌸京大内のさまざまなことを事典的にまとめています",
        buttons: [
          {
            link: "/wiki",
            text: "閲覧",
            icon: "mdi-magnify",
          },
          {
            link: "/",
            text: "投稿",
            icon: "mdi-fountain-pen",
          },
        ],
      },
      {
        icon: "mdi-code-json",
        name: "REST API",
        detail: "京大wikiが収集したデータを利用できます",
        buttons: [
          {
            link: "/",
            text: "ドキュメント",
            icon: "mdi-file-document-outline",
          },
        ],
      },
      {
        icon: "mdi-web",
        name: "Webサイト",
        detail: "京大wikiのサイトを改善できます",
        buttons: [
          {
            link: "/",
            text: "ソースコード",
            icon: "mdi-file-code-outline",
          },
        ],
      },
    ],
  }),
}
</script>
<style scoped>
.daiji {
  font-size: 1.8rem;
}

.hutoji {
  font-weight: 700;
}

.under {
  text-decoration: underline;
  /* vertical-align: text-bottom; */
}

div#kuwiki-is {
  vertical-align: text-bottom;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1.1rem;
}

dl > div {
  margin: 10pt;
}

dd {
  font-size: 0.8rem;
}

.gmail::after {
  content: "\040gmail.com";
}

ul {
  list-style: none;
  padding-left: 0;
}

h3 {
  position: relative;
  text-align: center;
}

h3:after {
  content: "";
  display: block;
  height: 4px;
  background: -webkit-linear-gradient(
    to right,
    var(--v-primary-base),
    transparent
  );
  background: linear-gradient(
    to right,
    var(--v-primary-base),
    var(--v-primary-base)
  );
}

a {
  text-decoration: none;
}
</style>
