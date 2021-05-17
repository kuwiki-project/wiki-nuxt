<template>
  <v-card flat>
    <v-card-text>
      <div>contact</div>
      <span v-for="Item in Items" :key="Item.icon">
        <buttonExternalLink
          :btn-link="Item.link"
          :btn-icon="Item.icon"
          btn-class="secondary--text"
        />
      </span>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
    data: () => ({
        Items: [
      {
        icon: "$twitter",
        link: "https://twitter.com/kuwiki99"
      },
      {
        icon: "$github",
        link: "https://github.com/kuwiki-project"
      },
      {
        icon: "$mail",
        link: "mailto: kuwiki99@gmail.com"
      }
    ]
    })
}
</script>
