import { getAlbum } from '$lib/boilerplate/libraries/xioni-cms/galleries'
import xioniLoadHandler from '$lib/boilerplate/utils/xioni-load-handler'

export const prerender = false

export const load = async ({ params }) => {
	const album = await xioniLoadHandler(getAlbum(params.id))

	return { album }
}
