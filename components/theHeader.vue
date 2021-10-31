<template>
  <div class="the-header">
    <NuxtLink to="/" class="header-kuwiki">
      京大wiki
    </NuxtLink>
    <div class="header-icons">
      <NuxtLink to="/search" active-class="current-page-link" class="header-icon">
        <SearchIcon size="1.5x" />
      </NuxtLink>

    
      <NuxtLink v-if="$auth.loggedIn" to="/settings" exact-active-class="current-page-link" class="header-icon">
        <SettingsIcon size="1.5x" />
      </NuxtLink>

      <NuxtLink v-if="!$auth.loggedIn" to="/signin" exact-active-class="current-page-link" class="header-icon">
        <LogInIcon size="1.5x" />
      </NuxtLink>
    </div>
  </div>
</template>
<script>
import { SearchIcon,SettingsIcon, LogInIcon } from "vue-feather-icons"
export default {
  auth: false,
  components: {
    SearchIcon,
    SettingsIcon,
    LogInIcon
  }
}
</script>
<style>
.the-header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-weight: 300;
  height: 10vh;
  background: white;
}

.header-kuwiki{
  white-space: nowrap;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  background: white;
  border: 0.4em white solid;
  padding: 0 0.2em;
  margin:0 0.5em;
  font-size: 1.3em;
  color: silver;
  text-decoration: none;
  border-radius: 0.2em;
}
.header-kuwiki:hover{
  background: whitesmoke;
  border: 0.4em whitesmoke solid;
  color: gray;
}
.header-icons{
  margin: 0 0.4em 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.header-icon{
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-accent);
  display: flex;
  align-items: center;
  padding: 0em 0.8em;
  background: white;
  border: 0.4em white solid;
  border-radius: 0.2em;
  box-sizing: border-box;
}
.header-icon:hover{
  background: mistyrose;
  border: 0.4em mistyrose solid;
  color: var(--color-accent);
}
.current-page-link{
  background:white;
  border: 0.4em white solid; 
}
</style>

