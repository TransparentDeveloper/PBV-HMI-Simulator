<script lang="ts">
	import type { Snippet, SvelteComponent } from 'svelte';

	interface Props {
		className?: string;
		children?: Snippet;
	}

	const props: Props = $props();
	const { className = '', children, ...rest } = props;
</script>

<div
	class={`flex h-fit min-h-4 w-full border border-slate-700 bg-slate-800/50 p-6 backdrop-blur ${className}`}
	{...rest}
>
	{@render children?.()}
</div>
