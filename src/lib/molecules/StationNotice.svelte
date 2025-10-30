<script lang="ts">
	import type { Snippet } from 'svelte';

	import Close from '$lib/atoms/Icon/Close.svelte';
	import Panel from '$lib/atoms/Panel.svelte';

	interface Props {
		onClose?: VoidFunction;
	}

	const props: Props = $props();
	const { onClose } = props;
</script>

<Panel class="relative w-full rounded-2xl p-6">
	{#if !!onClose}
		<Close
			className="absolute top-0 right-0 border rounded-full"
			size={'1.25rem'}
			onclick={(e) => {
				e.stopPropagation();
				onClose();
			}}
		/>
	{/if}
	<span>모듈 교체가 가능한 스테이션이 근처에 있습니다.</span>
</Panel>
