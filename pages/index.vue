<template>
  <div class="container">
    <WorkItemList />
  </div>
</template>

<script>
import WorkItemList from '~/components/WorkItemList';

export default {
  name: 'PageMain',
  components: {
    WorkItemList,
  },
};
</script>