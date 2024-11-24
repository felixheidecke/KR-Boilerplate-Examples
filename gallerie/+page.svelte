<script>
	export let data

	const gallery = data.gallery.filter(album => album.images.length)
</script>

<h1>Gallerie</h1>

<Client browser>
	<XioniGallery {gallery} />
</Client>
