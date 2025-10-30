<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLElement> {
		children?: Snippet;
	}

	const props: Props = $props();
	const { class: className = '', children, ...rest } = props;
</script>

<section
	class={`flex h-fit min-h-4 w-full border border-slate-700 bg-slate-800/50 backdrop-blur ${className}`}
	{...rest}
>
	{@render children?.()}
</section>
