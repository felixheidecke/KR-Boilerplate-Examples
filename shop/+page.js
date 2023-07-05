import ShopProducts from '$lib/boilerplate/libraries/xioni-shop/products'
import { error as svelteError } from '@sveltejs/kit'

export const load = async function ({ fetch, parent }) {
	const { module } = await parent()
	const { getProductHighlights } = ShopProducts(module, fetch)
	const [error, products] = await getProductHighlights()

	if (error) {
		throw svelteError(error.statusCode, error.message)
	}

	return {
		products
	}
}

export const prerender = false
