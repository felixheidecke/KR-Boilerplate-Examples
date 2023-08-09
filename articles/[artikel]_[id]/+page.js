import { getArticle } from '$lib/boilerplate/libraries/xioni-cms/articles'
import xioniLoadHandler from '$lib/boilerplate/utils/xioni-load-handler'

export const prerender = false

export const load = async ({ params }) => {
	const article = await xioniLoadHandler(getArticle(params.id))

	return { article }
}
