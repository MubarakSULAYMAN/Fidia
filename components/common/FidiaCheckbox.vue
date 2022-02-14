<template>
  <div class="checkbox-wrapper m-auto">
    <input
      :id="checkboxKey"
      :value="checkboxKey"
      :checked="selectedKeys.some((x) => x === checkboxKey)"
      type="checkbox"
      class="form-checkbox">
    <label :for="checkboxKey"></label>
  </div>
</template>

<script>
export default {
  props: {
    checkboxKey: {
      type: String,
      default: '_id'
    },
    selectedKeys: {
      type: Array,
      default: () => []
    }
  },
};
</script>

<style scoped>
@import url(assets/styles/form-checkbox.css);
</style>
