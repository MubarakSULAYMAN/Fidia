<template>
  <div class="page-container">
    <FidiaHeaderNav />

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
