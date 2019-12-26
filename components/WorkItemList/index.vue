<template>
  <div class="container">
    <div class="row">
      <button @click="addRandom">Add</button>
    </div>
    <div class="row list-header">
      <div class="col-1">Ид</div>
      <div class="col">Наименование</div>
      <div class="col-1 right-align">Статус</div>
      <div class="col-3" />
    </div>
    <WorkItem
      class="row list-row"
      v-for="item in workItems"
      :key="item.id"
      v-bind="item"
      @open="open"
      @close="close"
      @remove="remove"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { WORKITEM_STATES } from '~/constants';
import WorkItem from '~/components/WorkItem';

export default {
  components: {
    WorkItem,
  },
  computed: {
    ...mapGetters(["workItems"])
  },
  methods: {
    ...mapActions([
      'add',
      'setStatus',
      'remove',
      'generateId',
    ]),
    async addRandom() {
      this.add({
        id: await this.generateId(),
        name: new Date().toString(),
      });
    },
    open(id) {
      this.setStatus({
        id,
        status: WORKITEM_STATES.OPENED
      });
    },
    close(id) {
      this.setStatus({
        id,
        status: WORKITEM_STATES.CLOSED
      });
    },
  },
};
</script>
