<script>
	import Button from '$lib/boilerplate/components/Button/Button.svelte'
</script>

<h1>Button</h1>

<ul>
	<li><Button>Hallo</Button></li>
	<li class="$mt"><Button icon="fab fa-apple">Apple</Button></li>
	<li class="$mt"><Button icon="fas fa-skating" class="$row-reverse">Schlittschuh</Button></li>
</ul>

<hr />

<h2 class="$my-3">ButtonRow</h2>

<ButtonRow>
	<Button>Hallo</Button>
	<Button>Hallo</Button>
	<Button>Hallo</Button>
</ButtonRow>
