<template>
  <div :class="$style.pageTaskId">
    <TaskCard
      v-if="task"
      v-bind="{ task }"
    />
    <div v-else>
      Задача с ID {{ id }} не найдена.
    </div>
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
    params: {
      id,
    },
  }) {
    const idInt = parseInt(id, 10);
    const task = tasks.find(item => item.id === idInt) || null;

    return {
      id,
      task,
    };
  },
};
</script>

<style module>
.pageTaskId {

}
</style>
