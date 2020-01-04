<template>
  <div class="container">
    <div
      v-for="item in propTable"
      :key="item.label"
      class="row"
    >
      <div class="col-2">
        {{ item.label }}
      </div>
      <div class="col">
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script>
import {
  WORKITEM_STATUSES,
  PROP_KEYS,
  PROP_NAMES,
} from '~/constants';

export default {
  name: "WorkItemCard",
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: WORKITEM_STATUSES.CREATED,
    },
  },
  computed: {
    propTable() {
      return Object.values(PROP_KEYS).map(key => ({
        label: PROP_NAMES[key],
        value: this[key],
      }));
    },
  },
};
</script>