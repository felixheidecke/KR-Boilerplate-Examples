import useGallery from '$lib/boilerplate/xioni/cms/Galleries'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const prerender = false
export const load = async ({ params }) => {
	const { getAlbum } = useGallery()

	return {
		album: await xioniLoader(getAlbum(1453, +params.id))
	}
}
