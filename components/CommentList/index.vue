<template>
  <div class="container">
    <div class="row">
      <button @click="$emit('add')">Добавить</button>
    </div>
    <div :class="['row', $style.listHeader]">
      <div class="col-1">ID</div>
      <div class="col-2">Тип</div>
      <div class="col-2">Изображение</div>
      <div class="col">Текст</div>
    </div>
    <CommentRow
      :class="['row', $style.listRow]"
      v-for="comment in comments"
      :key="comment.id"
      v-bind="{ comment }"
    />
  </div>
</template>

<script>
import CommentRow from '~/components/CommentRow';

export default {
  name: 'CommentList',
  components: {
    CommentRow,
  },
  props: {
    comments: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>

<style module>
.listHeader {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: plum;
}

.listRow {
  padding-bottom: 10px;
  padding-top: 10px;
}
.listRow:nth-child(even) {
  background-color: beige;
}
</style>
