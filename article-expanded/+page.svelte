<script>
	import stammdaten from '$stammdaten'

	export let data
</script>

<h1>Artikel</h1>

<Wrapper tag="ol" size="small" class="$flex $flex-column $gap-3">
	{#each data.articles as { author, date, content, image, pdf, teaser, title, website }}
		<li>
			{#if image}
				<Figure src={image.src} caption={image.description} />
			{/if}

			<h2>
				{title}
			</h2>

			{#if author || date}
				<XioniArticleMeta {author} {date} />
			{/if}

			<p>
				{@html teaser}
			</p>

			{#each content || [] as { text, title, image }}
				<XioniArticleContent {text} {title} {image} />
			{/each}

			{#if pdf || website}
				<XioniArticleButtons {pdf} {website} />
			{/if}
		</li>
	{/each}
</Wrapper>
