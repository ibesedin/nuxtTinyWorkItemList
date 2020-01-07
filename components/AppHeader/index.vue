<template>
  <div :class="$style.appHeader">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/projects">Projects</NuxtLink>
    <NuxtLink to="/tasks">Tasks</NuxtLink>
    <NuxtLink to="/comments">Comments</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style module>
.appHeader {
  margin-bottom: 20px;
}
</style>

<style>
.nuxt-link-exact-active {
  font-weight: bold;
}
</style>
