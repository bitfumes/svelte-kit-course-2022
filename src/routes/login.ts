export async function post({ request }) {
	const body = await request.formData();
	const [emailField, passwordField] = body;

	const email = emailField[1];
	const password = passwordField[1];

	let errors = [];
	if (!email) {
		errors.push({
			message: 'Email field is required.'
		});
	}

	if (!password) {
		errors.push({
			message: 'Password field is required.'
		});
	}

	if (errors.length > 0) {
		return {
			status: 404,
			body: { errors }
		};
	}

	return {
		headers: { Location: '/' },
		status: 302
	};
}
