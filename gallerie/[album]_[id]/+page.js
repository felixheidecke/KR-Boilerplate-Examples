import { getAlbum } from '$lib/boilerplate/xioni/cms-api/src/Galleries'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async ({ params }) => ({
	album: await xioniLoader(getAlbum(params.id))
})

export const prerender = false
