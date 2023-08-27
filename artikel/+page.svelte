<script>
	import { page } from '$app/stores'

	const { articles } = $$props.data
</script>

<Container>
	<h1>Artikel</h1>

	<Client browser>
		<ol class="$flex $flex-column $gap">
			{#each articles as article}
				<XioniArticleTile tag="li" {article} basePath="{$page.url.pathname}/" />
			{/each}
		</ol>
	</Client>
</Container>
