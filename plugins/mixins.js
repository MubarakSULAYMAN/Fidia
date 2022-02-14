import Vue from 'vue';
import { mapGetters } from 'vuex';

Vue.mixin({
  computed: {
    ...mapGetters({
      isNavOpen: 'isNavOpen'
    })
  },

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
