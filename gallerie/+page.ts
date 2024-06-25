import useGallery from '$lib/boilerplate/xioni/cms/Galleries'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async ({ fetch }) => {
	const { getGallery } = useGallery(fetch)

	return {
		gallery: await xioniLoader(getGallery(1453))
	}
}
