import { getAlbum } from '$lib/xioni/cms/galleries'
import xioniLoadHandler from '$lib/xioni/utils/load-handler'

export const prerender = false

export const load = async ({ params }) => {
	const album = await xioniLoadHandler(getAlbum(params.id))

	return { album }
}
