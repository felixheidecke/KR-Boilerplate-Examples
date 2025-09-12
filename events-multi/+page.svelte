<script lang="ts">
	import { Client, Fontello, Wrapper, XioniEventTile } from '$lib/boilerplate/components'

	let { data } = $props()
	let { events, eventCount } = $derived(data)
</script>

<Wrapper>
	<h1>Events</h1>
	<Client browser>
		<p>
			<small>Insgesamt {eventCount} Veranstaltungen</small>
		</p>
		{#if events.length}
			<ol class="$flex $flex-column $gap">
				{#each events as event}
					<XioniEventTile tag="li" {event} link="./{event.slug}_{event.module}-{event.id}" />
				{/each}
			</ol>
		{:else}
			<p>
				<Fontello name="attention" />
				Zur Zeit sind keine Veranstaltungen geplant.
			</p>
		{/if}
	</Client>
</Wrapper>
