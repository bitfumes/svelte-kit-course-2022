/** @type {import('@sveltejs/kit').Load} */
export async function get(page) {
	const url =
		'https://api.spoonacular.com/recipes/complexSearch?apiKey=bab192a3416422a81990229e64d3a63';

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
