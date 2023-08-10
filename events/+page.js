import { getEvents } from '$lib/xioni-api/cms/events.api'
import xioniLoadHandler from '$lib/xioni-api/utils/load-handler'

export const load = async () => {
	const events = await xioniLoadHandler(getEvents(1289, { endsAfter: new Date() }))

	return { events }
}
