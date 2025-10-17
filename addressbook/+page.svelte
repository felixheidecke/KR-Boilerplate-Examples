<script lang="ts">
	import { AddressbookEntry, Client } from '$lib/boilerplate/components'

	export let data
</script>

<h1>Ortsvereine</h1>

<Client browser>
	{#each data.categories as category}
		<h2>{category.title}</h2>

		<ul class="$flex $flex-column $gap">
			{#each category.entries || [] as entry}
				<li>
					<AddressbookEntry {entry} />
				</li>
			{/each}
		</ul>
	{/each}
</Client>
