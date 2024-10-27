<script>
	import '$lib/boilerplate/components/XioniArticle/XioniArticle.scss'
	import stammdaten from '$stammdaten'

	export let data
</script>

<h1>Artikel</h1>

<Wrapper tag="ul" size="small" responsive>
	{#each data.articles as { author, date, content, image, pdf, teaser, title, website }}
		<li>
			{#if image}
				<Figure baseName="XioniArticleImage" src={image.src} caption={image.description} />
			{/if}

			<h1 class="XioniArticle__title">
				{title}
			</h1>

			{#if author || date}
				<XioniArticleMeta {author} {date} />
			{/if}

			<p class="XioniArticle__teaser">
				{@html teaser}
			</p>

			{#if content?.length}
				<div class="XioniArticle__content">
					{#each content as { text, title, image }}
						<XioniArticleContent {text} {title} {image} />
					{/each}
				</div>
			{/if}

			{#if pdf || website}
				<XioniArticleButtons {pdf} {website} />
			{/if}
		</li>
	{/each}
</Wrapper>
