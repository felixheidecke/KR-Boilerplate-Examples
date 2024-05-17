import { getAlbum } from '$lib/boilerplate/xioni/cms/src/Galleries'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async ({ params }) => ({
	album: await xioniLoader(getAlbum(1453, +params.id))
})

export const prerender = false
