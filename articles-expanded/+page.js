import { getArticles } from '$lib/xioni/cms/articles'
import xioniLoadHandler from '$lib/xioni/utils/load-handler'

export const load = async () => {
	const articles = await xioniLoadHandler(getArticles(1383, { parts: ['content'] }))

	return { articles }
}
