import { Xioni } from '$lib/boilerplate/xioni/xioni.types'
import type { XioniCMS } from '$lib/boilerplate/xioni/cms/types'
import { getEvents } from '$lib/boilerplate/xioni/cms/src/Events'
import xioniLoader from '$lib/boilerplate/xioni/utils/xioniLoader'

export const load = async () => {
	const events = await xioniLoader(
		getEvents(1289, {
			endsAfter: new Date(),
			detailLevel: Xioni.DetailLevel.BASIC
		})
	)

	return {
		events: events as XioniCMS.Event.Basic[]
	}
}
