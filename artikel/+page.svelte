<script>
	export let data
</script>

<Wrapper size="small">
	<h1>Artikel</h1>
	<Client browser>
		<ol class="$flex $flex-column $gap">
			{#each data.articles as article}
				<XioniArticleTile tag="li" {article} />
			{/each}
		</ol>
	</Client>
</Wrapper>
