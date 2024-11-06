import useEvents from '$lib/boilerplate/xioni/cms/Events'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async () => {
	const { getEvents } = useEvents()

	return {
		events: await xioniLoader(getEvents(1289, { endsAfter: new Date() }))
	}
}
