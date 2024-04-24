import { getArticles } from '$lib/boilerplate/xioni/cms/src/Articles'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

import type { XioniCMS } from '$lib/boilerplate/xioni/cms/types'

export const load = async () => {
	const articles = await xioniLoader(
		getArticles(1383, {
			limit: 5,
			detailLevel: 'extended'
		})
	)

	return {
		articles: articles as XioniCMS.ExtendedArticle[]
	}
}
