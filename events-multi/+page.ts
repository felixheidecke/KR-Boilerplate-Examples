import { Xioni } from '$lib/boilerplate/xioni/xioni.types'
import { getEvents } from '$lib/boilerplate/xioni/cms/src/Events'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async () => {
	const [eventsAlpha, eventsBeta] = await Promise.all([
		xioniLoader(
			getEvents(1289, {
				endsAfter: new Date(),
				limit: 5,
				detailLevel: Xioni.DetailLevel.BASIC
			})
		),
		xioniLoader(
			getEvents(1500, {
				endsAfter: new Date(),
				limit: 5,
				detailLevel: Xioni.DetailLevel.BASIC
			})
		)
	])

	return {
		events: [...eventsAlpha, ...eventsBeta].sort((a, b) => {
			// Sort by start date
			return a.starts > b.starts ? 1 : -1
		})
	}
}
