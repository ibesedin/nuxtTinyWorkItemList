<template>
  <div :class="$style.pageMain">
    <div v-if="currentProject">
      Текущий проект: {{ currentProject.name }}
    </div>
    <ProjectWarning v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProjectWarning from '~/components/ProjectWarning';

export default {
  name: 'PageMain',
  components: {
    ProjectWarning,
  },
  computed: {
    ...mapGetters(['currentProject']),
  },
};
</script>

<style module>
.pageMain {

}
</style>
