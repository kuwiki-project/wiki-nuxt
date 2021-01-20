<template>
  <v-footer dark padless class="info">
    <v-col class="text-center" cols="12">
      <v-card-text>
        <v-btn
          v-for="externalItem in externalItems"
          :key="externalItem.icon"
          class="mx-4 white--text"
          icon
          :to="externalItem.link"
        >
          <component :is="externalItem.icon"></component>
        </v-btn>
      </v-card-text>
      <v-card-text>
        <span
          v-for="(internalItem, index) in internalItems"
          :key="internalItem.text"
        >
          <span v-if="index != 0" v-html="partition"></span>
          <NuxtLink :to="internalItem.link" class="white--text">
            {{ internalItem.text }}
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
import { TwitterIcon, GithubIcon, MailIcon } from "vue-feather-icons"
export default {
  components: {
    TwitterIcon,
    GithubIcon,
    MailIcon,
  },
  data: () => ({
    partition: "　|　",
    externalItems: [
      {
        icon: "twitter-icon",
        link: "/terms",
      },
      {
        icon: "github-icon",
        link: "/contact",
      },
      {
        icon: "mail-icon",
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
    ],
  }),
}
</script>
<style>
a {
  text-decoration: none;
}
</style>
