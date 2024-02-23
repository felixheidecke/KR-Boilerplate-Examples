<script>
	import stammdaten from '$lib/stammdaten'

	const { event } = $$props.data
	let registration = null

	function handleEventClick({ detail }) {
		if (detail === 'registration') registration.open()
	}
</script>

<Wrapper>
	<XioniEvent class="$mt-2" {event} on:click={handleEventClick} />
</Wrapper>

<XioniEventRegistration bind:this={registration} formId={4} {event}>
	<Input name="Name" label="Name" placeholder="Vor- und Nachname" class="$mt" required />
	<Textarea name="Anschrift" label="Anschrift" class="$mt" required />
	<Input name="Telefon" label="Telefonnummer" class="$mt" required />
	<Input type="Email" name="Email" label="E-Mail-Adresse" class="$mt" required />
	<Textarea rows="2" name="Nachricht" label="Nachricht" class="$mt" />
	<Checkbox
		name="datenschutz"
		label="Ich habe die <a href='/datenschutz'>Datenschutzerklärung</a> zur Kenntnis genommen und stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden."
		value="akzeptiert"
		class="$mt"
		required />
	<div slot="done">
		<hr />
		<p>Vielen Dank für Ihre Anmeldung.</p>
		<p>Grüße von {stammdaten.name}</p>
	</div>
</XioniEventRegistration>

<div class="$text-center $mt-2">
	<Link icon="fas fa-reply" to="./">Zurück zur Übersicht</Link>
</div>
