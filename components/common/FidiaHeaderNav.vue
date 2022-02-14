<template>
  <nav class="header-nav fidia-pad d-flex justify-content-between align-items-center">
    <div class="d-flex justify-content-between">
      <img src="/untitled-ui.png" alt="Untitled UI" title="Untitled UI" class="app-logo">
      <span class="app-name ml-2 mr-4">Untitled UI</span>
      <FidiaTab v-for="(tab, index) in tabItems" :key="index" :tab="tab" :class="[{ 'active-route': activeRoute(tab.address) }]" />
    </div>

    <div class="d-flex">
      <FidiaButton image-left img-url="/svgs/icons/icon-flash.svg" button-name="Upgrade now" />

      <img src="/svgs/icons/icon-gear.svg" alt="⚙️" title="Settings" class="mr-3" tabindex="0">
      <img src="/svgs/icons/icon-bell.svg" alt="🔔" title="Notifications" class="mr-3" tabindex="0">
      <img src="/img/users/user-1.png" alt="User Avatar" title="User Avatar" class="user-avatar" tabindex="0">
    </div>
  </nav>
</template>

<script>
export default {
  name: 'FidiaHeaderNav',

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
};
</script>

<style scoped>
.header-nav {
  height: 60px;
  border-bottom: 1px solid var(--fidia-gray-fade-1);
}

.app-logo {
  width: 30px;
}

.app-name {
  font-size: 18px;
}

.user-avatar {
  width: 36px;
}
</style>
