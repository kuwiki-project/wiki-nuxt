## コンポーネント

コンポーネントは pages 内で import なしに呼び出すことができる
たとえば `HogeHoge.vue` は

```
<HogeHoge></HogeHoge>
```

あるいは

```
<component :is="HogeHoge"></component>
```

で呼び出せる

SVG は vuetify を通してアイコンにしているため，`/plugins/vuetify.js` を参照すること

// アイコン一覧 https://vue-feather-icons.egoist.sh/
// vuetify をとおしたアイコンは pages で
// <v-icon>$hoge</v-icon> で呼び出せる
