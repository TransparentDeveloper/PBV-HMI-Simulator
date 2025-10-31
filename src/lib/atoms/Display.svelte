<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string;
		children?: Snippet;
	}

	const { className = '', children }: Props = $props();
</script>

<div
	class={'flex aspect-16/10 h-[500px] items-center justify-center rounded-2xl bg-gray-950 px-2.5 '}
>
	<div
		class={`flex aspect-video flex-1 rounded-xs bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-3 text-white transition-all ${className}`}
	>
		{@render children?.()}
	</div>
</div>
