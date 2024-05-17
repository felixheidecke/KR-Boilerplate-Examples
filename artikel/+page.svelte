<script>
	export let data
</script>

<Wrapper>
	<h1>Artikel</h1>
	<Client browser>
		<ol class="$flex $flex-column $gap">
			{#each data.articles as article}
				<XioniArticleTile tag="li" {article} />
			{/each}
		</ol>
	</Client>
</Wrapper>
