<template>
  <div class="fixed-page">
    <div class="top-icon">
      <iconKiwi2 class="icon-kiwi" />
      <div class="title-kuwiki">京大wiki</div>
      <div class="kuwiki-is">京大生のための情報サイト</div>
    </div>

    <div class="item-container">
      <NuxtLink class="item" to="/search">
        <SearchIcon class="item-icon" stroke-width="1.5" />
        <div class="item-label">科目検索</div>
      </NuxtLink>

      <NuxtLink class="item" to="/upload-exams">
        <UploadCloudIcon class="item-icon" stroke-width="1.5" />
        <div class="item-label">過去問提供</div>
      </NuxtLink>

      <NuxtLink to="/notice" class="item">
        <BellIcon class="item-icon" stroke-width="1.5" />
        <div class="item-label">お知らせ</div>
      </NuxtLink>
    </div>

    <div class="item-container">
      <NuxtLink to="/profile" class="item">
        <FeatherIcon class="item-icon" stroke-width="1.5" />
        <div class="item-label">運営について</div>
      </NuxtLink>

      <NuxtLink to="faq" class="item">
        <HelpCircleIcon class="item-icon" stroke-width="1.5" />
        <div class="item-label">よくある質問</div>
      </NuxtLink>

      <NuxtLink v-if="$auth.loggedIn" to="/settings" class="item">
        <SettingsIcon class="item-icon" stroke-width="1.5" />
        <div class="item-label">設定</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import {
  SearchIcon,
  HelpCircleIcon,
  UploadCloudIcon,
  BellIcon,
  FeatherIcon,
  SettingsIcon
} from "vue-feather-icons"

export default {
  auth: false,
  components: {
    SearchIcon,
    UploadCloudIcon,
    BellIcon,
    HelpCircleIcon,
    FeatherIcon,
    SettingsIcon
  }
}
</script>
<style scoped>
.top-icon {
  text-align: center;
  margin: 0 0 1.5em 0;
}

.item-container {
  display: flex;
  color: inherit;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0.3em 0;
}

.item-container .item {
  display: inline-flex;
  border-radius: 1em;
  width: 5em;
  height: 5em;
  color: black;
  margin: 0 0.1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.item .item-icon {
  height: 2em;
  width: 2em;
  margin: 0.1em 0 0 0;
}

.item .item-label {
  font-size: 0.7em;
  color: dimgray;
}

a {
  text-decoration: none;
}

.item:hover {
  background-color: var(--color-pale);
}
.item:hover .item-label {
  color: var(--color-link);
}
</style>
