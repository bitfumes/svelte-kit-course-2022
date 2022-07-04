<script>
	export let recipe;
</script>

<h1 class="text-2xl text-center mb-10">{recipe.title}</h1>

<div class="flex justify-between">
	<img width="200" class="rounded-lg shadow-md" src={recipe.image} alt={recipe.title} />

	<div>
		<div>
			<h2 class="text-xl font-bold">Ingredients</h2>
			{#each recipe.extendedIngredients as ingredient}
				<p class="text-gray-600 text-sm">{ingredient.name}</p>
			{/each}
		</div>

		<div>
			<h2 class="text-xl font-bold">Cuisines</h2>
			{#each recipe.cuisines as cuisines}
				<p class="text-gray-600 text-sm">{cuisines}</p>
			{/each}
		</div>
	</div>
</div>
