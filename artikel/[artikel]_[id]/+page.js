import { getArticle } from '$lib/boilerplate/xioni/cms/src/Articles'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async ({ params }) => ({
	article: await xioniLoader(getArticle(params.id))
})

export const prerender = false
