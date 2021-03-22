<template>
  <v-text-field
    type="password"
    :value="value"
    :rules="Rules"
    placeholder="パスワード確認"
    required
    @input.native="$emit('input', $event.target.value)"
  >
  </v-text-field>
</template>
<script>
export default {
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    value: {
      type: String
    }
  },
  computed: {
    Rules() {
      return [(v) => Boolean(v) || "必須", (v) => v.length > 7 || "8文字以上"]
    }
  }
}
</script>
