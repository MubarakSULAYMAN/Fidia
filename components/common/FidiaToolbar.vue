<template>
  <nav
    :class="[
    isNavOpen ? 'd-flex' : 'd-none',
    'toolbar-area fidia-pad d-lg-flex flex-row justify-content-start justify-content-lg-between align-items-center align-items-center'
  ]">
    <div class="d-flex flex-column flex-md-row">
      <FidiaTab v-for="(tab, index) in tabItems" :key="index" :tab="tab" :class="{ 'active-route': activeRoute(tab.address) }" />
    </div>

    <FidiaSearch :search-term="searchTerm" class="search-mobile" @make-search="makeSearch" />
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

@media screen and (min-width: 768px) and (max-width: 1000px) {
  .toolbar-area {
    height: 40px;
  }
}

@media screen and (max-width: 768px) {
  .search-mobile {
    display: none !important;
  }

  .toolbar-area {
    height: fit-content;
  }
}
</style>
