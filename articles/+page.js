import { getArticles } from '$lib/xioni-api/cms/articles.api'
import xioniLoadHandler from '$lib/xioni-api/utils/load-handler'

export const load = async () => {
	const articles = await xioniLoadHandler(getArticles(1383, { parts: ['content'] }))

	return { articles }
}
