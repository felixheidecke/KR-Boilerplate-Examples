import { getArticles } from '$lib/boilerplate/libraries/xioni/articles'
import xioniLoader from '$lib/boilerplate/utils/xioni-loader'

export const load = async () => {
	const articles = await xioniLoader(getArticles(1383, { parts: ['content'] }))

	/* Artikelinhalte komplett übergeben */
	return {
		articles
	}

	/* Allen artikel die "website" entziehen 
	return {
		articles: articles.map(article => {
			return { ...article, website: undefined }
		})
	}
	*/
}
