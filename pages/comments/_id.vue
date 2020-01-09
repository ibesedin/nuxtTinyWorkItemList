<template>
  <div :class="$style.pageCommentId">
    <CommentCard
      v-if="comment"
      v-bind="{ comment }"
    />
    <div v-else>
      Комментарий с ID {{ id }} не найден.
    </div>
  </div>
</template>

<script>
import CommentCard from '~/components/CommentCard';

export default {
  name: 'PageCommentId',
  components: {
    CommentCard,
  },
  validate({ params: { id } }) {
    return /^\d+$/.test(id);
  },
  asyncData({
    store: {
      getters: {
        comments,
      },
    },
    params: {
      id,
    },
  }) {
    const idInt = parseInt(id, 10);
    const comment = comments.find(item => item.id === idInt) || null;

    return {
      id,
      comment,
    };
  },
};
</script>

<style module>
.pageCommentId {

}
</style>
