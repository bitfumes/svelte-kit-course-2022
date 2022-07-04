<script>
	export let recipe;
</script>

<h1>{recipe.title}</h1>

<img src={recipe.image} alt={recipe.title} />

<div>
	<h2>Ingredients</h2>
	{#each recipe.extendedIngredients as ingredient}
		<p>{ingredient.name}</p>
	{/each}
</div>

<div>
	<h2>Cuisines</h2>
	{#each recipe.cuisines as cuisines}
		<p>{cuisines}</p>
	{/each}
</div>
