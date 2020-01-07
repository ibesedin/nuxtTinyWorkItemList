<template>
  <div>
    <div class="col-1">
      <NuxtLink :to="`/comments/${comment.id}`">
        {{ comment.id }}
      </NuxtLink>
    </div>
    <div class="col-2">{{ type }}</div>
    <div class="col-2">
      <img
        :class="$style.commentRowImage"
        :src="comment.image">
    </div>
    <div class="col">{{ comment.text }}</div>
  </div>
</template>

<script>
import Comment from '~/classes/comment';

export default {
  name: 'CommentRow',
  props: {
    comment: {
      Type: Comment,
      required: true,
    },
  },
  computed: {
    type() {
      return this.comment.getPropValueText('type');
    },
  },
};
</script>

<style module>
.commentRowImage {
  width: 64px;
  height: 64px;
}
</style>
