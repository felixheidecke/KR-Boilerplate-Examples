<script>
	import stammdaten from '$stammdaten'

	export let data
</script>

<h1>Artikel</h1>

<Wrapper tag="ol" size="small" class="$flex $flex-column $gap-3">
	{#each data.articles as { author, date, content, image, pdf, teaser, title, website }}
		<li class="article">
			{#if image}
				<Figure baseName="article-figure" src={image.src} caption={image.description} />
			{/if}

			<h1 class="article-title">
				{title}
			</h1>

			{#if author || date}
				<XioniArticleMeta baseName="article-meta" {author} {date} />
			{/if}

			<p>
				{@html teaser}
			</p>

			{#each content || [] as { text, title, image }}
				<XioniArticleContent baseName="article-content" {text} {title} {image} />
			{/each}

			{#if pdf || website}
				<XioniArticleButtons baseName="article-buttons" {pdf} {website} />
			{/if}
		</li>
	{/each}
</Wrapper>
