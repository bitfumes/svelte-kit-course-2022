<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';
</script>

<Nav />

<div class="flex h-screen">
	<div class="m-auto">
		<slot />
	</div>
</div>
<Footer />
