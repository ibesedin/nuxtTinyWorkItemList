<template>
  <img
    :src="value"
    :class="$style.root"
  />
</template>

<script>
export default {
  name: 'ImageEditor',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style module>
.root {
  max-width: 50%;
}
</style>
