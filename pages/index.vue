<template>
  <div class="fixed-page">
    <div class="top-icon">
      <iconKiwi class="icon-kiwi" />
      <div class="title-kuwiki">京大wiki</div>
      <div class="kuwiki-is">京大生のための情報サイト</div>
    </div>

    <div class="item-container">
      <div class="item-link-and-label">
        <NuxtLink to="/search" class="item-link">
          <SearchIcon class="item-icon" stroke-width="1.5" size="2x" />
        </NuxtLink>
        <div class="item-label">過去問検索</div>
      </div>

      <div class="item-link-and-label">
        <NuxtLink to="/upload-exams" class="item-link">
          <UploadCloudIcon class="item-icon" stroke-width="1.5" size="2x" />
        </NuxtLink>
        <div class="item-label">過去問提供</div>
      </div>

      <div class="item-link-and-label">
        <NuxtLink to="/notice" class="item-link">
          <PaperclipIcon class="item-icon" stroke-width="1.5" size="2x" />
        </NuxtLink>
        <div class="item-label">お知らせ</div>
      </div>
    </div>

    <div class="item-container">
      <div class="item-link-and-label">
        <NuxtLink to="/profile" class="item-link">
          <FeatherIcon class="item-icon" stroke-width="1.5" size="2x" />
        </NuxtLink>
        <div class="item-label">運営について</div>
      </div>

      <div class="item-link-and-label">
        <NuxtLink to="faq" class="item-link">
          <HelpCircleIcon class="item-icon" stroke-width="1.5" size="2x" />
        </NuxtLink>
        <div class="item-label">よくある質問</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SearchIcon,
  HelpCircleIcon,
  UploadCloudIcon,
  PaperclipIcon,
  FeatherIcon
} from "vue-feather-icons"
export default {
  auth: false,
  components: {
    SearchIcon,
    UploadCloudIcon,
    PaperclipIcon,
    HelpCircleIcon,
    FeatherIcon
  }
}
</script>
<style scoped>
.top-icon {
  text-align: center;
  margin: 0 0 1.5em 0;
}

.kuwiki-is {
  font-weight: 300;
}

.item-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0.5em 0 0.5em 0;
}

.item-link-and-label {
  display: block;
  box-sizing: border-box;
  flex-direction: column;
  width: 5em;
  text-align: center;
  justify-content: center;
}

.item-link {
  color: gray;
  background: transparent;
  display: flex;
  border-radius: 1.5em;
  margin: 0 auto;
  height: 3.5em;
  width: 3.5em;
}
.item-link:hover {
  background: mistyrose;
  color: var(--color-accent);
}

.item-label {
  font-size: 0.7em;
  margin: -0.7em 0;
}

.item-icon {
  display: block;
  height: 2em;
  width: 2em;
  margin: auto auto;
}
</style>
