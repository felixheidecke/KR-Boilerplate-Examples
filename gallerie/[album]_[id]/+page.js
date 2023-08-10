import { getAlbum } from '$lib/xioni-api/cms/galleries.api'
import xioniLoadHandler from '$lib/xioni-api/utils/load-handler'

export const prerender = false

export const load = async ({ params }) => {
	const album = await xioniLoadHandler(getAlbum(params.id))

	return { album }
}
