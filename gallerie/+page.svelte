<script>
	import { page } from '$app/stores'

	export let data
</script>

<h1>Gallerie</h1>

<Client browser>
	{#await data.gallery}
		<p>Wird geladen...</p>
	{:then gallery}
		<XioniGallery {gallery} basePath="{$page.url.pathname}/" />
	{/await}
</Client>
