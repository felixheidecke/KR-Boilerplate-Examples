import { getGallery } from '$lib/boilerplate/libraries/xioni/galleries'
import { error as svelteError } from '@sveltejs/kit'

export const load = async ({ fetch }) => {
	const [error, gallery] = await getGallery(1453)

	if (error) {
		throw svelteError(error.statusCode, error.message)
	}

	return {
		gallery
	}
}
