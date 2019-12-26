<template>
  <div>
    <div class="col-1">{{ id }}</div>
    <div class="col">{{ name }}</div>
    <div class="col-1 right-align">{{ status }}</div>
    <div class="col-3">
      <button @click="$emit('open', id)">Open</button>
      <button @click="$emit('close', id)">Close</button>
      <button @click="$emit('remove', id)">Remove</button>
    </div>
  </div>
</template>

<script>
import { WORKITEM_STATES } from '~/constants';

export default {
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
      default: "created"
    }
  },
};
</script>
