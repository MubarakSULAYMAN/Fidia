<template>
  <NuxtLink :to="{ name: tab.address }" class="tab-link text-gray px-2 py-1 rounded" v-text="tab.name" />
</template>

<script>
export default {
  name: 'FidiaTab',

  props: {
    tab: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.tab-link {
  margin-right: 4px;
}

.tab-link:hover {
  color: var(--fidia-purple);
  background-color: var(--fidia-gray-fade-3);
  text-decoration: none;
}
</style>
