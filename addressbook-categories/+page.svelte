<script lang="ts">
	import { AddressbookEntry, Client } from '$lib/boilerplate/components'

	let { data } = $props()

	const categories = $derived(data.categories || [])
</script>

<h1>Ortsvereine</h1>

<Client browser>
	{#each categories as { title, entries }}
		<h2>{title}</h2>

		<ul class="$flex $flex-column $gap">
			{#each entries || [] as entry}
				<li>
					<AddressbookEntry {entry} />
				</li>
			{/each}
		</ul>
	{/each}
</Client>
