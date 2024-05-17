import { getGallery } from '$lib/boilerplate/xioni/cms/src/Galleries'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async () => ({
	gallery: xioniLoader(getGallery(1453))
})
