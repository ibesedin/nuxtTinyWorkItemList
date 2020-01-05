<template>
  <div class="container">
    <TaskCard v-bind="item" />
  </div>
</template>

<script>
import TaskCard from '~/components/TaskCard';

export default {
  name: 'PageTasksId',
  components: {
    TaskCard,
  },
  validate({ params: { id } }) {
    return /^\d+$/.test(id);
  },
  asyncData({
    store: {
      getters: {
        tasks,
      },
    },
    error,
    params: {
      id,
    },
  }) {
    const idInt = parseInt(id, 10);
    const item = tasks.find(item => item.id === idInt);

    if (!item) {
      error({ statusCode: 404, message: 'Invalid work ID' });
    }
    
    return {
      item,
    };
  },
};
</script>