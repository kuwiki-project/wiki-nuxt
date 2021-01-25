# wiki-nuxt

## ローカルで動かすために

1. yarn をインストールする
   yarn とはパッケージ管理アプリ
   yarn のバージョンは`package.json`で確認できる

1. `$cd wiki-nuxt`
   wiki-nuxt フォルダに移動

1. `wiki-nuxt $yarn`
   依存パッケージをインストール

1. `wiki-nuxt $cp .env.sample .env`
   .env ファイルを作成し，.env.sample の中身を.env にコピペする
   記入されていない環境変数は運営のだれかに聞く

1. `wiki-nuxt $yarn dev`
   サーバーを立てる

1. ブラウザで`localhost:3333`にアクセス

# ブランチ

### master

### develop

wiki-nuxt.herokuapp.com にオートデプロイ

## 自動整形

prettier と eslint は独立で動かすようにしています

- prettier
  エディタに prettier を入れて保存時に整形する設定に

- eslint
  コマンド $yarn lintfix

# 環境変数について

.env ファイルは.gitignore に含め，Github では公開されないように設定している
この冗長性を持たせているのはパスワードなど Github で公開できないものも環境変数に書き込めるようにするため
.env に書き込まれた環境変数はそれぞれ nuxt.config.js ファイル内で
publicRuntimeConfig や privateRuntimeConfig として定義されているため，pages 内や component 内で利用できる
https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config/
