<script>
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
						{#if event.ticketshop}
							<li>
								<Link to={event.ticketshop.toString()} icon="fas fa-ticket-alt"
									>Zum Ticketshop</Link>
							</li>
						{/if}
						{#if event.website}
							<li>
								<Link to={event.website.toString()} icon="fas fa-globe" />
							</li>
						{/if}
						{#if event.pdf}
							<li>
								<Link to={event.pdf.src} icon="fas fa-file-pdf">{event.pdf.title}</Link>
							</li>
						{/if}
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
