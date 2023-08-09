import { getGallery } from '$lib/boilerplate/libraries/xioni-cms/galleries'
import xioniLoadHandler from '$lib/boilerplate/utils/xioni-load-handler'

export const load = async () => {
	const gallery = await xioniLoadHandler(getGallery(1453))

	return { gallery }
}
