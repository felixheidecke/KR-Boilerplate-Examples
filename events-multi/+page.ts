import { sortBy } from 'lodash-es'
import useEvents from '$lib/boilerplate/xioni/cms/Events'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async ({ fetch }) => {
	const endsAfter = new Date()
	const limit = 5
	const { getEvents } = useEvents(fetch)
	const [eventsAlpha, eventsBeta] = await Promise.all([
		xioniLoader(getEvents(1289, { endsAfter, limit })),
		xioniLoader(getEvents(1500, { endsAfter, limit }))
	])

	return {
		events: sortBy([...eventsAlpha, ...eventsBeta], 'starts')
	}
}
