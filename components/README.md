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
