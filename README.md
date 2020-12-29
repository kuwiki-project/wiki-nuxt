# wiki-nuxt

## ローカルで動かすために
1. yarnをインストールする
yarnとはパッケージ管理アプリ
yarnのバージョンは`package.json`で確認できる

1. ```$cd wiki-nuxt```
wiki-nuxtフォルダに移動

1. ```wiki-nuxt $yarn```
依存パッケージをインストール

1. ```wiki-nuxt $cp .env.sample .env```
.envファイルを作成し，.env.sampleの中身を.envにコピペする

1. ```wiki-nuxt $yarn dev```
サーバーを立てる

1. ブラウザで`localhost:3333`にアクセス

# ブランチ
### master

### develop
wiki-nuxt.herokuapp.com にオートデプロイ

### feature/1
signup & signin 実装

### feature/2
トップ画面作成

# 環境変数について
.envファイルは.gitignoreに含め，Githubでは公開されないように設定している
この冗長性を持たせているのは，パスワードなどGithubで公開できないものも将来的に環境変数に含めるため
.envに書き込まれた環境変数はそれぞれnuxt.config.jsファイル内で
publicRuntimeConfigやprivateRuntimeConfigとして定義されているため，pages内やcomponent内で利用できる
https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config/


> My classy Nuxt.js project

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3333
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
