<script>
	const { children } = $props()
</script>

{@render children()}

<style global>
	:global(code.example) {
		position: relative;
		display: block;
		padding: 1rem;
		background-color: aliceblue;
		border-bottom-left-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
		outline: 1px solid rgb(210, 234, 255);
		outline-offset: -1px;
		font-size: 90%;
		margin-top: calc(38px + 1rem);
		margin-bottom: 1rem;
	}

	:global(code.example::before) {
		position: absolute;
		top: 0;
		left: 0;
		transform: translateY(-100%);
		content: 'Code:';
		font-size: 12px;
		padding: 12px;
		width: 100%;
		background-color: rgb(210, 234, 255);
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
	}

	:global(code.example pre) {
		margin: 0;
		line-height: 200%;
	}
</style>
