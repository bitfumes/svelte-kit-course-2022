/** @type {import('@sveltejs/kit').Load} */
export async function get(page) {
	const url = `https://api.spoonacular.com/recipes/${page.params.id}/information?apiKey=bab192a34186422a81990229e64d3a63`;

	const res = await fetch(url);
	const data = await res.json();

	if (res.ok) {
		return {
			body: { recipe: data }
		};
	}

	return {
		status: 404,
		body: { error: 'Can not fetch recepie.' }
	};
}
