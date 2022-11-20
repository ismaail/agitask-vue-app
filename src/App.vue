<script setup>

import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
	<header>
		<nav class="container flex flex-wrap gap-x-4 px-2 sm:px-4 py-4 text-white font-bold">
			<RouterLink to="/" class=" opacity-80 transition-all duration-75">Home</RouterLink>
			<RouterLink to="/about" class=" opacity-80 transition-all duration-75">About</RouterLink>
		</nav>
	</header>
	<RouterView />
</template>
