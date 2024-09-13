<script>
	import toFaIcon from '$lib/boilerplate/utils/toFaIcon.ts'

	export let data
</script>

<Wrapper>
	<h1>Events <i>(Expanded)</i></h1>
	<Client browser>
		<ol class="$flex $flex-column $gap">
			{#each data.events as event}
				<li>
					{#if event.image}
						<img src={event.image.thumbSrc} alt={event.image.alt} loading="lazy" />
					{/if}
					<h2>
						{event.title}
					</h2>
					<h3>
						{event.duration}
					</h3>
					{#if event.teaser}
						<p class="$font-bold">{@html event.teaser}</p>
					{/if}
					{#if event.description}
						<p>{@html event.description}</p>
					{/if}
					<ul class="$flex $gap">
						{#if event.organizer}
							<li>
								<Icon name="fas fa-user-circle" />
								{event.organizer}
							</li>
						{/if}
						{#each event.links as link}
							<li>
								<Link to={link.url} icon={toFaIcon(link.type)}>{link.title}</Link>
							</li>
						{/each}
					</ul>
					{#if event.images}
						<Grid gap class="$mt">
							{#each event.images as { src, alt }}
								<Grid size="tablet-1-3 desktop-1-5">
									<img {src} {alt} loading="lazy" />
								</Grid>
							{/each}
						</Grid>
					{/if}
				</li>
			{/each}
		</ol>
	</Client>
</Wrapper>
