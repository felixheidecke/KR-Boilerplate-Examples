<script>
	export let data
</script>

<Wrapper>
	<h1>Events</h1>
	<Client browser>
		<ol class="$flex $flex-column $gap">
			{#each data.events as event}
				<XioniEventTile tag="li" {event} />
			{/each}
		</ol>
	</Client>
</Wrapper>
