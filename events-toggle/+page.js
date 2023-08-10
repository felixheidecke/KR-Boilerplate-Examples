import xioniEventsFactory from '$lib/xioni-api/cms/events.api'
import xioniLoadHandler from '$lib/xioni-api/utils/load-handler'

export const load = async ({ fetch }) => {
	const { getEvents } = xioniEventsFactory(fetch)
	const events = await xioniLoadHandler(
		getEvents(1289, { endsAfter: new Date(), parts: ['details'] })
	)

	return {
		events
	}
}
