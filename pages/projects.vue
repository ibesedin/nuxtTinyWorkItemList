<template>
  <div class="container">
    <div class="row">Select project:</div>
    <div
      v-for="project in projects"
      :key="project.id"
      class="row"
    >
      <div class="col">
        <a href="#" @click.prevent="select(project)">{{ project.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    projects: [
      {
        id: 'id1',
        name: 'Project1',
      },
    ],
  }),
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