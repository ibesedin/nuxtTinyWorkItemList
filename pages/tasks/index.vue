<template>
  <div :class="$style.pageTasks">
    <TaskList
      v-if="currentProject"
      v-bind="{ tasks }"
    />
    <ProjectWarning v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TaskList from '~/components/TaskList';
import ProjectWarning from '~/components/ProjectWarning';

export default {
  name: 'PageTasks',
  components: {
    TaskList,
    ProjectWarning,
  },
  computed: {
    ...mapGetters([
      'currentProject',
      'tasks',
    ]),
  },
};
</script>

<style module>
.pageTasks {

}
</style>
