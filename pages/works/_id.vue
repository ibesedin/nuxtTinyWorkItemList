<template>
  <div class="container">
    <WorkItemCard v-bind="item" />
  </div>
</template>

<script>
import WorkItemCard from '~/components/WorkItemCard';

export default {
  name: 'PageWorksId',
  components: {
    WorkItemCard,
  },
  validate({ params: { id } }) {
    return /^\d+$/.test(id);
  },
  asyncData({
    store: {
      getters: {
        workItems
      },
    },
    error,
    params: {
      id,
    },
  }) {
    const idInt = parseInt(id, 10);
    const item = workItems.find(item => item.id === idInt);

    if (!item) {
      error({ statusCode: 404, message: 'Invalid work ID' });
    }
    
    return {
      item,
    };
  },
};
</script>