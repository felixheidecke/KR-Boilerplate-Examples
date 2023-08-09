<script>
	const { events } = $$props.data

	let registration = null // bind XioniEventRegistration
	let selectedEvent = null

	function openRegistration(event) {
		selectedEvent = event
		registration.open()
	}
</script>

<h1>Events <i>(Expanded)</i></h1>

<Client browser>
	<ol class="$flex $flex-column $gap">
		{#each events as event}
			<li class="event">
				{#if event.image}
					<img
						class="event__image"
						src={event.image.thumbSrc}
						alt={event.image.alt}
						loading="lazy" />
				{/if}
				<h2>
					{event.title}
				</h2>
				<h3>
					{event.duration}
				</h3>
				{#if event.description}
					{@html event.description}
				{/if}
				{#if event.details}
					{@html event.details}
				{/if}
				{#if event.flags?.includes('Anmeldung')}
					<li>
						<Button icon="fas fa-ticket-alt" on:click={() => openRegistration(event)}
							>Jetzt anmelden</Button>
					</li>
				{/if}
				<hr class="$my" />
				<ul class="$flex $gap">
					{#if event.organizer}
						<li>
							<Icon name="fas fa-user-circle" />
							{event.organizer}
						</li>
					{/if}
					{#if event.ticketshop}
						<li>
							<Link to={event.ticketshop.toString()} icon="fas fa-ticket-alt">Zum Ticketshop</Link>
						</li>
					{/if}
					{#if event.website}
						<li>
							<Link to={event.website.toString()} icon="fas fa-globe" />
						</li>
					{/if}
					{#if event.pdf}
						<li>
							<Link to={event.pdf.src} icon="fas fa-file-pdf">{event.pdf.title}</Link>
						</li>
					{/if}
				</ul>
				{#if event.images}
					<hr class="$my" />
					<Grid gap class="$mt">
						{#each event.images as { src, alt }}
							<Grid size="tablet-1-3 desktop-1-5">
								<img {src} {alt} loading="lazy" />
							</Grid>
						{/each}
					</Grid>
				{/if}
			</li>
		{/each}
	</ol>

	<XioniEventRegistration bind:this={registration} event={selectedEvent} to={4}>
		<div class="$flex $flex-column $gap">
			<Input name="Name" label="Name" placeholder="Vor- und Nachname" required />
			<Textarea name="Anschrift" label="Anschrift" required />
			<Input name="Telefon" label="Telefonnummer" required />
			<Input type="Email" name="Email" label="E-Mail-Adresse" required />
			<Textarea rows="2" name="Nachricht" label="Nachricht" />
			<Checkbox
				name="datenschutz"
				label="Ich habe die <a href='/datenschutz'>Datenschutzerklärung</a> zur Kenntnis genommen und stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden."
				value="akzeptiert"
				required />
		</div>
		<div slot="done">
			<p>Vielen Dank für Ihre Anmeldung.</p>
		</div>
	</XioniEventRegistration>
</Client>

<style lang="scss">
	@import '$variables';

	.event {
		padding: 1rem;
		display: flow-root;
		position: relative;
		background-color: #eee;
		width: 100%;

		&__image {
			margin-bottom: 1rem;

			@include breakpoint('tablet-up') {
				width: 12.5rem;
				aspect-ratio: 1/1;
				object-fit: cover;
				float: right;
				margin-left: 2rem;
			}
		}
	}
</style>
