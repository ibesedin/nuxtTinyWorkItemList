<template>
  <div class="row">
    <div class="col-1">
      <NuxtLink :to="`/tasks/${task.id}`">
        {{ task.id }}
      </NuxtLink>
    </div>
    <div class="col">{{ task.name }}</div>
    <div class="col-2">
      {{ task.comments.length }} комментариев
    </div>
    <div class="col-1 right-align">{{ status }}</div>
    <div class="col-2">
      <button
        v-if="!task.isOpened"
        @click="$emit('open', task.id)"
      >
        Open
      </button>
      <button
        v-if="!task.isClosed"
        @click="$emit('close', task.id)"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
import Task from '~/classes/task';

export default {
  name: "TaskRow",
  props: {
    task: {
      type: Task,
      required: true
    },
  },
  computed: {
    status() {
      return this.task.getPropValueText('status');
    },
  },
};
</script>
