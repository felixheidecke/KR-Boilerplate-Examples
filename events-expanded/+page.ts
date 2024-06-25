import useEvents from '$lib/boilerplate/xioni/cms/Events'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async ({ fetch }) => {
	const { getEvents } = useEvents(fetch)

	return {
		events: await xioniLoader(getEvents(1289, { endsAfter: new Date() }))
	}
}
