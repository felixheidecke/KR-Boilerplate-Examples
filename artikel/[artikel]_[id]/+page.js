import { getArticle } from '$lib/boilerplate/libraries/xioni-cms/src/Articles'
import xioniLoader from '$lib/boilerplate/utils/xioni-loader'

export const load = async ({ params }) => ({
	article: await xioniLoader(getArticle(params.id))
})

export const prerender = false
