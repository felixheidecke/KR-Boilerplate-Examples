<script lang="ts">
	import { Button, ButtonRow, Wrapper } from '$lib/boilerplate/components'
</script>

<Wrapper size="smaller">
	<h1>Button</h1>

	<ul>
		<li><Button>Hallo</Button></li>
		<li class="$mt"><Button fontello="attention-circled" class="$row-reverse">Hinweis</Button></li>
		<li class="$mt"><Button fontello="youtube-play">YouTube</Button></li>
	</ul>

	<hr />

	<h2 class="$my-3">ButtonRow</h2>

	<ButtonRow>
		<Button>Hallo</Button>
		<Button>Hallo</Button>
		<Button>Hallo</Button>
	</ButtonRow>
</Wrapper>
