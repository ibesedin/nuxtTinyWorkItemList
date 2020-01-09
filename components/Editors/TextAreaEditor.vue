<template>
  <textarea
    v-html="value"
    :class="$style.root"
    v-bind="{ readonly }"
  />
</template>

<script>
export default {
  name: 'TextAreaEditor',
  props: {
    readonly: {
      type: Boolean,
      default: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style module>
.root {
  width: 100%;
  min-height: 100px;
}
</style>
