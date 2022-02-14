<template>
  <div class="checkbox-wrapper m-auto">
    <input
      id="all"
      :checked="selectedAllKeys === true"
      type="checkbox"
      @click="checkAllRows">
    <label for="all"></label>
  </div>
</template>

<script>
export default {
  props: {
    rows: {
      type: Array,
      default: () => []
    },
    checkboxKey: {
      type: String,
      default: '_id'
    },
    selectedKeys: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    selectedAllKeys () {
      return this.selectedKeys.length === this.rows.length;
    }
  },
  watch: {
    rows (newVal, oldVal) {
      if (newVal.length < oldVal.length) {
        this.$emit('set-selected-keys', []);
      }
    }
  },
  methods: {
    checkAllRows () {
      if (this.selectedAllKeys) {
        this.$emit('set-selected-keys', []);
      } else {
        const allKeys = this.rows.map(item => item.name);
        this.$emit('set-selected-keys', allKeys);
      }
    }
  }
};
</script>

<style scoped>
@import url(assets/styles/form-checkbox.css);

.checkbox-wrapper input:checked + label:after {
  top: 4px;
  left: 10px;
  width: 0;
  border-width: 0 3px 0 0;
  transform: rotate(90deg);
}
</style>
