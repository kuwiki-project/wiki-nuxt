<template>
  <div>
    <theHeader />
    <Nuxt />
  </div>
</template>
<style>
.icon-kiwi{
  height: 4em;
  width: 4em;
  margin: 0 auto;
  display: block;
  color: #faaca8
}
.scroll-page{
  width: 85%;
  margin: 2em auto;
}
.one-page {
  height: 85vh;
  width: 100%;
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

:root {
  font-family: "Noto Sans JP";
  text-decoration: none;
  font-size: 15px;
  color: dimgray;
  line-height: 1.8em;
  font-weight: 300;
}
h1{
  font-size: 1.5em !important;
  margin: 1em 0;
}

h1, h2, h3, h4, h5, h6{
  font-weight: 300;
}
.input {
  width: 100%;
  height: 2em;
  color: inherit;
  outline: none;
  border: none;
  box-sizing: border-box;
  border-radius: 0.4em;
  display: block;
  background-color: whitesmoke;
  padding: 0 0.5em;
}
.input::placeholder {
  color: lightgray;
}
.label{
  font-size: 0.85em;
  text-align: bottom;
  display: inline-block;
  width: 100%;
  margin: 1em 0 0 0;
}
a {
  text-decoration: none;
 color: cornflowerblue
}
.link-text{
  display: inline-block;
  font-weight: 400;
  color: cornflowerblue;
  background-color: whitesmoke;
  text-decoration: underline solid;
  vertical-align: bottom;
  padding: 0 0.2em;
}
.link-text .link-icon{
  padding: 0.15em 0.15em 0.15em 0;
  vertical-align: bottom;
}

.link-text:hover{
  text-decoration: none;
  color: royalblue;
}
.white-link-button{
  height: 2em;
  display: block;
  box-sizing: border-box;
  text-decoration: none;
  background: white;
  border: cornflowerblue solid 0.1em;
  border-radius: 2em;
  text-align: center;
  color: cornflowerblue;
  width: 10em;
}
.white-link-button:hover{
  background: cornflowerblue;
  color: white;
}
</style>