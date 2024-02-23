import { getEvent } from '$lib/boilerplate/xioni/cms/src/Events'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async ({ params }) => ({
	event: await xioniLoader(getEvent(1289, +params.id))
})

export const prerender = false
