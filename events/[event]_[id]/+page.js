import { getEvent } from '$lib/boilerplate/libraries/xioni/events'
import { error as svelteError } from '@sveltejs/kit'

export const load = async ({ params }) => {
	const [error, event] = await getEvent(params.id)

	if (error) {
		throw svelteError(error.statusCode, error.message)
	}

	return { event }
}

export const prerender = false
