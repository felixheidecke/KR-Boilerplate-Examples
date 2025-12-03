<script lang="ts">
	import { Button, ButtonRow } from '$lib/boilerplate/components'
</script>

<h1>Button</h1>

<ul>
	<li><Button>Hallo</Button></li>
	<li class="$mt"><Button fontello="attention-circled" class="$row-reverse">Hinweis</Button></li>
	<li class="$mt"><Button fontello="youtube-play">YouTube</Button></li>
</ul>

<hr />

<h2 class="$my-3">ButtonRow</h2>

<ButtonRow>
	<Button>Standard</Button>
	<Button variant="primary">Primär</Button>
	<Button variant="secondary">Sekundär</Button>
</ButtonRow>

<code class="example"
	><pre>{`<ButtonRow>
  <Button>Standard</Button>
  <Button variant="primary">Primär</Button>
  <Button variant="secondary">Sekundär</Button>
</ButtonRow>`}</pre></code>
