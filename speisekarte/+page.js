import { getMenuCard } from '$lib/boilerplate/libraries/xioni/menuCards'
import { error as svelteError } from '@sveltejs/kit'

export const load = async ({ fetch }) => {
	const [error, menuCard] = await getMenuCard(1540)

	if (error) {
		throw svelteError(error.statusCode, error.message)
	}

	return {
		menuCard
	}
}
