<template>
<div>
  <v-main>
    <v-container>
      <KupediaLogo />
      <v-row class='justify-center' id='ku-wiki-is'>
        <div id='kuwiki-is'><span class='hutoji daiji'>京大wiki</span> とは<br />
          学内資料を<span class='hutoji'>収集・整理・公開・保存</span>するプロジェクト<br />
        </div>
      </v-row>
      <v-row justify='center' class="my-7">
        <v-col cols="2" class="justify-center">
          <v-avatar color='primary' size='84'>
            <v-icon x-large dark>mdi-file-upload-outline</v-icon>
          </v-avatar>
          <p>収集</p>
        </v-col>

        <v-col cols="2" class='justify-center'>
          <v-avatar color='primary' size='84'>
            <v-icon x-large dark>mdi-file-cabinet</v-icon>
          </v-avatar>
          <p>整理</p>
        </v-col>

        <v-col cols="2" class="justify-center">
          <v-avatar color='primary' size='84'>
            <v-icon x-large dark>mdi-web</v-icon>
          </v-avatar>
          <p>公開</p>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols='12'>
          <h2>京大wikiでできること</h2>
          <h3>サイト閲覧</h3>過去問や新入生向け記事を閲覧できます
          <h3>過去問提供</h3>過去問を閲覧する方はご協力お願いします．一科目から提供できます
          <h3>記事投稿</h3>詳しくはこちら
          <h3>API利用</h3>開発者向けにAPIの利用方法を公開しています
          <h3>サイト開発</h3>フロントエンド，バックエンドともにソースを公開しています
          </ul>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols='6'>
          <v-card>
            <v-card-title>📝 過去問</v-card-title>
            <v-card-subtitle>
              すべての般教科目・専門科目の試験問題およびレポート課題を取り扱っています</v-card-subtitle>
            <v-card-text>
              <p>
                <h3>収集</h3>
                <div>過去を閲覧している方から回収</div>
                <ul>
                  <li>
                    📧 メールで送る<nuxt-link to="/volunteer">こちら</nuxt-link>
                  </li>
                  <li>📂 学内回収ボックスに入れる/コロナで中断中</li>
                  <li>🖇 連携する自治会</li>
                </ul>
              </p>
              <p>
                <h3>整理</h3>
                有志数名で手動&自動で整理しています
              </p>
              <p>
                <h3>公開</h3>
                <nuxt-link to="/courses">こちらのページ</nuxt-link> で公開中
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols='6'>
          <v-card>
            <v-card-title>📕 wiki</v-card-title>
            <v-card-subtitle>
              京大内のさまざまなことを事典的にまとめています<br />
              🌸 新入生必見
            </v-card-subtitle>
            <v-card-text>
              <p>
            <h3>記事作成</h3>
            記事を書いたり，他団体と協力して記事を書いたり，他webサイトのリンクを集めたりしています．
            順次拡張予定です．
            記事執筆者求 お気軽に連絡ください
          </p>
          <p>
            <h3>掲載</h3>
          </p>
          </v-card-text>
          </v-card>
        </v-col>
        </v-row>
        <v-col>
          ...その他準備中
        </v-col>


    </v-container>

    <v-container>
      <v-row>
        <v-col cols='12'>
          <h2>活動意義</h2>
          学生の立場で，学内の資料を引き継ぎつつ収集し，それを整理して利用しやすい形にまとめて公開していくことを活動の主目的としています．<br />
          以前は過去問がサークルやクラス内のみで共有され，人によっては閲覧できない環境がありましたが，現在は京大wikiの存在で過去問を全学で学年間で共有することが可能となっています．
          また学内の情報についても，明文化されず口伝えされること，SNSで書かれてもすぐに散逸することをまとめて文章にするのは重要だと考えて記事を作成しています．
          本大学の学生文化が引き継いできたものの重さに対して4年間は短く，断絶がたやすく起きてしまうため，それを文章にして残して置くことは大切だと考えています．
        </v-col>
        <v-col cols='12'>
          <h2>経緯</h2>
          <div>2014年</div>理学部生が個人的に過去問を収集、過去問を見せた相手から試験問題を回収 <br />
          <div>2018年</div> 過去問データベースの引き継ぎ 過去問をGoogleサイトでネット上で広く公開し広く過去問を募るように <br />
          <div>2020年</div> 各自治会との連携を開始　現サイトに移行 過去問の閲覧を京大生に限定<br />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols='12'>
          <h2>関連サイト</h2>
          <ul>
            <li><a href=''></a></li>
            <li><a href=''></a></li>
            <li><a href=''></a></li>
            <li><a href=''></a></li>
            <li><a href=''></a></li>
            <li><a href=''></a></li>
            <li><a href=''></a></li>
          </ul>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols='12'>
          <h3>京大wikiにもっと携わりたい方へ</h3>
          現在学生ごく数名で運営しています．
          興味ある方はメール，DMにて連絡をください．
          新機能開発企画や記事作成企画の持ち込みなども歓迎します．
        </v-col>
      </v-row>
      <v-row>
        <v-col cols='12'>
          <h3>お問い合わせ</h3>
          メールおよびTwitterのDMにて対応致します<br />
          京大wikiに関する質問，サイト不具合の報告，機能改善のリクエスト，記事掲載依頼，誤字指摘，その他，お気軽にご連絡ください．
        </v-col>
      </v-row>
    </v-container>
  </v-main>
  <v-footer padless>
    <v-container>
      <v-avatar size="26" class='my-1 mx-2'>
        <img src="/kiwi.svg" alt="kiwi">
      </v-avatar>
      <span>京大wiki</span>
      <v-btn icon href='/'>
        <v-icon>mdi-link</v-icon>
      </v-btn>
      <div>
        <v-avatar size="26" class='my-1 mx-2'>
          <v-icon>mdi-twitter</v-icon>
        </v-avatar>
        <span>ku_wiki</span>
        <v-btn icon href="https://twitter.com/ku_wiki">
          <v-icon>mdi-link</v-icon>
        </v-btn>
      </div>
      <div>
        <v-avatar size="26" class='my-1 mx-2'>
          <v-icon>mdi-github</v-icon>
        </v-avatar>
        <span>ku_wiki</span>
        <v-btn icon href="https://twitter.com/ku_wiki">
          <v-icon>mdi-link</v-icon>
        </v-btn>
      </div>
      <div>
        <v-avatar size="26" class='my-1 mx-2'>
          <v-icon>mdi-email</v-icon>
        </v-avatar>
        <span class='gmail'>kuwiki99</span>
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

div#kuwiki-is {
  vertical-align: bottom;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1.1rem;
}

.gmail::after {
  content: '@gmail.com';
}
</style>
