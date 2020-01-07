<template>
  <div class="container">
    <div v-if="currentProject">
      Текущий проект: {{ currentProject.name }}
    </div>
    <div v-else>
      <NuxtLink to="/projects">Выбрать проект</NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['currentProject']),
  },
};
</script>
