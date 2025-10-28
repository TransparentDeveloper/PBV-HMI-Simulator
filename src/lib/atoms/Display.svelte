<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string;
		children?: Snippet;
	}

	const { className, children }: Props = $props();
</script>

<div
	class={'flex aspect-16/10 h-[350px] items-center justify-center rounded-2xl bg-gray-950 px-2.5'}
>
	<div class={`flex aspect-video flex-1 rounded-xs ${className ?? ''}`}>
		{@render children?.()}
	</div>
</div>
