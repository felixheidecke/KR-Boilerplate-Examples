<script lang="ts">
	import Client from '$lib/boilerplate/components/Client/Client.svelte'
	import Wrapper from '$lib/boilerplate/components/Wrapper/Wrapper.svelte'
	import XioniArticleTile from '$lib/boilerplate/components/XioniArticleTile/XioniArticleTile.svelte'

	export let data
</script>

<Wrapper size="small">
	<h1>Artikel ({data.articlesMeta.totalCount})</h1>
	<Client browser>
		<ol class="$flex $flex-column $gap">
			{#each data.articles as article}
				<XioniArticleTile tag="li" {article} />
			{/each}
		</ol>
	</Client>
</Wrapper>
