<template>
<div>
  <v-main>
    <v-container>
      <KupediaLogo />
      <v-row class='justify-center' id='ku-wiki-is'>
        <div id='kuwiki-is'><span class='hutoji daiji'>京大wiki</span> とは<br />
          京大生有志による，<br>
          学内資料を<span class='hutoji'>収集・整理・公開</span>するプロジェクト<br />
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
      <v-container>
        <v-row>
          <div>
            <h1>過去問</h1>
            <h2>収集</h2>
            <div>すべての科目の試験問題やレポート課題を回収しています</div>
            <ul>
              <li>
                メール <nuxt-link to="/volunteer">詳細</nuxt-link>
              </li>
              <li>回収ボックス（コロナで中断中）</li>
            </ul>
            <h2>整理</h2>
            京大wiki運営者が整理しています
            運営参加希望の方は<nuxt-link to="/volunteer">詳細</nuxt-link>
            <h2>公開</h2>
            <ul>
              <li>このサイト上で公開しています</li>
            </ul>
          </div>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <div>
            <h1>新入生向け情報</h1>
          </div>
        </v-row>
      </v-container>
      <v-container>
        協力いただきたいこと

        京大wikiは，
        1. 過去問提供
        2. 記事提供
        2. サイト開発
        3. API開発

      </v-container>


      <v-container>
        ...その他準備中
        <br />
        <div>2014年</div>理学部生が個人的に過去問を収集、過去問を見せた相手から試験問題を回収 <br />
        <div>2018年</div> 過去問データベースの引き継ぎ 過去問をGoogleサイトでネット上で広く公開し広く過去問を募るように <br />
        <div>2020年</div> 各自治会との連携を開始　現サイトに移行 過去問の閲覧を京大生に限定<br />
      </v-container>
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
