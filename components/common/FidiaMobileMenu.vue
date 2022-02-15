<template>
  <div :class="{ 'nav-mobile-wrapper': isNavOpen}" @click.self="updateNavState">
    <nav
      :class="[
      isNavOpen ? 'd-flex' : 'd-none',
      'menu fidia-pad bg-white flex-column'
    ]">
      <div class="d-flex flex-column flex-md-row">
        <FidiaTab v-for="(tab, index) in tabItems" :key="index" :tab="tab" :class="[{ 'active-route': activeRoute(tab.address) }]" />
      </div>

      <FidiaToolbar class="toolbar-mobile" />

      <div class="d-flex justify-content-between align-items-center mt-2">
        <FidiaButton image-left img-url="/svgs/icons/icon-flash.svg" button-name="Upgrade now" />

        <img src="/svgs/icons/icon-gear.svg" alt="⚙️" title="Settings" class="mr-3 mr-sm-0" tabindex="0">
        <img src="/svgs/icons/icon-bell.svg" alt="🔔" title="Notifications" class="mr-3 mr-sm-0" tabindex="0">
        <FidiaSearch :search-term="searchTerm" class="search-1" @make-search="makeSearch" />
        <img src="/img/users/user-1.png" alt="User Avatar" title="User Avatar" class="user-avatar" tabindex="0">
      </div>

      <FidiaSearch :search-term="searchTerm" class="search-2 mt-2" @make-search="makeSearch" />
    </nav>
  </div>
</template>

<script>
import FidiaToolbar from '~/components/common/FidiaToolbar';

export default {
  name: 'FidiaMobileMenu',

  components: {
    FidiaToolbar
  },

  props: {
    tabItems: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      searchTerm: ""
    };
  },

  methods: {
    makeSearch () {},

    updateNavState () {
      this.$store.dispatch('updateNavState');
    }
  }
};
</script>

<style scoped>
.nav-mobile-wrapper {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f9f5ff7c;
}

.menu {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: fit-content;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--fidia-gray-fade-1);
  z-index: 2;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.fidia-pad.toolbar-mobile {
  padding: 0;
  border-top: 1px solid var(--fidia-gray-fade-1);
}

@media screen and (min-width: 768px) {
  .search-2 {
    display: none !important;
  }
}

@media screen and (max-width: 425px) {
  .search-1 {
    display: none !important;
  }
}
</style>
