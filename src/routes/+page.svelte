<script>
	import { goto } from '$app/navigation';
	/**
	 * [요구사항]
	 * - "스테이션 알림 UI" 가 노출되지 않은 경우, 2초 한 번씩 80% 의 확률로 해당 UI 를 노출한다.
	 */
	import Display from '$lib/atoms/Display.svelte';
	import Icon from '$lib/atoms/Icon/Icon.svelte';

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

	const goConnectStationPage = () => {
		goto('/connect-station');
	};

	const handleCloseStationNotice = () => {
		isShowStationNotice = false;
	};
</script>

<Display className={'relative'}>
	{#if isShowStationNotice}
		<div
			class="absolute top-0 z-10 mt-2 w-full"
			in:fly={{ x: 200, duration: 350, easing: backOut }}
			out:fly={{ x: 200, duration: 350, easing: backIn }}
		>
			<StationNotice onSummit={goConnectStationPage} onClose={handleCloseStationNotice} />
		</div>
	{/if}
	<div class="flex w-full flex-col p-6">
		<header class="flex w-full items-center justify-between">
			<b>오전 10:17</b>
			<div class="flex items-center gap-2">
				<Icon name={'wifi'} size={'1rem'} class={'text-cyan-500'} />
				<span class="font-light">5g</span>
			</div>
		</header>

		<section class="mt-8">
			<div class="itmes-center flex gap-4">
				<div
					class="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-blue-600"
				>
					<Icon name={'user'} size={'32px'} />
				</div>
				<div class="flex flex-col">
					<p class="text-sm text-white">환영합니다.</p>
					<b class="text-2xl text-white">테스터 님</b>
				</div>
			</div>
		</section>

		<p class="mt-6 text-lg text-white">오늘의 목적지는 어디인가요?</p>

		<section class="mt-6 flex h-full w-full flex-1 gap-6">
			<button
				class="flex h-full w-full cursor-pointer items-center gap-6 overflow-hidden rounded-3xl bg-linear-to-r from-cyan-500 to-blue-600 p-6"
			>
				<div
					class="group flex h-full w-full items-center gap-5 transition-transform hover:scale-105"
				>
					<div
						class="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
					>
						<Icon name={'map'} size={'36px'} />
					</div>
					<div class="flex flex-col items-start gap-2">
						<strong class="text-2xl">지도</strong>
						<p>목적지 설정﹒경로 안내</p>
						<small>실시간 내비게이션</small>
					</div>
				</div>
				<Icon name="chevron-right" size={'32px'} />
			</button>

			<button
				class="flex h-full w-full cursor-pointer items-center overflow-hidden rounded-3xl bg-linear-to-r from-purple-400 to-pink-600 p-6"
			>
				<div
					class="group flex h-full w-full items-center gap-5 transition-transform hover:scale-105"
				>
					<div
						class="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
					>
						<Icon name="setting" size={'36px'} />
					</div>
					<div class="flex flex-col items-start gap-2">
						<strong class="text-2xl">개인설정</strong>
						<p>차량 및 프로필 설정</p>
						<small>프로필 ﹒ 환결설정</small>
					</div>
				</div>
				<Icon name="chevron-right" size={'32px'} />
			</button>
		</section>
	</div>
</Display>
