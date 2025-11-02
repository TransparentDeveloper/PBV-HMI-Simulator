<script lang="ts">
	import LoadingSpinner from '$lib/atoms/LoadingSpinner.svelte';

	interface Props {
		onClickBack: VoidFunction;
		onClickNext: VoidFunction;
	}

	const props: Props = $props();
	const { onClickBack, onClickNext } = props;
</script>

<div class="relative flex h-full w-full flex-col justify-center overflow-hidden bg-transparent p-2">
	<div class="my-auto flex w-full items-center justify-center">
		<LoadingSpinner size={'2.25rem'} />
	</div>

	<div class="flex h-12 w-full items-center gap-2">
		<button
			class="itmes-center flex h-full w-full items-center justify-center rounded-xl border-2 border-gray-600 bg-linear-to-br from-blue-400 to-blue-700 font-bold backdrop-blur"
			onclick={onClickBack}>이전 단계로</button
		>
		<button
			class="itmes-center flex h-full w-full items-center justify-center rounded-xl border-2 border-gray-600 bg-linear-to-br from-orange-500 to-orange-700 font-bold backdrop-blur"
			onclick={onClickNext}>모듈 교체하기</button
		>
	</div>
</div>
