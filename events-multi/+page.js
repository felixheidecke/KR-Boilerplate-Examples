import { getEvents } from '$lib/boilerplate/libraries/xioni/events'
import { error as svelteError } from '@sveltejs/kit'

export const load = async () => {
	const [errorA, eventsA] = await getEvents(1289, { endsAfter: new Date() })
	const [errorB, eventsB] = await getEvents(1500, { endsAfter: new Date() })

	if (errorA) {
		throw svelteError(errorA.statusCode, errorA.message)
	} else if (errorB) {
		throw svelteError(errorB.statusCode, errorB.message)
	}

	return {
		events: [...eventsA, ...eventsB].sort((a, b) => {
			return a.starts > b.starts ? 1 : -1
		})
	}
}
