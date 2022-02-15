<template>
  <div class="checkbox-wrapper m-auto">
    <input
      :id="checkboxKey"
      :value="checkboxKey"
      :checked="currentSelectedKeys.some((x) => x === checkboxKey)"
      type="checkbox"
      class="form-checkbox"
      @click.stop="checkRow">
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

  data () {
    return {
      currentSelectedKeys: this.selectedKeys
    };
  },

  methods: {
    checkRow (e) {
      const { value } = e.target;
      if (value) {
        const foundIndex = this.currentSelectedKeys.findIndex(x => x === value);
        if (foundIndex !== -1) {
          this.currentSelectedKeys.splice(foundIndex, 1);
          return;
        }
        this.currentSelectedKeys.push(value);
      }
    }
  }
};
</script>

<style scoped>
@import url(assets/styles/form-checkbox.css);
</style>
