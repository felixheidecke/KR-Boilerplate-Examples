import { getMenuCard } from '$lib/xioni/cms/menuCards'
import xioniLoadHandler from '$lib/xioni/utils/load-handler'

export const load = async () => {
	const menuCard = await xioniLoadHandler(getMenuCard(1540))

	return { menuCard }
}
