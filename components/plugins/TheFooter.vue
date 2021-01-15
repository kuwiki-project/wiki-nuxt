<template>
  <v-footer dark padless class="info">
  <v-col class='text-center' cols='12'>
    <v-card-text>
      <v-btn v-for="externalItem in externalItems" :key="externalItem.text" class="mx-4 white--text" icon :to="externalItem.link">
        <v-icon size="24px">
          {{ externalItem.icon }}
        </v-icon>
      </v-btn>
    </v-card-text>
    <v-card-text>
    <span v-for="(internalItem, index ) in internalItems" :key="internalItem.text" >
      <span v-if='index!=0'> 　|　</span>
      <NuxtLink  :to='internalItem.link' class="white--text">
        {{  internalItem.text  }}
      </NuxtLink>
    </span>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text class="white--text">
      {{ new Date().getFullYear() }} — <strong>京大wiki</strong>
    </v-card-text>
  </v-col>
</v-footer>
</template>
<script>
export default {
  data: () => ({
    externalItems: [
      {
        icon: "mdi-twitter",
        link: "/terms",
      },
      {
        icon: "mdi-github",
        link: "/contact",
      },
      {
        icon: "mdi-email",
        link: "/related",
      },
    ],
    internalItems: [
      {
        text: "利用規約",
        link: "/terms",
      },
      {
        text: "お問い合わせ",
        link: "/contact",
      },
      {
        text: "関連サイト",
        link: "/related",
      },
    ]
  })
}
</script>
<style>
a {
  text-decoration: none;
}
</style>
