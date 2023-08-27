import { getAlbum } from '$lib/boilerplate/libraries/xioni/galleries'
import xioniLoader from '$lib/boilerplate/utils/xioni-loader'

export const load = async ({ params }) => ({
	album: await xioniLoader(getAlbum(params.id))
})

export const prerender = false
