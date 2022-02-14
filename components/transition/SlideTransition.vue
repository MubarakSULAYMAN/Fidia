<template>
  <transition-group v-if="isGroup" :name="`slide-${dir}`" :tag="tag">
    <slot />
  </transition-group>

  <transition v-else :name="`slide-${dir}`">
    <slot />
  </transition>
</template>

<script>
export default {
  props: {
    dir: {
      type: String,
      default: 'up'
    },

    isGroup: {
      type: Boolean,
      default: false
    },

    tag: {
      type: String,
      default: 'div'
    }
  }
};
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
  opacity: 1;
  transform: translateY(0);
}

.slide-up-enter,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(4px);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
  opacity: 1;
  transform: translateY(0);
}

.slide-down-enter,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
