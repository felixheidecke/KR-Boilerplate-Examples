import XioniShopCategoriesFactory from '$lib/boilerplate/libraries/xioni-shop/categories'
import XioniShopProductsFactory from '$lib/boilerplate/libraries/xioni-shop/products'
import xioniLoadHandler from '$lib/boilerplate/utils/xioni-load-handler'

export const load = async function ({ params, parent, fetch }) {
	const { module } = await parent()
	const { getCategory } = XioniShopCategoriesFactory(module, fetch)
	const { getProductsByCategory } = XioniShopProductsFactory(module, fetch)
	const [category, products] = await Promise.all([
		xioniLoadHandler(getCategory(params.id)),
		xioniLoadHandler(getProductsByCategory(params.id))
	])

	return {
		category,
		products
	}
}
