import { getGallery } from '$lib/xioni/cms/galleries'
import xioniLoadHandler from '$lib/xioni/utils/load-handler'

export const load = async () => {
	const gallery = await xioniLoadHandler(getGallery(1453))

	return { gallery }
}
