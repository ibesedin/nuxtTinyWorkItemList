<template>
  <div :class="['container', $style.appHeader]">
    <div class="row">
      <div class="col">
        <NuxtLink to='/'>
          Home
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
