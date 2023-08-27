import { getEvents } from '$lib/boilerplate/libraries/xioni/events'
import xioniLoader from '$lib/boilerplate/utils/xioni-loader'

export const load = async () => {
	const [eventsAlpha, eventsBeta] = await Promise.all([
		xioniLoader(getEvents(1289, { endsAfter: new Date() })),
		xioniLoader(getEvents(1500, { endsAfter: new Date() }))
	])

	return {
		events: [...eventsAlpha, ...eventsBeta].sort((a, b) => {
			// Sort by start date
			return a.starts > b.starts ? 1 : -1
		})
	}
}
