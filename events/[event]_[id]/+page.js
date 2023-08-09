import { getEvent } from '$lib/boilerplate/libraries/xioni-cms/events'
import xioniLoadHandler from '$lib/boilerplate/utils/xioni-load-handler'

export const prerender = false

export const load = async ({ params }) => {
	const event = await xioniLoadHandler(getEvent(params.id))

	return { event }
}
