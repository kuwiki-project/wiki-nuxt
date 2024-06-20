# コンポーネント

コンポーネントは pages 内で import なしに呼び出すことができる

たとえば `HogeHoge.vue` は

`<HogeHoge></HogeHoge>`

または

`<component :is="HogeHoge"></component>`

のどちらかで呼び出せる.

アイコンは https://vue-feather-icons.egoist.sh/ を参考にする．

↑危険リンク！注意！(2024.06.21現在)

feather icons 以外を利用する場合は
`components/icon` に入っているものを呼び出し．
