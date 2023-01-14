<template>
  <AppContentItem class="w-[64rem] h-20 !py-0 grid grid-cols-3" showImmediately>
    <AppHeaderLogo/>

    <AppHeaderNavbar>
      <AppHeaderNavbarItem linkTo="/">Start</AppHeaderNavbarItem>
      <AppHeaderNavbarItem linkTo="/blog">Blog</AppHeaderNavbarItem>
      <AppHeaderNavbarItem linkTo="/design">Design</AppHeaderNavbarItem>
    </AppHeaderNavbar>

    <AppHeaderSocials>
      <AppHeaderSocialsItem iconName="twitter" linkTo="https://twitter.com"/>
      <AppHeaderSocialsItem iconName="discord" linkTo="https://discord.com"/>
      <AppHeaderSocialsItem iconName="github" linkTo="https://github.com"/>
    </AppHeaderSocials>
  </AppContentItem>
</template>
