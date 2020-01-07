<template>
  <div :class="$style.pageTasks">
    <TaskList v-if="currentProject" />
    <ProjectWarning v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TaskList from '~/components/TaskList';
import ProjectWarning from '~/components/ProjectWarning';

export default {
  name: 'PageMain',
  components: {
    TaskList,
    ProjectWarning,
  },
  computed: {
    ...mapGetters(['currentProject']),
  },
};
</script>

<style module>
.pageTasks {

}
</style>