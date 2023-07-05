import MakeShopCategories from '$lib/boilerplate/libraries/xioni-shop/categories'
import MakeShopProducts from '$lib/boilerplate/libraries/xioni-shop/products'
import { error as svelteError } from '@sveltejs/kit'

export const load = async function ({ params, parent, fetch }) {
	const { module } = await parent()
	const { getCategory } = MakeShopCategories(module, fetch)
	const { getProductsByCategory } = MakeShopProducts(module, fetch)
	const [categoryError, category] = await getCategory(params.id)

	if (categoryError) {
		throw svelteError(categoryError.statusCode, categoryError.message)
	}

	const [productsError, products] = await getProductsByCategory(params.id)

	if (productsError) {
		throw svelteError(productsError.statusCode, productsError.message)
	}

	return {
		category,
		products
	}
}
