<script>
	import icon from '$lib/boilerplate/actions/icon'
	import fontello from '$lib/boilerplate/actions/fontello'
	import Fontello from '$lib/boilerplate/components/Fontello/Fontello.svelte'

	const icons = [
		'angle-left',
		'angle-right',
		'calendar-x',
		'user',
		'calendar-empty',
		'file-pdf',
		'fax',
		'phone',
		'facebook',
		'instagram',
		'globe',
		'minus',
		'plus',
		'link',
		'angle-circled-left',
		'angle-circled-right',
		'wine',
		'bed',
		'eye',
		'graduation-cap',
		'desktop',
		'up-open',
		'left-open',
		'right-open',
		'mail',
		'angle-up',
		'angle-down',
		'down',
		'ticket',
		'cancel-circled',
		'youtube-play',
		'ok',
		'cancel',
		'attention',
		'attention-circled',
		'basket',
		'smile',
		'print'
	]
</script>

<h1>Fontello Icon</h1>

<ul class="$mt-2" use:fontello={'wine'}>
	<li>Lorem ipsum</li>
	<li>Consectetur adipisicing</li>
	<li>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, omnis quae minima est et error
		deserunt impedit molestiae. Provident voluptates rerum saepe quasi repellendus mollitia
		accusamus deserunt, a incidunt consectetur.
	</li>
	<li>Dolor sit amet</li>
</ul>

<h2>Verfügbare Icons</h2>

<ul>
	{#each icons as name}
		<li>
			<Fontello {name} />
			{name}
		</li>
	{/each}
</ul>
