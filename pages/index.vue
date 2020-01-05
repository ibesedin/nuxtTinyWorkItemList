<template>
  <div class="container">
    <TaskList />
  </div>
</template>

<script>
import TaskList from '~/components/TaskList';

export default {
  name: 'PageMain',
  components: {
    TaskList,
  },
};
</script>