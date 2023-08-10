import { getGallery } from '$lib/xioni-api/cms/galleries.api'
import xioniLoadHandler from '$lib/xioni-api/utils/load-handler'

export const load = async () => {
	const gallery = await xioniLoadHandler(getGallery(1453))

	return { gallery }
}
