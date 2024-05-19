<script>
	export let data

	const { title, images } = data.album
</script>

<h1>{title}</h1>

<XioniAlbum {images} />

<div class="$text-center">
	<Link icon="fas fa-reply" to="./">Zurück zur Übersicht</Link>
</div>
