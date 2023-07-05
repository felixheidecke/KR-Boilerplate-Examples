import writableSession from '$lib/boilerplate/utils/writable-session'
import type { ShopCart } from '$lib/boilerplate/libraries/xioni-shop/cart.types'
import { writable } from 'svelte/store'
import type { ShopCategory } from '$lib/boilerplate/libraries/xioni-shop/categories.types'

export const CART = writable({
	products: [],
	gross: { value: 0, formatted: '0,00 €' },
	shipping: { value: 0, formatted: '0,00 €' },
	total: { value: 0, formatted: '0,00 €' }
} as ShopCart)

export const CATEGORIES = writable([] as ShopCategory[])

export const ADDRESS = writableSession('shop-invoice-address', {} as { [key: string]: string })

export const SHIPPING_ADDRESS = writableSession(
	'shop-shipping-address',
	{} as { [key: string]: string }
)
