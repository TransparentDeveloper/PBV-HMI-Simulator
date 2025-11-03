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

<main class={'flex h-dvh w-dvw flex-col items-center justify-center'}>
	<h1
		class={'absolute top-5 left-[50%] -translate-x-1/2 text-center text-5xl font-bold text-gray-700'}
	>
		PBV HMI Simulator
	</h1>

	{@render children?.()}
</main>
