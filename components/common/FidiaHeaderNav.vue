<template>
  <nav class="header-nav fidia-pad d-flex justify-content-between align-items-center">
    <div class="d-flex justify-content-between">
      <img src="/untitled-ui.png" alt="Untitled UI" title="Untitled UI" class="app-logo">
      <span class="app-name ml-2 mr-4">Untitled UI</span>
      <div class="d-none d-lg-flex flex-column flex-lg-row">
        <FidiaTab v-for="(tab, index) in tabItems" :key="index" :tab="tab" :class="[{ 'active-route': activeRoute(tab.address) }]" />
      </div>
    </div>

    <div class="d-none d-lg-flex flex-column flex-lg-row">
      <FidiaButton image-left img-url="/svgs/icons/icon-flash.svg" button-name="Upgrade now" />

      <img src="/svgs/icons/icon-gear.svg" alt="⚙️" title="Settings" class="mr-3" tabindex="0">
      <img src="/svgs/icons/icon-bell.svg" alt="🔔" title="Notifications" class="mr-3" tabindex="0">
      <img src="/img/users/user-1.png" alt="User Avatar" title="User Avatar" class="user-avatar" tabindex="0">
    </div>

  <SlideTransition dir="'down'">
    <FidiaMobileMenu :tab-items="tabItems" class="d-lg-none" />
  </SlideTransition>

    <img src="/svgs/icons/icon-hamburger.svg" alt="＝" title="Menu" tabindex="0" class="d-lg-none" @click="updateNavState">
  </nav>
</template>

<script>
import FidiaMobileMenu from '~/components/common/FidiaMobileMenu.vue';

export default {
  name: 'FidiaHeaderNav',

  components: {
    FidiaMobileMenu
  },

  data() {
    return {
      tabItems: [
        {
          name: 'Home',
          address: '',
        },
        {
          name: 'Dashboard',
          address: 'dashboard-overview',
        },
        {
          name: 'Projects',
          address: '',
        },
        {
          name: 'Tasks',
          address: '',
        },
        {
          name: 'Reporting',
          address: '',
        },
        {
          name: 'Users',
          address: '',
        },
      ],
    };
  },

  methods: {
    updateNavState () {
      this.$store.dispatch('updateNavState');
    }
  }
};
</script>

<style scoped>
.header-nav {
  position: sticky;
  top: 0;
  left: 0;
  height: 60px;
  border-bottom: 1px solid var(--fidia-gray-fade-1);
  z-index: 1;
}

.app-logo {
  width: 30px;
}

.app-name {
  font-size: 18px;
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
</style>
