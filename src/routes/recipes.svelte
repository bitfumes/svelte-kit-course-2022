<script>
	export let recipes;
</script>

<h1>Food Recepies</h1>

{#each recipes as item}
	<a href={`/recipes/${item.id}`}>
		<p>{item.title}</p>
		<img src={item.image} alt={item.title} />
	</a>
{/each}
