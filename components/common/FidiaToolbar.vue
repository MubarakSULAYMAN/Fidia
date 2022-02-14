<template>
  <nav class="toolbar-area fidia-pad d-flex justify-content-between align-items-center">
    <div>
      <FidiaTab v-for="(tab, index) in tabItems" :key="index" :tab="tab" :class="{ 'active-route': activeRoute(tab.address) }" />
    </div>

    <FidiaSearch :search-term="searchTerm" @make-search="makeSearch" />
  </nav>
</template>

<script>
export default {
  name: 'FidiaToolbar',

  data () {
    return {
      tabItems: [
        {
          name: 'Overview',
          address: 'dashboard-overview',
        },

        {
          name: 'Notifications',
          address: '',
        },

        {
          name: 'Analytics',
          address: '',
        },

        {
          name: 'Saved reports',
          address: '',
        },

        {
          name: 'Trade history',
          address: '',
        },

        {
          name: 'User report',
          address: '',
        },
      ],

      searchTerm: ""
    };
  },

  methods: {
    makeSearch () {}
  }
};
</script>

<style scoped>
.toolbar-area {
  height: 60px;
  border-bottom: 1px solid var(--fidia-gray-fade-1);
}
</style>
