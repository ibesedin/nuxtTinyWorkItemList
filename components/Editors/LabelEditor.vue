<template>
  <div v-html="value" />
</template>

<script>
export default {
  name: 'LabelEditor',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
