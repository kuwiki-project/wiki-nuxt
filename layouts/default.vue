<template>
  <v-app id="default">
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-divider />
      <drawerProfile />
      <v-card-actions>
        <buttonSignup />
        <buttonSignin />  
      </v-card-actions>
      <drawerList />

      <drawerSns />
    </v-navigation-drawer>
    <v-app-bar app flat absolute color="white">
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon color="secondary">$menu</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        <NuxtLink to="/" class="grey--text">京大wiki</NuxtLink>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        v-for="item in items"
        :key="item.icon"
        text
        color="secondary"
        :to="item.link"
      >
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>

      <v-btn v-if="$auth.loggedIn" text color="secondary" to="/settings">
        <v-icon>$settings</v-icon>
      </v-btn>

      <v-btn v-if="!$auth.loggedIn" text color="secondary" to="/signin">
        <v-icon>$login</v-icon>
      </v-btn>
    </v-app-bar>
    <Nuxt />
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    tabs: null,
    items: [
      {
        icon: "$grid",
        link: "/"
      },
      {
        icon: "$search",
        link: "/search"
      },
      {
        icon: "$book",
        link: "/wiki"
      }
    ]
  })
}
</script>
<style>
.v-application a {
  text-decoration: none;
}
.v-application {
  font-family: "Noto Sans JP" !important;
}
.v-application .v-messages__message {
  color: var(--v-error-darken1) !important;
}

h1 {
  font-weight: 500;
}
h2 {
  font-weight: 500;
}
h3 {
  font-weight: 500;
  margin: 20pt 0pt 5pt;
}

h4 {
  font-weight: 500;
  margin: 10pt 0pt 5pt;
}
h5 {
  font-weight: 500;
}
h6 {
  font-weight: 500;
}

strong {
  font-weight: 500;
}
ul {
  padding-left: 1em;
}

.hutoji {
  font-weight: 500;
}
</style>
