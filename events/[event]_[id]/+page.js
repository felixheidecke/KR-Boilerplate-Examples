import { getEvent } from '$lib/xioni-api/cms/events.api'
import xioniLoadHandler from '$lib/xioni-api/utils/load-handler'

export const prerender = false

export const load = async ({ params }) => {
	const event = await xioniLoadHandler(getEvent(params.id))

	return { event }
}
