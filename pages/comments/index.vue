<template>
  <div :class="$style.pageComments">
    <CommentList
      v-if="currentProject"
      :comments="unassignedComments"
      @add="addUnassigned"
    />
    <ProjectWarning v-else />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CommentList from '~/components/CommentList';
import ProjectWarning from '~/components/ProjectWarning';

export default {
  name: 'PageComments',
  components: {
    CommentList,
    ProjectWarning,
  },
  computed: {
    ...mapGetters([
      'currentProject',
      'comments',
    ]),
    unassignedComments() {
      return this.comments.filter(c => !c.taskId);
    },
  },
  methods: {
    ...mapActions([
      'addComment',
      'generateCommentId',
    ]),
    async addUnassigned() {
      this.addComment({
        id: await this.generateCommentId(),
        image: '/img/never_give_up.jpg',
        text: 'random text',
      });
    },
  },
};
</script>

<style module>
.pageComments {

}
</style>
