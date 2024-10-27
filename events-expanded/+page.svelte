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
						<img src={event.image.src} alt={event.image.description} loading="lazy" />
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
					{#if event.organizer}
						<p>
							<Icon name="fas fa-user-circle" />
							{event.organizer}
						</p>
					{/if}
					<ButtonRow>
						{#if event.ticketshop}
							<Button
								to={event.ticketshop.toString()}
								on:click={() => emit('ticketshopButtonClick')}
								icon="fas fa-ticket-alt">Zum Ticketshop</Button>
						{/if}

						{#if event.website}
							<Button
								icon="fas fa-globe"
								on:click={() => emit('click', 'website')}
								to={event.website.toString()}>{event.website.hostname}</Button>
						{/if}

						{#if event.pdf}
							<Button icon="fas fa-file-pdf" to={event.pdf.src}>{event.pdf.title}</Button>
						{/if}
					</ButtonRow>
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
