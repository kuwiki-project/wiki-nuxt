<template>
<v-list nav dense rounded>
<v-list-item
  v-for="item in items"
  :key="item.text"
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
  data: () => ({
    items: [
      { icon: 'mdi-file-outline', text: '過去問検索' },
      { icon: 'mdi-video-account', text: '教員検索' },
      { icon: 'mdi-file-upload-outline', text: '過去問提供' },
    ]
    })
  }
</script>
