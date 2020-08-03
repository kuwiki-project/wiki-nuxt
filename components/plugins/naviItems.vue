<template>
  <v-list nav dense rounded>
  <v-list-item
    v-for="item in items"
    :key="item.text"
    :to="item.link"
    link >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>
        {{ item.text }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  </v-list>
</template>
<script>
export default {
  props: ['items'],
  }
</script>
