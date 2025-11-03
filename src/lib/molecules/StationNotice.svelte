<script lang="ts">
	import type { Snippet } from 'svelte';

	import Close from '$lib/atoms/Icon/Close.svelte';
	import Panel from '$lib/atoms/Panel.svelte';
	import { checkUndefined } from '$lib/utils/type-checker';

	interface Props {
		onSummit?: VoidFunction;
		onClose?: VoidFunction;
	}

	const props: Props = $props();
	const { onSummit, onClose } = props;
</script>

<Panel
	class="flex w-full justify-between rounded-2xl p-6"
	onclick={(e) => {
		e.stopPropagation();
		if (!checkUndefined(onSummit)) {
			onSummit();
		}
	}}
>
	<span>모듈 교체가 가능한 스테이션이 근처에 있습니다.</span>
	{#if !!onClose}
		<Close
			className="border rounded-full"
			size={'1.25rem'}
			onclick={(e) => {
				e.stopPropagation();
				onClose();
			}}
		/>
	{/if}
</Panel>
