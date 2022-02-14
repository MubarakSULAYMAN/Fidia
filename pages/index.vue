<template>
  <div>
    <!-- TODO: Add an app loader GIF -->
    Loading...
  </div>
</template>

<script>
export default {
  name: 'FidiaHome',

  asyncData({ redirect }) {
    return redirect('/dashboard/overview');
  },

  head: {
    title: 'Page Loading...',
  },
};
</script>

<style scoped>
</style>
