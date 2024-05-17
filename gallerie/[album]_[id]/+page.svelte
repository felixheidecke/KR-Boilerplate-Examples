<script>
	export let data

	$: album = data.album
</script>

<!-- <pre>{JSON.stringify(album, null, 2)}</pre> -->

<h1>{album.title}</h1>

<XioniAlbum images={album.images} />

<div class="$text-center">
	<Link icon="fas fa-reply" to="./">Zurück zur Übersicht</Link>
</div>
