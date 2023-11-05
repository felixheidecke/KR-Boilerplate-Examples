import { getEvent } from '$lib/boilerplate/xioni/cms-api/src/Events'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async ({ params }) => ({
	event: await xioniLoader(getEvent(params.id))
})

export const prerender = false
