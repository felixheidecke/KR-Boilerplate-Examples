import { getArticles } from '$lib/boilerplate/libraries/xioni-cms/src/Articles'
import xioniLoader from '$lib/boilerplate/utils/xioni-loader'

export const load = async () => {
	const articles = await xioniLoader(getArticles(1383))

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
