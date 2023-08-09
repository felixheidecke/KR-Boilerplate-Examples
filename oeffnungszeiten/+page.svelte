<script>
	import OpeningHours from '$lib/boilerplate/components/OpeningHours/OpeningHours.svelte'
</script>

<h1>Öffnungszeiten</h1>

<OpeningHours
	isOpenImage="https://media3.giphy.com/media/CdUPebPzF2kOQ/giphy.gif"
	isClosedImage="https://media0.giphy.com/media/dZAtisreEIo5HkGU3w/giphy.gif"
	hours="Mo-Sa 09:00-12:00; We 15:00-18:00"
	interactive />
