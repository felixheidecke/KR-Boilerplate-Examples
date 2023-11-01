import { getMenuCard } from '$lib/boilerplate/libraries/xioni-cms/src/MenuCards'
import xioniLoader from '$lib/boilerplate/utils/xioni-loader'

export const load = async () => ({
	menuCard: await xioniLoader(getMenuCard(1540))
})
