const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addComponents }) {
  addComponents({
    '.prose': {
      '@apply font-inter font-normal': {},
      '@apply text-gray-700 dark:text-gray-200 text-base': {}
    },

    '.prose-content p': {
      '@apply my-8': {}
    },

    '.prose :is(h1, h2, h3, h4, h5)': {
      '@apply font-bold': {},
      '@apply text-gray-800 dark:text-white-50 tracking-tight': {}
    },

    '.prose :is(h1, h2, h3)': {
      '@apply font-youtube-sans': {}
    },

    '.prose :is(h4, h5)': {
      '@apply font-semibold': {}
    },

    '.prose-content :is(h1, h2, h3, h4, h5)': {
      '@apply mt-12 mb-8': {},
      '@apply scroll-mt-8': {}
    },

    '.prose h1': {
      '@apply text-5xl': {}
    },

    '.prose h2': {
      '@apply text-4xl': {}
    },

    '.prose h3': {
      '@apply text-3xl': {}
    },

    '.prose h4': {
      '@apply text-2xl': {}
    },

    '.prose h5': {
      '@apply text-xl': {}
    },

    '.prose-content p > a': {
      '@apply hover:text-blue-400': {},
      '@apply border-b border-dashed border-gray-400 hover:border-solid hover:border-blue-400': {}
    },

    '.prose hr': {
      '@apply w-full my-8': {},
      '@apply border-gray-200 dark:border-gray-750': {}
    },

    '.prose ul': {
      '@apply list-disc': {}
    },

    '.prose ol': {
      '@apply list-decimal': {}
    },

    '.prose ul, ol': {
      '@apply list-inside': {}
    },

    '.prose-content ul, ol': {
      '@apply my-8': {}
    },

    '.prose li': {
      '@apply my-4': {},
      '@apply marker:text-gray-300 dark:marker:text-gray-750': {}
    },

    '.prose table': {
      '@apply text-sm text-left': {}
    },

    '.prose-content table': {
      '@apply my-8': {}
    },

    '.prose thead': {
      '@apply border-b border-gray-300 dark:border-gray-600': {}
    },

    '.prose tr': {
      '@apply border-b border-dashed border-gray-300 dark:border-gray-700': {}
    },

    '.prose tr td, th': {
      '@apply first:pl-0 last:pr-0': {}
    },

    '.prose th': {
      '@apply pt-0': {},
      '@apply font-semibold': {},
      '@apply text-gray-600 dark:text-gray-400': {}
    },

    '.prose td, th': {
      '@apply p-4': {}
    },

    '.prose blockquote': {
      '@apply px-6 py-2': {},
      '@apply border-l border-gray-400 dark:border-gray-600': {}
    },

    '.prose blockquote *': {
      '@apply first:mt-0 last:mb-0': {}
    },

    '.prose-content blockquote': {
      '@apply my-8': {}
    },

    '.prose pre': {
      '@apply p-4': {},
      '@apply text-sm leading-relaxed': {},
      '@apply rounded-lg bg-gray-100 dark:bg-gray-750 ring-1 ring-gray-300 dark:ring-gray-700': {}
    },

    '.prose pre code': {
      '@apply p-0': {}
    },

    '.prose-content pre': {
      '@apply my-8': {}
    },

    '.prose code': {
      '@apply inline-block': {},
      '@apply font-consolas': {},
      '@apply rounded-md bg-gray-100 dark:bg-gray-750': {}
    },

    '.prose-content code': {
      '@apply px-[6px] py-1': {}
    },

    '.prose-content img': {
      '@apply mt-12 mb-4': {},
      '@apply rounded-lg': {}
    },

    '.prose figcaption': {
      '@apply w-full flex justify-center': {},
      '@apply text-gray-500 dark:text-gray-400': {}
    },

    '.prose-content figcaption': {
      '@apply mb-8': {}
    },

    '.prose-content .embed': {
      '@apply w-full max-w-[600px] mx-auto my-12': {}
    },

    '.prose-content .youtube-video': {
      '@apply aspect-video': {}
    },

    '.prose-content .spotify-song': {
      '@apply h-[152px]': {}
    }
  });
})
