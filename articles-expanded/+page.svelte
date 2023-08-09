<script>
	import { formatDate } from '$lib/boilerplate/utils/format-date'

	const { articles } = $$props.data
</script>

<h1>Artikel</h1>

<ol class="$flex $flex-column $gap">
	{#each articles as { image, title, author, date, text, content, pdf }}
		<li class="my-article">
			{#if image}
				<img src={image.src} alt={image.alt} class="my-article__image $ml" />
			{/if}
			<h2>
				{title}
			</h2>

			<ul class="$flex $gap">
				{#if author}
					<li class="$font-small">
						<Icon name="far fa-user" class="$mr-1/4" />
						<span>Von {author}</span>
					</li>
				{/if}
				<li class="$font-small">
					<Icon name="far fa-calendar-alt" class="$mr-1/4" />
					<time>{formatDate('d. LLLL Y', date)}</time>
				</li>
			</ul>

			{@html text}

			{#each content || [] as { image, text }}
				{#if image}
					<img
						src={image.src}
						alt={image.alt}
						align={image.align}
						class:$mr={image.align === 'left'}
						class:$ml={image.align === 'right'}
						class="article__content-image" />
				{/if}
				{#if text}
					{@html text}
				{/if}
			{/each}

			{#if pdf}
				<Button to={pdf.src} target="_blank" icon="fas fa-file-pdf">
					{pdf.title}
				</Button>
			{/if}
		</li>
	{/each}
</ol>

<style lang="scss">
	@import '$variables';

	.my-article {
		padding: 1rem;
		display: flow-root;
		position: relative;
		background-color: #eee;
		width: 100%;

		&__image {
			margin-bottom: 1rem;

			@include breakpoint('tablet-up') {
				width: 12.5rem;
				aspect-ratio: 1/1;
				object-fit: cover;
				float: right;
				margin-left: 2rem;
			}
		}

		&__content-image {
			width: 10rem;
			height: 10rem;
			object-fit: cover;
		}
	}
</style>
