<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string;
		children?: Snippet;
	}

	const { className = '', children }: Props = $props();
</script>

<div
	class={'flex aspect-16/10 h-[500px] w-[800px] items-center justify-center overflow-hidden rounded-2xl bg-gray-950 px-2.5 '}
>
	<div
		class={`relative flex aspect-video w-full flex-1 overflow-hidden rounded-xs bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white transition-all ${className}`}
	>
		{@render children?.()}
	</div>
</div>
