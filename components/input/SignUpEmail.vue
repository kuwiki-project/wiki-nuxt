<template>
  <v-text-field
    type="email"
    :value="value"
    :rules="Rules"
    placeholder="メールアドレス @st.kyoto-u.ac.jp"
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
      return [(v) => /^.+@st.kyoto-u.ac.jp$/u.test(v) || "必須"]
    }
  }
}
</script>
