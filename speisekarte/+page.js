import { getMenuCard } from '$lib/boilerplate/libraries/xioni-cms/menuCards'
import xioniLoadHandler from '$lib/boilerplate/utils/xioni-load-handler'

export const load = async () => {
	const menuCard = await xioniLoadHandler(getMenuCard(1540))

	return { menuCard }
}
