<script lang="ts">
	import { page } from '$app/stores'

	import Client from '$lib/boilerplate/components/Client/Client.svelte'
	import Wrapper from '$lib/boilerplate/components/Wrapper/Wrapper.svelte'
	import EventTile from '$lib/boilerplate/components/XioniEventTile/XioniEventTile.svelte'

	export let data
</script>

<Wrapper>
	<h1>Events</h1>

	<Client browser>
		<ol class="$flex $flex-column $gap">
			{#each data.events as event}
				<EventTile tag="li" {event} basePath="{$page.url.pathname}/" />
			{/each}
		</ol>
	</Client>
</Wrapper>
