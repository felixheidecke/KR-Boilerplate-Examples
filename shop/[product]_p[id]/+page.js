import MakeShopProducts from '$lib/boilerplate/libraries/xioni-shop/products'
import xioniLoadHandler from '$lib/boilerplate/utils/xioni-load-handler'

export const load = async function ({ params, fetch, parent }) {
	const { module } = await parent()
	const { getProduct } = MakeShopProducts(module, fetch)
	const product = await xioniLoadHandler(getProduct(params.id))

	return {
		product
	}
}
