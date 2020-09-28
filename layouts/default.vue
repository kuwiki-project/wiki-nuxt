<template>
  <v-app id='navi'>
  <v-app-bar app flat dense dark class="indigo accent-1">
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    <v-toolbar-title>京大wiki</v-toolbar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <v-list-item-group v-model="group">
        <v-list-item link v-for="item in items" :key="item.text" :to="item.link" >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
         <v-list-item-content>
           <v-list-item-title>
            {{ item.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</v-navigation-drawer>
<v-main>
  <nuxt />
</v-main>
</v-app>
</template>
<script>
export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [{
          icon: 'mdi-home-variant-outline',
          text: 'ホーム',
          link: '/'
        },
        {
          icon: 'mdi-file-search-outline',
          text: '科目検索',
          link: '/courses'
        },
        {
          icon: 'mdi-email-outline',
          text: '問い合わせ',
          link: ''
        },
        {
          icon: 'mdi-account',
          text: 'サインイン',
          link: '/signin'
        }
      ]
    }),
  }
</script>
