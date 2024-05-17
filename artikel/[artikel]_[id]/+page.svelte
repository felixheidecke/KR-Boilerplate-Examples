<script>
	export let data
</script>

<Wrapper>
	<XioniArticle article={data.article} />
	<hr />
	<div class="$text-center $my-3">
		<Link icon="fas fa-reply" to="./">Zurück zur Übersicht</Link>
	</div>
</Wrapper>
