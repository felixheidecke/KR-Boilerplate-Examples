import { getMenuCard } from '$lib/boilerplate/xioni/cms/MenuCards'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async () => ({
	menuCard: await xioniLoader(getMenuCard(1540))
})
