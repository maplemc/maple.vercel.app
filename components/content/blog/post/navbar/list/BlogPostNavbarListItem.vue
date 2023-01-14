<template>
  <a @click="scrollToAnchor" class="py-1 cursor-pointer font-inter font-normal text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white-50" :class="{ '!text-blue-400': isAnchorVisible }">
    <p class="hidden group-hover:block">{{ anchor.text }}</p>
    <p class="block group-hover:hidden">•</p>
  </a>

  <BlogPostNavbarList :anchors="anchor.children"/>
</template>

<script>
export default {
  props: {
    anchor: Object
  },
  data() {
    return {
      isAnchorVisible: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const anchorElement = this.getAnchorElement();
      const rect = anchorElement.getBoundingClientRect();

      var y1 = Math.max(rect.top, 0);
      var y2 = Math.min(rect.bottom, window.innerHeight);

      this.isAnchorVisible = y1 <= y2;
    },
    scrollToAnchor() {
      const anchorElement = this.getAnchorElement();

      anchorElement.scrollIntoView({ behavior: "smooth" });
    },
    getAnchorElement() {
      const id = this.anchor.id;

      return document.getElementById(id);
    }
  }
}
</script>
