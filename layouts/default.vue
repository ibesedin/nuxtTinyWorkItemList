<template>
  <div>
    <AppHeader />
    <nuxt/>
  </div>
</template>

<script>
export default {
  components: {
    AppHeader: async () => await import('~/components/AppHeader'),
  },
};
</script>

<style>
.right-align {
  text-align: right;
}
</style>