<template>
  <div class="container">
    <div class="row">
      <button @click="addRandom">Add</button>
    </div>
    <div :class="['row', $style.listHeader]">
      <div class="col-1">ID</div>
      <div class="col">Название</div>
      <div class="col-2">Комментарии</div>
      <div class="col-1 right-align">Статус</div>
      <div class="col-3">Действия</div>
    </div>
    <WorkItemRow
      :class="['row', $style.listRow]"
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
import { WORKITEM_STATUSES } from '~/constants';
import WorkItemRow from '~/components/WorkItemRow';

export default {
  name: "WorkItemList",
  components: {
    WorkItemRow,
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
        status: WORKITEM_STATUSES.OPENED
      });
    },
    close(id) {
      this.setStatus({
        id,
        status: WORKITEM_STATUSES.CLOSED
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