<template>
  <div :class="$style.pageProjects">
    <div>Проекты:</div>
    <div
      v-for="project in projects"
      :key="project.id"
    >
      <div class="col">
        <a href="#" @click.prevent="select(project)">{{ project.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'PageProjects',
  computed: {
    ...mapState([
      'projects',
    ]),
  },
  methods: {
    ...mapActions([
      'setProject',
    ]),
    select(project) {
      this.setProject(project.id);
      this.$router.push({ path: '/tasks' });
    },
  },
};
</script>

<style module>
.pageProjects {

}
</style>
