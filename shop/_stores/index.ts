import { browser } from '$app/environment'
import type { ShopCart } from '$lib/boilerplate/libraries/xioni-shop/cart.types'
import { writable } from 'svelte/store'

export const CART = writable({
	products: [],
	gross: { value: 0, formatted: '0,00 €' },
	shipping: { value: 0, formatted: '0,00 €' },
	total: { value: 0, formatted: '0,00 €' }
} as ShopCart)

export const INVOICE_ADDRESS = MakeAddress({} as { [key: string]: string })

export const SHIPPING_ADDRESS = MakeAddress({} as { [key: string]: string })

function MakeAddress(data: any) {
	const storeKey = 'bplt:' + Date.now() * Math.random()
	const storedData = browser ? window.localStorage.getItem(storeKey) : null
	const initialData = storedData ? JSON.parse(storedData) : data
	const { subscribe, set } = writable(initialData)

	return {
		subscribe,
		set: (data: any) => {
			if (browser) window.localStorage.setItem(storeKey, JSON.stringify(data))

			set(data)
		}
	}
}
