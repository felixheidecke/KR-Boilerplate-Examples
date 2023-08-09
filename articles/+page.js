import { getArticles } from '$lib/boilerplate/libraries/xioni-cms/articles'
import xioniLoadHandler from '$lib/boilerplate/utils/xioni-load-handler'

export const load = async () => {
	const articles = await xioniLoadHandler(getArticles(1383, { parts: ['content'] }))

	return { articles }
}
