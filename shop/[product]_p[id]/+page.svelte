<script lang="ts">
	import { CART } from '../stores'

	import type { ShopProduct } from '$lib/boilerplate/libraries/xioni-shop/products.types'

	// --- [ Components ] ----------------------------------------------------------------------------

	import Client from '$lib/boilerplate/components/Client/Client.svelte'
	import Link from '$lib/boilerplate/components/Link/Link.svelte'
	import XioniShopProduct from '$lib/boilerplate/components/XioniShopProduct/XioniShopProduct.svelte'
	import ShopCart from '$lib/boilerplate/libraries/xioni-shop/cart'

	// --- [ Props ] ---------------------------------------------------------------------------------

	export let data

	const product: ShopProduct | undefined = data.product
	const module: number = data.module

	let cartError: any

	async function addToCart(id: number) {
		const { addItem } = ShopCart(module)
		const [error, cart] = await addItem(id)

		if (error) {
			cartError = error
			return false
		}

		CART.set(cart)
		return true
	}
</script>

<Client browser>
	{#if cartError}
		<pre>{JSON.stringify(cartError, null, 2)}</pre>
	{/if}

	{#if product}
		<XioniShopProduct {product} on:addToCart={({ detail: id }) => addToCart(id)} />

		<div class="$text-center">
			<Link icon="fas fa-reply" on:click={() => history.back()}>Zurück</Link>
		</div>
	{/if}
</Client>
