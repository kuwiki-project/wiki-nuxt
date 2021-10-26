<template>
  <div>
    <theHeader />
    <Nuxt />
  </div>
</template>
<style>
.scroll-page{
  width: 90%;
  margin: 0 auto;
}
.one-page {
  height: 85vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

:root {
  font-family: "Noto Sans JP";
  text-decoration: none;
  font-size: 15px;
  color: gray;
  line-height: 1.8em;
  font-weight: 400;
  --color-primary: cornflowerblue;
  --color-success:  lightseagreen;
  --color-accent:  #faaca8;
  --color-danger: gold;
  --color-info: cornflowerblue;
}

h1{
  font-size: 1.5em !important;
  margin: 1em 0;
}

h1, h2, h3, h4, h5, h6{
  font-weight: 400;
}
h3 {
  color: lightseagreen;
  font-weight: 400;
}
/* Set toast color */
.success{
  background: var(--color-success) !important;
}

.info{
  background: var(--color-info) !important;
}

.input {
  font-weight: 400;
  width: 100%;
  height: 2em;
  outline: none;
  border: none;
  box-sizing: border-box;
  border-radius: 0.4em;
  display: block;
  background-color: whitesmoke;
  padding: 0 0.5em;
}
.input::placeholder {
  color: silver;
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
a:hover{
  color: royalblue;
}
.link-text{
  display: inline-block;
  color: cornflowerblue;
  background-color: whitesmoke;
  text-decoration: underline solid;
  padding: 0 0.05em;
}
.link-text .link-icon{
  padding: 0.05em 0.20em 0.05em 0;
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