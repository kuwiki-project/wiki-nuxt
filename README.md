# wiki-nuxt

[京大 wiki](https://www.kuwiki.net)のフロントエンドのコードです。

## ブランチ

### master

[本番環境](https://kuwiki.net)で動いているもの。このブランチを更新すると GitHub Actions によって本番環境のサーバーにオートデプロイされる。直接の push 禁止。このブランチを更新するときは要プルリク。

### develop

[Heroku](https://wiki-nuxt.herokuapp.com) にオートデプロイされる。気軽にマージして OK

## 環境構築手順

1. [yarn](https://github.com/yarnpkg/yarn) をインストールする。 `~/package.json` に記されてるものと同じバージョンの yarn をインストールすること

1. このリポジトリをクローンする

1. `$cd wiki-nuxt`

1. `$yarn` で依存パッケージを一括インストールする

1. `$cp .env.sample .env` で環境変数をコピーする

1. ` $yarn dev` で開発用サーバーを立てる

1. ブラウザに `localhost:3333` と入力してアクセス

## 自動整形設定

prettier と eslint をそれぞれ独立に動かす

### prettier

エディタに prettier を導入し，保存時に整形する設定にする

### eslint

自動で prettier の後に走らせる設定にしてもよし。
`$yarn lintfix`を手動でたたくのでもよし

## CSS

- 全体で使う css は`~/static/default.css`にまとめる
- それぞれのページの css はそれぞれの`pages/*.vue` に

## 環境変数

`~/.env` ファイルは `~/.gitignore` に含め，GitHub では共有しないように設定している

この冗長性を持たせているのは，API token など GitHub で公開できないものも環境変数に書き込めるようにするため

`~/.env` に書き込んだ環境変数は `~/nuxt.config.js` で `publicRuntimeConfig` や`privateRuntimeConfig` として定義しているため，pages や component で呼び出せる。
