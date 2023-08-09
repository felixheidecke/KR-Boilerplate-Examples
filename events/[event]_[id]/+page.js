import { getEvent } from '$lib/xioni/cms/events'
import xioniLoadHandler from '$lib/xioni/utils/load-handler'

export const prerender = false

export const load = async ({ params }) => {
	const event = await xioniLoadHandler(getEvent(params.id))

	return { event }
}
