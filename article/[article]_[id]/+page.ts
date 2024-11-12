import { getArticle } from '$lib/boilerplate/xioni/cms/Articles'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const prerender = false
export const load = async ({ params }) => ({
	article: await xioniLoader(getArticle(1383, +params.id))
})
