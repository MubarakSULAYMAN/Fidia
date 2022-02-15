<template>
  <div>
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

    <div class="fidia-pad d-block d-lg-none">
      <div class="table-toolbar fidia-pad d-flex justify-content-between mt-4 py-2">
        <img src="/svgs/icons/icon-arrow-left.svg" alt="←" tabindex="0">

        <span class="d-lg-none">Page {{ currentPage }} of {{ totalPages }}</span>

        <img src="/svgs/icons/icon-arrow-right.svg" alt="→" tabindex="0">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },

    totalPages: {
      type: Number,
      default: 1
    },
  }
};
</script>

<style scoped>
.fidia-table {
  width: 100%;
  border: 1px solid var(--fidia-gray-fade-1);
  border-radius: 8px;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
}

@media screen and (max-width: 768px) {
  .fidia-table {
    width: fit-content;
    border-radius: 0;
  }

  .table-toolbar {
    border-top: 1px solid var(--fidia-gray-fade-1);
    background-color: transparent !important;
  }
}
</style>
