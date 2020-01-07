<template>
  <div :class="$style.appHeader">
    <div class="row">
      <div class="col">
        <NuxtLink to='/'>
          Home
        </NuxtLink>
        <NuxtLink to="/projects">
          Projects
        </NuxtLink>
        <NuxtLink to="/tasks">
          Tasks
        </NuxtLink>
        <NuxtLink to="/comments">
          Comments
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
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
