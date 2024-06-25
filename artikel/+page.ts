import useArticles from '$lib/boilerplate/xioni/cms/Articles'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async function ({ fetch }) {
	const getArticles = useArticles(fetch).getArticles(1383)

	return {
		articles: await xioniLoader(getArticles)
	}
}
