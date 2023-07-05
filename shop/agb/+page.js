import MakeShopInfo from '$lib/boilerplate/libraries/xioni-shop/info'
import { error as svelteError } from '@sveltejs/kit'

export const load = async function ({ fetch, parent }) {
	const { module } = await parent()
	const { get } = MakeShopInfo(module, fetch)
	const [error, info] = await get/()

	return {
		info: await get()
	}
}
