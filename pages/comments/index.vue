<template>
  <div :class="$style.pageComments">
    <div v-if="currentProject" />
    <ProjectWarning v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProjectWarning from '~/components/ProjectWarning';

export default {
  components: {
    ProjectWarning,
  },
  computed: {
    ...mapGetters(['currentProject']),
  },
};
</script>

<style module>
.pageComments {

}
</style>