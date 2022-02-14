<template>
  <nav
    :class="[
    isNavOpen ? 'd-flex' : 'd-none',
    'menu fidia-pad bg-white flex-column'
  ]">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <FidiaButton image-left img-url="/svgs/icons/icon-flash.svg" button-name="Upgrade now" />

      <img src="/svgs/icons/icon-gear.svg" alt="⚙️" title="Settings" class="mr-3" tabindex="0">
      <img src="/svgs/icons/icon-bell.svg" alt="🔔" title="Notifications" class="mr-3" tabindex="0">
      <img src="/img/users/user-1.png" alt="User Avatar" title="User Avatar" class="user-avatar" tabindex="0">
    </div>

    <div class="d-flex flex-column flex-md-row mb-2">
      <FidiaTab v-for="(tab, index) in tabItems" :key="index" :tab="tab" :class="[{ 'active-route': activeRoute(tab.address) }]" />
    </div>

    <FidiaSearch :search-term="searchTerm" @make-search="makeSearch" />
  </nav>
</template>

<script>
export default {
  name: 'FidiaMobileMenu',

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
    makeSearch () {}
  }
};
</script>

<style scoped>
.menu {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: fit-content;
  padding-top: 20px;
  padding-bottom: 20px;
  z-index: 2;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
</style>
