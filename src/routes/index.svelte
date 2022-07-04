
<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    export async function load(page) {
        const url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=bab192a34186422a81990229e64d3a63";

        const res = await fetch(url)
        const {results} = await res.json()
        return {
            props: {recipes : results}
        }
    }
</script>

<script>
export let recipes = [];
</script>

<h1>Food Recepies</h1>

{#each recipes as item}
<div>
    <p>{item.title}</p>
    <img src={item.image} alt={item.title}>
</div>
{/each}
