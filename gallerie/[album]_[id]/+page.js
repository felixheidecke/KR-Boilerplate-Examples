import { getAlbum } from '$lib/boilerplate/libraries/xioni-cms/src/Galleries'
import xioniLoader from '$lib/boilerplate/utils/xioni-loader'

export const load = async ({ params }) => ({
	album: await xioniLoader(getAlbum(params.id))
})

export const prerender = false
