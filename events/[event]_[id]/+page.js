import { getEvent } from '$lib/boilerplate/libraries/xioni-cms/src/Events'
import xioniLoader from '$lib/boilerplate/utils/xioni-loader'

export const load = async ({ params }) => ({
	event: await xioniLoader(getEvent(params.id))
})

export const prerender = false
