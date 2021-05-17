<template>
  <v-form>
    <v-text-field
      v-model="val"
      prepend-inner-icon="$search"
      clearable
      solo
      rounded
      :label="labeltext"
      @input="$emit('update', $event)"
    />
    {{ val }}
  </v-form>
</template>
<script>
export default {
  props: {
    labeltext: String,
  },
  data: () => ({
    val: "",
  }),
}
</script>
<style scoped>
>>> .v-text-field {
  width: 350px;
}
>>> .v-input__prepend-inner {
  padding-right: 10px !important;
}
</style>
