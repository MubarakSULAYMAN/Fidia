<template>
  <button class="fidia-button bg-none text-gray d-flex align-items-center mr-3 px-3 py-2">
    <img v-if="imageLeft" :src="parseStaticUrl(imgUrl)" :alt="buttonName" class="mr-2">
    <span v-text="buttonName" />
    <img v-if="imageRight" :src="parseStaticUrl(imgUrl)" :alt="buttonName" class="ml-3" tabindex="0">
  </button>
</template>

<script>
export default {
  props: {
    imageLeft: {
      type: Boolean,
      default: false
    },

    imageRight: {
      type: Boolean,
      default: false
    },

    imgUrl: {
      type: String,
      default: "/static/svgs/icons/icon-flash.svg"
    },

    buttonName: {
      type: String,
      default: "Upgrade now"
    },
  }
};
</script>

<style scoped>
.fidia-button {
  height: 34px;
  border: 1px solid var(--fidia-gray-light-2);
  border-radius: 8px;
  text-decoration: none;
}

.fidia-button:hover {
  transition: ease 0.3s;
}
</style>
