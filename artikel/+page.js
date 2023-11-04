import { getArticles } from '$lib/boilerplate/libraries/xioni-cms/src/Articles'
import xioniLoader from '$lib/boilerplate/utils/xioni-loader'

export const load = async () => ({
	articles: await xioniLoader(getArticles(1383))
})
