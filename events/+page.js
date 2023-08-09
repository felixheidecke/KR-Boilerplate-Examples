import { getEvents } from '$lib/boilerplate/libraries/xioni-cms/events'
import xioniLoadHandler from '$lib/boilerplate/utils/xioni-load-handler'

export const load = async () => {
	const events = await xioniLoadHandler(getEvents(1289, { endsAfter: new Date() }))

	return { events }
}
