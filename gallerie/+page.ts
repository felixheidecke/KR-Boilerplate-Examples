import useGallery from '$lib/boilerplate/xioni/cms/Galleries'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async () => {
	const { getGallery } = useGallery()

	return {
		gallery: await xioniLoader(getGallery(1453))
	}
}
