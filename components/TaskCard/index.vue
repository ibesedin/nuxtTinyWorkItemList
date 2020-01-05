<template>
  <div class="container">
    <div
      v-for="prop in propTable"
      :key="prop.label"
      class="row"
    >
      <div class="col-2">
        {{ prop.label }}
      </div>
      <div class="col">
        {{ prop.value }}
      </div>
    </div>
  </div>
</template>

<script>
import Task from '~/classes/task';

export default {
  name: "TaskCard",
  props: {
    task : {
      type: Task,
      required: true,
    },
  },
  computed: {
    propTable() {
      return this.task.getPropTable();
    },
  },
};
</script>