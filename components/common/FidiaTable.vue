<template>
  <div class="fidia-table">
    <table>
      <thead>
        <slot name="thead" />
      </thead>
      <tbody>
        <slot name="tbody" />
      </tbody>
    </table>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.fidia-table {
  width: 100%;
  border: 1px solid var(--fidia-gray-fade-1);
  border-radius: 8px;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
}
</style>
