<script lang="ts">
	import { CART } from '../../stores'

	// --- [ Components ] ----------------------------------------------------------------------------

	import Button from '$lib/boilerplate/components/Button/Button.svelte'
	import Client from '$lib/boilerplate/components/Client/Client.svelte'
	import XioniShopCartTable from '$lib/boilerplate/components/XioniShopCartTable/XioniShopCartTable.svelte'
	import Link from '$lib/boilerplate/components/Link/Link.svelte'
	import MakeShopCart from '$lib/boilerplate/libraries/xioni-shop/cart'

	// -----------------------------------------------------------------------------------------------

	const module: number = $$props.data.module

	async function updateCart(id: number, quantity: number) {
		const { updateItemQuantity } = MakeShopCart(module)
		const { success, data } = await updateItemQuantity(id, quantity)

		if (success) {
			CART.set(data)
		}
	}
</script>

<h1>Warenkorb</h1>
<Client browser>
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
