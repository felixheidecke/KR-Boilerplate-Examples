import { getEvents } from '$lib/xioni/cms/events'
import xioniLoadHandler from '$lib/xioni/utils/load-handler'

export const load = async () => {
	const events = await xioniLoadHandler(
		getEvents(1289, { endsAfter: new Date(), parts: ['details', 'urls', 'flags', 'images'] })
	)

	return { events }
}
