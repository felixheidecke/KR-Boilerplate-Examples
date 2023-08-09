import xioniEventsFactory from '$lib/xioni/cms/events'
import xioniLoadHandler from '$lib/xioni/utils/load-handler'

export const load = async ({ fetch }) => {
	const { getEvents } = xioniEventsFactory(fetch)
	const events = await xioniLoadHandler(
		getEvents(1289, { endsAfter: new Date(), parts: ['details'] })
	)

	return {
		events
	}
}
