import { getEvents } from '$lib/boilerplate/xioni/cms/Events'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async () => ({
	events: await xioniLoader(getEvents(1289, { endsAfter: new Date('2025') }))
})
