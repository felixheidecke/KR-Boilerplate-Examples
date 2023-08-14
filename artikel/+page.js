import { getArticles } from '$lib/boilerplate/libraries/xioni/articles'
import { error as svelteError } from '@sveltejs/kit'

export const load = async () => {
	const [error, articles] = await getArticles(1383, { parts: ['content'] })

	if (error) {
		throw svelteError(error.statusCode, error.message)
	}

	return { articles }
}
