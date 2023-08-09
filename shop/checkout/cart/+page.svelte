<script lang="ts">
	import { CART } from '../../stores'

	// --- [ Components ] ----------------------------------------------------------------------------

	import Button from '$lib/boilerplate/components/Button/Button.svelte'
	import Client from '$lib/boilerplate/components/Client/Client.svelte'
	import XioniShopCartTable from '$lib/boilerplate/components/XioniShopCartTable/XioniShopCartTable.svelte'
	import Link from '$lib/boilerplate/components/Link/Link.svelte'
	import MakeShopCart from '$lib/boilerplate/libraries/xioni-shop/cart'

	// --- [ Types ] ---------------------------------------------------------------------------------

	import type { XioniFetchErrorResponse } from '$lib/boilerplate/libraries/xioni-fetch/types'

	// -----------------------------------------------------------------------------------------------

	const module: number = $$props.data.module

	let cartError = null as null | XioniFetchErrorResponse

	async function updateCart(id: number, quantity: number) {
		cartError = null
		const { updateItemQuantity } = MakeShopCart(module)
		const [error, cart] = await updateItemQuantity(id, quantity)

		if (error) {
			cartError = error
			return false
		}

		CART.set(cart)
		return true
	}
</script>

<h1>Warenkorb</h1>
<Client browser>
	{#if cartError}
		<pre>{JSON.stringify(cartError, null, 2)}</pre>
	{/if}

	{#if !$CART.products.length}
		<h4>Ihr Warenkorb ist noch leer.</h4>
		<Link to="/shop" icon="fas fa-store">Zum Shop</Link>
	{:else}
		<XioniShopCartTable
			products={$CART.products}
			additionalCost={$CART.additionalCost}
			shipping={$CART.shipping}
			total={$CART.total}
			quantitySelector
			on:product-quantity-update={({ detail }) => updateCart(detail.productId, detail.quantity)} />

		<Button to="/shop/checkout/address">Weiter zur Kasse</Button>
	{/if}
</Client>
