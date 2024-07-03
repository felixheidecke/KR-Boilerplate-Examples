import useArticles from '$lib/boilerplate/xioni/cms/Articles.js'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const prerender = false
export const load = async function ({ fetch, params }) {
	const { getArticle } = useArticles(fetch)

	return {
		article: await xioniLoader(getArticle(1383, +params.id))
	}
}
