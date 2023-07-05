import MakeShopCart from '$lib/boilerplate/libraries/xioni-shop/cart'
import MakeShopCategories from '$lib/boilerplate/libraries/xioni-shop/categories'
import { error as svelteError } from '@sveltejs/kit'
import { CART } from './stores'

const module = 1535

export const load = async function ({ fetch }) {
	const { getCart } = MakeShopCart(module, fetch)
	const { getCategories } = MakeShopCategories(module, fetch)
	const [categoriesError, categories] = await getCategories()

	if (categoriesError) {
		throw svelteError(categoriesError.statusCode, categoriesError.message)
	}

	const [cartError, cart] = await getCart()

	if (cartError) {
		throw svelteError(cartError.statusCode, cartError.message)
	}

	CART.set(cart)

	return {
		categories,
		module
	}
}

export const prerender = false
