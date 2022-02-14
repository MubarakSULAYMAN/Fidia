<template>
  <div class="page-container">
    <FidiaHeaderNav class="bg-white" />

    <Nuxt />
  </div>
</template>

<script>
import FidiaHeaderNav from '~/components/common/FidiaHeaderNav';

export default {
  name: 'DefaultLayout',

  components: {
    FidiaHeaderNav,
  },
};
</script>

<style scoped>
</style>
