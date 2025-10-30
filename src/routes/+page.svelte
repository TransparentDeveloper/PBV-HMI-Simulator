<script>
	/**
	 * [요구사항]
	 * - "스테이션 알림 UI" 가 노출되지 않은 경우, 2초 한 번씩 80% 의 확률로 해당 UI 를 노출한다.
	 */
	import Display from '$lib/atoms/Display.svelte';
	import StationNotice from '$lib/molecules/StationNotice.svelte';
	import { backIn, backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let isShowStationNotice = $state(false);

	$effect(() => {
		const intervalId = setInterval(() => {
			if (isShowStationNotice) return;

			const randomInt = Math.floor(Math.random() * 9);
			console.log(randomInt);
			if (randomInt < 8) {
				isShowStationNotice = true;
			}
		}, 4 * 1000);

		return () => {
			clearInterval(intervalId);
		};
	});

	const handleCloseStationNotice = () => {
		isShowStationNotice = false;
	};
</script>

<Display>
	{#if isShowStationNotice}
		<div
			class="w-full"
			in:fly={{ x: 200, duration: 350, easing: backOut }}
			out:fly={{ x: 200, duration: 350, easing: backIn }}
		>
			<a href="/connect-station">
				<StationNotice onClose={handleCloseStationNotice} />
			</a>
		</div>
	{/if}
</Display>
