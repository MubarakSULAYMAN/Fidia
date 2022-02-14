import Vue from 'vue';

Vue.mixin({
  methods: {
    parseStaticUrl(path = '/') {
      if (this.$config.staticPath) {
        return `${this.$config.staticPath}${path}`;
      }
      return path;
    },

    activeRoute(address) {
      const currentRoute = this.$route.name;

      if (currentRoute === address) {
        return true;
      }
    },
  }
});
