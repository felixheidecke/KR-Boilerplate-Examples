<script>
	export let data
</script>

<Wrapper>
	<h1>Events</h1>
	<Client browser>
		<p>
			<small>Insgesamt {data.eventCount} Veranstaltungen</small>
		</p>
		{#if data.events.length}
			<ol class="$flex $flex-column $gap">
				{#each data.events as event}
					<XioniEventTile tag="li" {event} link="./{event.slug}_{event.module}-{event.id}" />
				{/each}
			</ol>
		{:else}
			<p>
				<i class="fontello-attention" />
				Zur Zeit sind keine Veranstaltungen geplant.
			</p>
		{/if}
	</Client>
</Wrapper>
