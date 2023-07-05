import MakeShopProducts from '$lib/boilerplate/libraries/xioni-shop/products'
import { error as svelteError } from '@sveltejs/kit'

export const load = async function ({ params, fetch, parent }) {
	const { module } = await parent()
	const { getProduct } = MakeShopProducts(module, fetch)
	const [error, product] = await getProduct(params.id)

	if (error) {
		throw svelteError(error.statusCode, error.message)
	}

	return {
		product
	}
}
