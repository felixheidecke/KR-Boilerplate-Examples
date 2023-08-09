<script lang="ts">
	import Address from '$lib/boilerplate/components/Address/Address.svelte'
	import type { ComponentProps } from 'svelte'

	const address: ComponentProps<Address> = {
		name: 'Musterfirma',
		title: 'Mustergültige Muster und Formen',
		street: 'Musterstraße 33',
		town: '336655 Musterstadt',
		phone: '+49 555 232541',
		email: 'mail@musterfirma.com',
		web: 'https://musterfirma.com/de'
	}
</script>

<Address {...address}>
	<li>Eine extra Zeile</li>
</Address>
