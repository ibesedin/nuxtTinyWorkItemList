<template>
  <div class="row">
    <div class="col-1">
      <NuxtLink :to="`/works/${id}`">
        {{ id }}
      </NuxtLink>
    </div>
    <div class="col">{{ name }}</div>
    <div class="col-2">
      0 комментариев
    </div>
    <div class="col-1 right-align">{{ status }}</div>
    <div class="col-3">
      <button
        v-if="!isOpened"
        @click="$emit('open', id)"
      >
        Open
      </button>
      <button
        v-if="!isClosed"
        @click="$emit('close', id)"
      >
        Close
      </button>
      <button @click="$emit('remove', id)">Remove</button>
    </div>
  </div>
</template>

<script>
import { WORKITEM_STATUSES } from '~/constants';

export default {
  name: "WorkItemRow",
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 0
    },
    status: {
      type: String,
      default: WORKITEM_STATUSES.CREATED,
    },
  },
  computed: {
    isOpened() {
      return this.status === WORKITEM_STATUSES.OPENED;
    },
    isClosed() {
      return this.status === WORKITEM_STATUSES.CLOSED;
    },
  }
};
</script>
