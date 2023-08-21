<script>
	const { events } = $$props.data
</script>

<h1>Events</h1>

<Client browser>
	<ol class="$flex $flex-column $gap">
		{#each events as event}
			<XioniEventTile tag="li" {event} basePath="/events/" />
		{/each}
	</ol>
</Client>
