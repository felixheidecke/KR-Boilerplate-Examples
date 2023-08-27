import { getGallery } from '$lib/boilerplate/libraries/xioni/galleries'
import xioniLoader from '$lib/boilerplate/utils/xioni-loader'

export const load = async () => ({
	gallery: await xioniLoader(getGallery(1453))
})
