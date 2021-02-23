## 環境構築手順

###### wiki-nuxt フォルダに移動

```
$cd wiki-nuxt
```

###### yarn を導入

yarn とはパッケージ管理アプリ
インストールすべき yarn のバージョンは`package.json`にて確認できる

###### 依存パッケージをインストール

```
$yarn
```

###### 環境変数を入力する

```
$cp .env.sample .env
```

.env ファイルを作成し，.env.sample の中身を.env にコピペする
記入されていない環境変数は運営のだれかに聞くなどする

###### 開発用サーバーを立てる

```
$yarn dev
```

###### ブラウザで `localhost:3333` にアクセス

## ブランチ

##### master

push 不可

##### develop

http://wiki-nuxt.herokuapp.com にオートデプロイされる

## 自動整形

prettier と eslint は独立で動かすように設定

- prettier
  エディタに prettier を入れ，保存時に整形する設定にする

- eslint
  prettier の後に走らせる設定にしてもよし
  以下のコマンドをたたくもよし
  ```
  $yarn lintfix
  ```

## 環境変数

`.env` ファイルは `.gitignore` に含め，Github では公開されないように設定している

この冗長性を持たせているのは，パスワードなど Github で公開できないものも環境変数に書き込めるようにするため

.env に書き込まれた環境変数はそれぞれ `nuxt.config.js` ファイル内で publicRuntimeConfig ，privateRuntimeConfig .env として定義されているため，pages 内や component 内で利用できる
