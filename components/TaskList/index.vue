<template>
  <div class="container">
    <div class="row">
      Проект: {{ currentProject.name }}&nbsp;
      <button @click="addRandom">Добавить</button>
    </div>
    <div :class="['row', $style.listHeader]">
      <div class="col-1">ID</div>
      <div class="col">Название</div>
      <div class="col-2">Комментарии</div>
      <div class="col-1 right-align">Статус</div>
      <div class="col-2">Действия</div>
    </div>
    <TaskRow
      :class="['row', $style.listRow]"
      v-for="task in tasks"
      :key="task.id"
      v-bind="{ task }"
      @open="open"
      @close="close"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { TASK_STATUS } from '~/classes/task';
import TaskRow from '~/components/TaskRow';

export default {
  name: "TaskList",
  components: {
    TaskRow,
  },
  props: {
    tasks: {
      type: Array,
      default: () => ([]),
    },
  },
  computed: {
    ...mapGetters(['currentProject']),
  },
  methods: {
    ...mapActions([
      'addTask',
      'changeTaskStatus',
      'generateTaskId',
    ]),
    async addRandom() {
      this.addTask({
        id: await this.generateTaskId(),
        name: new Date().toString(),
      });
    },
    open(id) {
      this.changeTaskStatus({
        id,
        status: TASK_STATUS.OPENED,
      });
    },
    close(id) {
      this.changeTaskStatus({
        id,
        status: TASK_STATUS.CLOSED,
      });
    },
  },
};
</script>

<style module>
.listHeader {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color:lightblue;
}

.listRow {
  padding-bottom: 10px;
  padding-top: 10px;
}
.listRow:nth-child(even) {
  background-color: beige;
}
</style>
