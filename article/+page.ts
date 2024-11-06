import useArticles from '$lib/boilerplate/xioni/cms/Articles'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async function () {
	const { getArticles } = useArticles()

	return {
		articles: await xioniLoader(getArticles(1383))
	}
}
