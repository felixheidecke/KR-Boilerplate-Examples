import useArticles from '$lib/boilerplate/xioni/cms/Articles'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const prerender = false
export const load = async function ({ params }) {
	const { getArticle } = useArticles()

	return {
		article: await xioniLoader(getArticle(1383, +params.id))
	}
}
