import { getMenuCard } from '$lib/xioni-api/cms/menuCards.api'
import xioniLoadHandler from '$lib/xioni-api/utils/load-handler'

export const load = async () => {
	const menuCard = await xioniLoadHandler(getMenuCard(1540))

	return { menuCard }
}
