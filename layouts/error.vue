<template>
  <div class="wrapper">
    <div v-if="error.statusCode === 404" class="mt-5 text-center">
      <h1 class="mb-3 display-1 text-red font-weight-bold">404</h1>
      <h3 class="h1 font-weight-bold">{{ pageNotFound }}</h3>
    </div>

    <div v-else class="mt-5 text-center">
      <h1 class="mb-3 display-1 text-red font-weight-bold">
        {{ error.statusCode }}
      </h1>
      <h3 class="h1 font-weight-bold">{{ otherError }}</h3>
    </div>

    <h3 class="mt-5 text-center">
      Let's help you get to a safe place, (<NuxtLink
        to="/"
        class="font-weight-bold text-purple"
      >
        Home
      </NuxtLink>
      ).
    </h3>
    <p class="mt-3 text-secondary text-center">
      We are always working to improve our system.
    </p>
  </div>
</template>

<script>
export default {
  layout: 'empty',

  props: {
    error: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      pageNotFound: 'Page not found',
      brokenSystem: 'This app has broken down',
      otherError: 'An error occurred',
    };
  },

  head() {
    const title =
      this.error.statusCode === 404
        ? this.pageNotFound
        : this.error.statusCode === 500
        ? this.brokenSystem
        : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
.wrapper {
  width: 100vw;
  min-height: calc(100vh - 20rem);
}

a:hover {
  text-decoration: underline;
}
</style>
