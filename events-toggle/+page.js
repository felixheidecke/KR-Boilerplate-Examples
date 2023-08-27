import { getEvents } from '$lib/boilerplate/libraries/xioni/events'
import xioniLoader from '$lib/boilerplate/utils/xioni-loader'

export const load = async () => ({
	events: await xioniLoader(getEvents(1289, { endsAfter: new Date() }))
})
