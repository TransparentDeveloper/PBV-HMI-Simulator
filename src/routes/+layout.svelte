<script lang="ts">
	import type { Snippet } from 'svelte';

	import favicon from '$lib/assets/favicon.svg';

	import '../app.css';

	interface Props {
		children: Snippet;
	}

	const props: Props = $props();
	const { children } = props;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class={'grid-background flex h-dvh w-dvw flex-col items-center justify-center'}>
	<a href="/">
		<h1
			class={'absolute top-5 left-[50%] -translate-x-1/2 text-center text-5xl font-bold text-gray-700'}
		>
			PBV HMI Simulator
		</h1>
	</a>

	{@render children?.()}
</main>

<style>
	.grid-background {
		background-image:
			linear-gradient(to right, #e8e8e8 1px, transparent 1px),
			linear-gradient(to bottom, #e8e8e8 1px, transparent 1px);
		background-size: 45px 45px;
	}
</style>
