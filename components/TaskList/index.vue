<template>
  <div class="container">
    <div class="row">
      Current project: {{ projectId }}&nbsp;
      <button @click="addRandom">add task</button>
    </div>
    <div :class="['row', $style.listHeader]">
      <div class="col-1">ID</div>
      <div class="col">Название</div>
      <div class="col-2">Комментарии</div>
      <div class="col-1 right-align">Статус</div>
      <div class="col-3">Действия</div>
    </div>
    <TaskRow
      :class="['row', $style.listRow]"
      v-for="task in tasks"
      :key="task.id"
      v-bind="{ task }"
      @open="open"
      @close="close"
      @remove="removeTask"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import { TASK_STATUS } from '~/classes/task';
import TaskRow from '~/components/TaskRow';

export default {
  name: "TaskList",
  components: {
    TaskRow,
  },
  computed: {
    ...mapState(['projectId']),
    ...mapGetters(["tasks"])
  },
  methods: {
    ...mapActions([
      'addTask',
      'changeTaskStatus',
      'removeTask',
      'generateId',
    ]),
    async addRandom() {
      this.addTask({
        id: await this.generateId(),
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