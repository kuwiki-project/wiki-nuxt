<template>
  <div class="the-header">
    <NuxtLink to="/" class="header-kuwiki"> 京大wiki </NuxtLink>
    <div class="header-icons">
      <NuxtLink
        v-if="!$auth.loggedIn"
        class="button-white no-border"
        to="/auth/signup"
      >
        Sign Up
      </NuxtLink>
      <NuxtLink v-if="!$auth.loggedIn" class="button-white" to="/signin">
        Sign in
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  auth: false
}
</script>
<style>
.the-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-weight: 300;
  background: white;
}

.the-header .header-kuwiki {
  white-space: nowrap;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  background: white;
  border: 0.4em white solid;
  padding: 0 0.2em;
  margin: 0 0.5em;
  font-size: 1.3em;
  color: dimgray;
  text-decoration: none;
  border-radius: 0.5em;
}
.header-kuwiki:hover {
  background: whitesmoke;
  border: 0.4em whitesmoke solid;
}
.header-icons {
  margin: 0 0.4em 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.the-header .header-icon {
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  padding: 0em 0.8em;
  background: white;
  border: 0.4em white solid;
  border-radius: 0.2em;
  box-sizing: border-box;
}
.the-header .header-icon:hover {
  background: var(--color-pale);
  border: 0.4em var(--color-pale) solid;
  color: var(--color-link);
}
.current-page-link {
  background: white;
  border: 0.4em white solid;
}
.button-white {
  border-radius: 0.2em;
  padding: 0 0.6em;
  margin: 0 0.2em;
}
.no-border {
  border: transparent solid 0.1em;
}
</style>
