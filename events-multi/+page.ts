import { getEvents } from '$lib/boilerplate/xioni/cms/src/Events'
import { sortBy } from 'lodash-es'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async () => {
	const endsAfter = new Date()
	const limit = 5
	const [eventsAlpha, eventsBeta] = await Promise.all([
		xioniLoader(getEvents(1289, { endsAfter, limit })),
		xioniLoader(getEvents(1500, { endsAfter, limit }))
	])

	return {
		events: sortBy([...eventsAlpha, ...eventsBeta], 'starts')
	}
}
