import Articles from '$lib/boilerplate/libraries/xioni/articles'
import { error as svelteError } from '@sveltejs/kit'

export const load = async ({ fetch, params }) => {
	const { getArticle } = Articles(fetch)
	const [error, article] = await getArticle(params.id)

	if (error) {
		throw svelteError(error.statusCode, error.message)
	}

	return {
		article
	}
}

export const prerender = false
