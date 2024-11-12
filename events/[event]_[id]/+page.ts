import { getEvent } from '$lib/boilerplate/xioni/cms/Events'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const prerender = false
export const load = async ({ params }) => ({
	event: await xioniLoader(getEvent(1289, +params.id))
})
