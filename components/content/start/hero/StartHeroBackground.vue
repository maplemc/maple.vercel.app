<template>
  <div class="w-96 h-96 top-[350px] left-[calc(50vw-12rem)] absolute scale-150 blur-[112px] opacity-60 animate-gradient bg-gradient-to-tr from-blue-500 to-pink-500"></div>
</template>

<style>
.animate-gradient {
  animation: gradient 15s ease infinite;
  background-size: 200% 200%;
}

@keyframes gradient {
  0% {
	  background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
