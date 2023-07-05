<script lang="ts">
	// --- [ Components ] ----------------------------------------------------------------------------

	import Client from '$lib/boilerplate/components/Client/Client.svelte'
	import Grid from '$lib/boilerplate/components/Grid/Grid.svelte'
	import Link from '$lib/boilerplate/components/Link/Link.svelte'
	import ShopProductTile from '$lib/boilerplate/components/XioniShopProductTile/XioniShopProductTile.svelte'

	// --- [ Types ] ---------------------------------------------------------------------------------

	import type { ShopProduct } from '$lib/boilerplate/libraries/xioni-shop/products.types'

	const products: ShopProduct[] = $$props.data.products
</script>

<Client browser>
	<Grid gap>
		{#each products as product}
			<Grid size="1-3">
				<Link class="$decoration-none" to="/shop/{product.slug}_p{product.id}">
					<ShopProductTile {product} />
				</Link>
			</Grid>
		{/each}
	</Grid>
</Client>
