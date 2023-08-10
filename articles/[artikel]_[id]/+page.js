import { getArticle } from '$lib/xioni-api/cms/articles.api'
import xioniLoadHandler from '$lib/xioni-api/utils/load-handler'

export const prerender = false

export const load = async ({ params }) => {
	const article = await xioniLoadHandler(getArticle(params.id))

	return { article }
}
