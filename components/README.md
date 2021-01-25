## コンポーネント

コンポーネントはpages内でimportなしに呼び出すことができる
たとえば `HogeHoge.vue` は
```
<HogeHoge></HogeHoge>
```
あるいは
```
<component :is="HogeHoge"></component>
```
で呼び出せる

SVGはvuetifyを通してアイコンにしているため，`/plugins/vuetify.js` を参照すること
