<script setup>
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
	import Layout from './components/Layout.vue';
	import http from './utils/http.js';
	const a = http.get('/api/get').then(res => {
		console.log(res)
	})
</script>

<template>
	<Layout></Layout>
</template>

<style>

</style>
