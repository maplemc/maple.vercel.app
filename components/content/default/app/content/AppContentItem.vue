<template>
  <div ref="item" class="max-w-7xl mx-auto px-8 py-16 opacity-0 translate-y-20" :class="{ 'opacity-100 translate-y-0': show, 'transition duration-700': animate }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    showImmediately: Boolean
  },
  data() {
    return {
      show: true,
      animate: false
    }
  },
  mounted() {
    if(!this.isInViewport() && !this.showImmediately) {

      this.show = false;
      this.animate = true;

      window.addEventListener('scroll', this.onScroll);
    }
  },
  unmounted() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      if(this.isInViewport()) this.show = true;
    },
    isInViewport() {
      const item = this.$refs.item;
      const rect = item.getBoundingClientRect();

      return rect.top < window.innerHeight;
    }
  }
}
</script>
