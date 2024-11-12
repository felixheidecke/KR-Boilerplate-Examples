import { flatten, sortBy } from 'lodash-es'
import { getEvents } from '$lib/boilerplate/xioni/cms/Events'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

const endsAfter = new Date()
const limit = 5

export const load = async () => {
	const events = await Promise.all([
		xioniLoader(getEvents(1289, { endsAfter, limit })),
		xioniLoader(getEvents(1500, { endsAfter, limit }))
	])

	return {
		events: sortBy(flatten(events), 'starts')
	}
}
