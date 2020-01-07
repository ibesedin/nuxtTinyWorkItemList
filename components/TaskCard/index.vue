<template>
  <div class="container">
    <div :class="['row', $style.blockHeader]">
      Свойства:
    </div>
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
    <div class="row">&nbsp;</div>
    <div :class="['row', $style.blockHeader]">
      Комментарии:
    </div>
    <div class="row">
      <CommentList
        :comments="task.comments"
        @add="addTaskComment"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Task from '~/classes/task';
import CommentList from '~/components/CommentList';

export default {
  name: "TaskCard",
  components: {
    CommentList,
  },
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
  methods: {
    ...mapActions([
      'addComment',
      'generateCommentId',
    ]),
    async addTaskComment() {
      this.addComment({
        id: await this.generateCommentId(),
        taskId: this.task.id,
        image: '/img/never_give_up.jpg',
        text: 'random text',
      });
    },
  },
};
</script>

<style module>
.blockHeader {
  font-weight: bold;
}
</style>
