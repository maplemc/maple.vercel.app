<template>
  <AppContentItem class="w-[64rem] py-12 flex flex-col-reverse lg:grid grid-cols-3" showImmediately>
    <AppFooterLabel>© 2023 StylexTV.</AppFooterLabel>

    <AppFooterNavbar>
      <AppFooterNavbarItem linkTo="https://github.com/stylextv">GitHub</AppFooterNavbarItem>
      <AppFooterNavbarItem linkTo="https://github.com/stylextv?tab=repositories">Projects</AppFooterNavbarItem>
      <AppFooterNavbarItem linkTo="https://github.com/StylexTV/stylextv.github.io/blob/main/LICENSE">License: <b>GPL</b></AppFooterNavbarItem>
    </AppFooterNavbar>

    <AppFooterToolbar>
      <AppFooterToolbarThemeToggle/>
    </AppFooterToolbar>
  </AppContentItem>
</template>
