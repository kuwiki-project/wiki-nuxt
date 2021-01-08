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
            <span class="hutoji">収集・整理・公開</span>するプロジェクト
            <!-- <v-icon>mdi-file-upload-outline</v-icon>収集
           <v-icon>mdi-file-cabinet</v-icon>整理
            <v-icon>mdi-web</v-icon>公開 -->
          </div>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="12">
            <h3>京大wikiでできること</h3>
            <dl>
              <div>
                <dt><v-icon>mdi-search-web</v-icon> サイト閲覧</dt>
                <dd>過去問やwikiを閲覧できます</dd>
              </div>
              <div>
                <dt><v-icon>mdi-file-upload-outline</v-icon> 過去問提供</dt>
                <dd>
                  一科目から提供できます．過去問をご覧になる方はご協力ください
                </dd>
              </div>
              <div>
                <dt>
                  <v-icon color="blue"> mdi-fountain-pen </v-icon>
                  記事投稿
                </dt>
                <dd>wikiの記事を執筆できます</dd>
              </div>
              <div>
                <dt><v-icon>mdi-code-json</v-icon> API利用</dt>
                <dd>開発者向けにAPIの利用方法を公開しています</dd>
              </div>
              <div>
                <dt><v-icon>mdi-file-code-outline</v-icon> サイト開発</dt>
                <dd>フロントエンド，バックエンドともにオープンソースです</dd>
              </div>
            </dl>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-card outlined>
              <v-card-title>
                <v-avatar size="26" class="my-1 mx-2">
                  <v-icon>mdi-folder-clock</v-icon>
                </v-avatar>
                過去問
              </v-card-title>
              <v-card-subtitle>
                全学で過去問を共有できます．
                すべての般教科目・専門科目の試験問題およびレポート課題を取り扱っています
              </v-card-subtitle>
              <v-card-text>
                <v-timeline align-top dense>
                  <v-timeline-item small color="secondary">
                    <h4>収集</h4>
                    <div>過去問を利用する方から集めています</div>
                    <ul>
                      <li>
                        📧 メール<NuxtLink to="/volunteer"> こちら </NuxtLink>
                      </li>
                      <li>📂 学内回収ボックス/コロナで中断中</li>
                      <li>🖇 連携する自治会</li>
                    </ul>
                  </v-timeline-item>
                  <v-timeline-item small>
                    <h4>整理</h4>
                    有志数名で手動&自動で整理しています
                  </v-timeline-item>
                  <v-timeline-item small>
                    <h4>公開</h4>
                    <NuxtLink to="/courses"> こちらのページ </NuxtLink> で公開中
                    ソースはこちら
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6">
            <v-card outlined>
              <v-card-title>
                <v-avatar size="26" class="my-1 mx-2">
                  <v-icon>mdi-book-open-variant</v-icon>
                </v-avatar>
                wiki
              </v-card-title>
              <v-card-subtitle>
                京大内のさまざまなことを事典的にまとめています<br />
                🌸新入生必見
              </v-card-subtitle>
              <v-card-text>
                <v-timeline align-top dense>
                  <v-timeline-item small color="secondary">
                    <h4>記事作成</h4>
                    記事を書いたり，他webサイトのリンクを集めたりしています．順次拡張予定
                  </v-timeline-item>

                  <v-timeline-item small color="secondary">
                    <h4>掲載</h4>
                    こちらのページで公開中
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card outlined>
              <v-card-title>
                <v-avatar size="26" class="my-1 mx-2">
                  <v-icon>mdi-code-json</v-icon>
                </v-avatar>
                API
              </v-card-title>
              <v-card-subtitle>
                京大wikiが収集したデータを利用できます<br />
              </v-card-subtitle>
              <v-card-text>
                <v-timeline align-top dense>
                  <v-timeline-item small>
                    <h4>作成</h4>
                    Ruby on Railsで作成
                  </v-timeline-item>
                  <v-timeline-item small>
                    <h4>利用方法</h4>
                    READMEに掲載
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6"> ...その他準備中 </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h3>京大wiki運営について</h3>
            学生有志がごく少数でやってます．利益は特にありません
            <div>
              <h4>活動目的</h4>
              学生の立場で，学内の資料を引き継ぎつつ収集し公開していくことを活動の主目的としています．
              全学で学年を越えて過去問を共有し誰でも閲覧できるようにしています．
              また明文化されず口伝えされることやSNSで書かれていることが散逸しないように記事を作成しています
            </div>
            <div>
              <h4>活動経緯</h4>
              <h5>2014年</h5>
              ある学生が過去問を収集，過去問を見せた相手から問題を回収 <br />
              <h5>2018年</h5>
              過去問をGoogleサイトでネット上に公開し過去問を募るように <br />
              <h5>2020年</h5>
              各自治会との連携を開始，現サイトに移行して過去問の閲覧を京大生に限定<br />
            </div>
            <div>
              <h4>運営参加希望の方へ</h4>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h3>関連サイト</h3>
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
        <v-row>
          <v-col cols="12">
            <h3>お問い合わせ</h3>
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
  padding: 0.25em 0;
  margin: 1em 0em 0.75em;
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

.kiwi-icon {
  filter: invert(1) grayscale(100%);
  /* fill-color: #f0f0f0; */
}

svg:svg:root,
*|*:not(svg|*) > svg:svg {
  fill-color: black;
}
</style>
