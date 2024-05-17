import { getArticles } from '$lib/boilerplate/xioni/cms/src/Articles'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async () => ({
	articles: await xioniLoader(getArticles(1383))
})
