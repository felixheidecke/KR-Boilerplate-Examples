<script>
	const { articles } = $$props.data
</script>

<h1>Artikel</h1>

<Client browser>
	<ol class="$flex $flex-column $gap">
		{#each articles as article}
			<XioniArticleTile tag="li" {article} basePath="/articles/" />
		{/each}
	</ol>
</Client>
