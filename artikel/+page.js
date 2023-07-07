import Articles from '$lib/boilerplate/libraries/xioni/articles'
import { error as svelteError } from '@sveltejs/kit'

export const load = async ({ fetch }) => {
	const { getArticles } = Articles(fetch)
	const [error, articles] = await getArticles(1383)

	if (error) {
		throw svelteError(error.statusCode, error.message)
	}

	return {
		articles
	}
}
