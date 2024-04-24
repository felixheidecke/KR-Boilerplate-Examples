<script lang="ts">
	import { page } from '$app/stores'

	import Client from '$lib/boilerplate/components/Client/Client.svelte'
	import ArticleTile from '$lib/boilerplate/components/XioniArticleTile/XioniArticleTile.svelte'

	export let data
</script>

<h1>Artikel</h1>

<Client browser>
	<ol class="$flex $flex-column $gap">
		{#each data.articles as article}
			<ArticleTile tag="li" {article} basePath="{$page.url.pathname}/" />
		{/each}
	</ol>
</Client>
