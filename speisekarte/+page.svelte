<script>
	export let data

	const menuCard = data.menuCard
</script>

<h1>Speisekarte</h1>

<Client browser>
	<XioniMenuCard {menuCard} />
</Client>
