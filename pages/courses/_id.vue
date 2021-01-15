<template>
  <v-main>
    <v-container class="fill-height">
      <div>{{ $route.params.id }}</div>
      <div>{{ course.name }}</div>
      <div>{{ course.field.name }}</div>
      <!-- <div>{{ course.exam.link }}</div> -->
      <a v-if="course.exam !== undefined" :href="course.exam.link">過去問 </a>
    </v-container>
  </v-main>
</template>
<script>
import axios from "axios";
export default {
  validate(context) {
    // 数値でなければならない
    return /^\d+$/.test(context.params.id);
  },
  async asyncData(context) {
    const courseId = context.params.id;
    const courseDetailUrl =
      context.$config.WIKI_API_URL + "/courses/" + courseId;
    const { data } = await axios.get(courseDetailUrl, {
      headers: {
        Authorization:
          "token" + this.$auth.getToken("local").replace("Bearer", ""),
      },
    });
    return {
      course: data,
    };
  },
};
</script>
