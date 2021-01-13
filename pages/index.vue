<template>
<div>
  <v-main>
    <v-container>
      <v-row justify="center">
        <div id="kuwiki-is">
          <v-img src="/kiwi.svg" width="150" />
          <span class="hutoji daiji">京大wiki</span>
          とは<br />
          学内資料を<br />
          <span class="hutoji">共有</span>するプロジェクト
          <!-- <v-icon>mdi-file-upload-outline</v-icon>収集
           <v-icon>mdi-file-cabinet</v-icon>整理
            <v-icon>mdi-web</v-icon>公開 -->
        </div>
      </v-row>
    </v-container>

    <v-container>
      <v-row justify='center'>
        <v-col cols="8">
          <h3>京大wikiでできること</h3>
        </v-col>
        <v-col cols="8" md="5">
          <v-card>
            <v-card-title　class='my-2'>
              <v-avatar size="26" class="mx-2">
                <v-icon>mdi-folder-clock</v-icon>
              </v-avatar>
              過去問
              <v-spacer />
              <v-card-actions>
                <v-btn to="/volunteer" color="secondary">
                  <v-icon>mdi-file-upload-outline</v-icon>
                  <div>提供</div>
                </v-btn>
                <v-btn to="/courses" color="secondary">
                  <v-icon>mdi-magnify</v-icon>
                  <div>閲覧</div>
                </v-btn>
              </v-card-actions>
            </v-card-title>
            <v-card-subtitle>
              すべての般教科目・専門科目の試験問題およびレポート課題を取り扱っています。
            </v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="8" md="5">
          <v-card>
            <v-card-title class='my-2'>
              <v-avatar size="26" class="mx-2">
                <v-icon>mdi-book-open-variant</v-icon>
              </v-avatar>
              wiki
              <v-spacer />
              <v-card-actions>
                <v-btn to="/courses" color="secondary">
                  <v-icon>mdi-fountain-pen</v-icon>
                  <div>投稿</div>
                </v-btn>
                <v-btn to="/volunteer" color="secondary">
                  <v-icon>mdi-magnify</v-icon>
                  <div>閲覧</div>
                </v-btn>
              </v-card-actions>
            </v-card-title>
            <v-card-subtitle>
              🌸新入生必見🌸京大内のさまざまなことを事典的にまとめています<br />
            </v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="8" md="5">
          <v-card>
            <v-card-title class='my-2'>
              <v-avatar size="26" class="mx-2">
                <v-icon>mdi-code-json</v-icon>
              </v-avatar>
              API
              <v-spacer />
              <v-card-actions>
                <v-btn to="/courses" color="secondary">
                  <v-icon>mdi-file-code-outline</v-icon>
                  <div>ソース</div>
                </v-btn>
                <v-btn to="/volunteer" color="secondary">
                  <v-icon>mdi-file-document-outline</v-icon>
                  <div>ドキュメント</div>
                </v-btn>
              </v-card-actions>
            </v-card-title>
            <v-card-subtitle>
              京大wikiが収集したデータを利用できます<br />
            </v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="8" md="5">
          <v-card>
            <v-card-title class='my-2'>
              <v-avatar size="26" class="mx-2">
                <v-icon>mdi-web</v-icon>
              </v-avatar>
              Webサイト
              <v-spacer />
              <v-card-actions>
                <v-btn to="/courses" color="secondary">
                  <v-icon>mdi-file-code-outline</v-icon>
                  <div>ソース</div>
                </v-btn>
              </v-card-actions>
            </v-card-title>
            <v-card-subtitle>
              京大wikiが収集したデータを利用できます<br />
            </v-card-subtitle>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
    <v-container>
      <v-row justify='center'>
        <v-col cols="8">
          <h3>運営について</h3>
        </v-col>
        <v-col cols="8">
          <div>
            学生有志がごく少数で活動しています
          </div>
          <div class='my-2'>
            <h4>活動目的</h4>
            学生の立場で，学内の資料を引き継ぎつつ共有することを活動の主目的としています．
            全学で学年を越えて誰でも過去問を閲覧できるようにしています．
            また明文化されず口伝えされること，SNSで書かれていることが散逸しないように記事を作成しています
          </div>
          <div class='my-2'>
            <h4>活動経緯</h4>
            <h5>2014年</h5>
            ある学生が過去問を収集，過去問を見せた相手から問題を回収 <br />
            <h5>2018年</h5>
            過去問をGoogleサイトでネット上に公開し過去問を募るように <br />
            <h5>2020年</h5>
            各自治会との連携を開始，現サイトに移行して過去問の閲覧を京大生に限定<br />
          </div>
          <div class='my-2'>
            <h4>運営参加希望の方へ</h4>
            一晩寝て課題を終わらせてから連絡ください
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row justify='center'>
        <v-col cols="8">
          <h3>関連サイト</h3>
        </v-col>
        <v-col cols="8">
          <ul>
            <li>
              KU1025 - 物工過去問サイト
              <v-btn icon href="https://1025-kuexam.netlify.app/">
                <v-icon>mdi-link</v-icon>
              </v-btn>
            </li>
            <li>
              KUEE13 - 電電過去問サイト
              <v-btn icon href="https://kuee.netlify.app/">
                <v-icon>mdi-link</v-icon>
              </v-btn>
            </li>
            <li>
              理学部学生自治会サイト
              <v-btn icon href="https://web.sci-ku.info/home">
                <v-icon>mdi-link</v-icon>
              </v-btn>
            </li>
          </ul>
        </v-col>
      </v-row>
      <v-row justify='center'>
        <v-col cols="8">
          <h3>お問い合わせ</h3>
        </v-col>
        <v-col cols='8'>
          メールかTwitterのDMにてご連絡ください．<br />
          京大wikiに関する質問，サイト不具合の報告，機能改善のリクエスト，その他なんでもお気軽にどうぞ．
        </v-col>
      </v-row>
    </v-container>
  </v-main>
  <v-footer padless>
    <v-container>
      <div>
        <v-avatar size="26" class="my-1 mx-2">
          <img class="kiwi-icon" src="/kiwi.svg" alt="kiwi" />
          <svg>
            <use xlink:href="logo.svg" style="--color_fill: #000"></use>
          </svg>
        </v-avatar>
        <span>京大wiki</span>
        <v-btn icon href="/">
          <v-icon>mdi-link</v-icon>
        </v-btn>
      </div>
      <div>
        <v-avatar size="26" class="my-1 mx-2">
          <v-icon>mdi-twitter</v-icon>
        </v-avatar>
        <span>ku_wiki</span>
        <v-btn icon href="https://twitter.com/ku_wiki">
          <v-icon>mdi-link</v-icon>
        </v-btn>
      </div>
      <div>
        <v-avatar size="26" class="my-1 mx-2">
          <v-icon>mdi-github</v-icon>
        </v-avatar>
        <span>ku_wiki</span>
        <v-btn icon href="https://twitter.com/ku_wiki">
          <v-icon>mdi-link</v-icon>
        </v-btn>
      </div>
      <div>
        <v-avatar size="26" class="my-1 mx-2">
          <v-icon>mdi-email</v-icon>
        </v-avatar>
        <span class="gmail">kuwiki99</span>
      </div>
    </v-container>
  </v-footer>
</div>
</template>
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

dl>div {
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
  background: -webkit-linear-gradient(to right,
      var(--v-primary-base),
      transparent);
  background: linear-gradient(to right,
      var(--v-primary-base),
      var(--v-primary-base));
}

.kiwi-icon {
  filter: invert(1) grayscale(100%);
  /* fill-color: #f0f0f0; */
}

svg:svg:root,
*|*:not(svg|*)>svg:svg {
  fill-color: black;
}
</style>
