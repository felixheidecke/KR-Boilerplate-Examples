import { getGallery } from '$lib/boilerplate/xioni/cms-api/src/Galleries'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async () => ({
	gallery: await xioniLoader(getGallery(1453))
})
