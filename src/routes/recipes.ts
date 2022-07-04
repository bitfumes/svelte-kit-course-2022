/** @type {import('@sveltejs/kit').Load} */
export async function get(page) {
	const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
	const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

	const res = await fetch(url);
	const { results } = await res.json();

	if (res.ok) {
		return {
			body: { recipes: results }
		};
	}

	return {
		status: 404,
		body: { error: 'Can not fetch recepies.' }
	};
}
