<script>
	export let data

	let expandedElement = null
</script>

<Wrapper>
	<h1>Events <i>(Toggle)</i></h1>
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
					{#if event.description}
						{@html event.description}
					{/if}
					{#if expandedElement === event.id}
						{#if event.details}
							{@html event.details}
						{/if}
						<ul class="$flex $gap">
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
									<Grid size="tablet-1-5">
										<img {src} {alt} loading="lazy" />
									</Grid>
								{/each}
							</Grid>
						{/if}
						<Link
							icon="fas fa-angle-up"
							class="$row-reverse $mt"
							on:click={() => (expandedElement = null)}>Weniger</Link>
					{:else}
						<Link
							icon="fas fa-angle-down"
							class="$row-reverse"
							on:click={() => (expandedElement = event.id)}>
							Mehr erfahren
						</Link>
					{/if}
				</li>
			{/each}
		</ol>
	</Client>
</Wrapper>
