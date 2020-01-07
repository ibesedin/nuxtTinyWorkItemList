<template>
  <div>
    <div class="col-1">
      <NuxtLink :to="`/tasks/${task.id}`">
        {{ task.id }}
      </NuxtLink>
    </div>
    <div class="col">{{ task.name }}</div>
    <div class="col-2">{{ commentCount }}</div>
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
import { decline } from '~/utils';

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
    commentCount() {
      const word = `комментари${decline(this.task.comments.length, 'й', 'я', 'ев')}`;
      return `${this.task.comments.length} ${word}`;
    },
  },
};
</script>
