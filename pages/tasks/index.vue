<template>
  <div class="container">
    <TaskList v-if="projectId" />
    <div v-else>
      Не выбран ни один проект.
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TaskList from '~/components/TaskList';

export default {
  name: 'PageMain',
  components: {
    TaskList,
  },
  computed: {
    ...mapState([
      'projectId',
    ]),
  },
};
</script>