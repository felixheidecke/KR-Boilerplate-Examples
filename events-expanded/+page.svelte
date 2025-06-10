<script lang="ts">
	export let data
</script>

<Wrapper>
	<h1>Events <i>(Expanded)</i></h1>
	<Client browser>
		{#if data.events.length}
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
								<Fontello name="user" />
								{event.organizer}
							</p>
						{/if}
						<ButtonRow>
							{#if event.ticketshop}
								<Button to={event.ticketshop.toString()} fontello="ticket">Zum Ticketshop</Button>
							{/if}

							{#if event.website}
								<Button fontello="globe" to={event.website.toString()}
									>{event.website.hostname}</Button>
							{/if}

							{#if event.pdf}
								<Button fontello="file-pdf" to={event.pdf.src}>{event.pdf.title}</Button>
							{/if}
						</ButtonRow>
						{#if event.images}
							<Grid gap class="$mt">
								{#each event.images as { src, description }}
									<Grid size="tablet-1-3 desktop-1-5">
										<img {src} alt={description} loading="lazy" />
									</Grid>
								{/each}
							</Grid>
						{/if}
					</li>
				{/each}
			</ol>
		{:else}
			<p>
				<Fontello name="fontello-attention" />
				Zur Zeit sind keine Veranstaltungen geplant.
			</p>
		{/if}
	</Client>
</Wrapper>
