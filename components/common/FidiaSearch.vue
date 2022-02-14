<template>
  <div :class="[{ 'search-active': searchActive }, 'search-overview text-gray d-flex']" title="Search">
    <img src="/svgs/icons/icon-handlense.svg" alt="🔍" class="p-2" @click="focusOnSearch">
    <input
    id="search-overview"
    ref="searchInput"
    type="search"
    name="search-overview"
    class="px-2 py-1"
    @focus="searchActive = true"
    @blur="searchActive = false"
    @keydown.enter="makeSearch">
  </div>
</template>

<script>
export default {
  name: "",

  props: {
    searchTerm: {
      type: String,
      default: ""
    }
  },

  data () {
    return {
      searchActive: false
    };
  },

  methods: {
    focusOnSearch () {
      setTimeout(() => this.$refs.searchInput.focus());
    },

    makeSearch () {
      this.$emit('makeSearch');
    }
  }
};
</script>

<style scoped>
.search-overview {
  width: 280px;
  height: 34px;
  border: 1px solid var(--fidia-gray-light-2);
}

.search-overview:hover {
  border-color: var(--fidia-purple);
  transition: ease 0.35s;
}

.search-overview input[type="search"] {
  width: 100%;
  border: none;
  outline: none;
}

.search-overview,
.search-overview input[type="search"] {
  border-radius: 8px;
}

.search-active {
  border-color: var(--fidia-purple);
  transition: ease 0.35s;
}
</style>
