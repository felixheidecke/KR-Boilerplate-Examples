import { getArticle } from '$lib/xioni/cms/articles'
import xioniLoadHandler from '$lib/xioni/utils/load-handler'

export const prerender = false

export const load = async ({ params }) => {
	const article = await xioniLoadHandler(getArticle(params.id))

	return { article }
}
