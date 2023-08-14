import { getAlbum } from '$lib/boilerplate/libraries/xioni/galleries'
import { error as svelteError } from '@sveltejs/kit'

export const load = async ({ params, fetch }) => {
	const [error, album] = await getAlbum(params.id)

	if (error) {
		throw svelteError(error.statusCode, error.message)
	}

	return {
		album
	}
}

export const prerender = false
