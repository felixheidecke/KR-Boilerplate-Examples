import MakeShopCategories from '$lib/boilerplate/libraries/xioni-shop/categories'
import { error as svelteError } from '@sveltejs/kit'

const module = 15352

export const load = async function ({ fetch }) {
	const { getCategories } = MakeShopCategories(module, fetch)
	const [error, categories] = await getCategories()

	if (error) throw svelteError(error.statusCode, error.message)

	return {
		categories,
		module
	}
}

export const prerender = false
