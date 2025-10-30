<script lang="ts">
	import Display from '$lib/atoms/Display.svelte';
	import Truck from '$lib/atoms/Icon/Truck.svelte';
	import StageListSection from '$lib/organisms/StageListSection.svelte';
</script>

<Display className="flex flex-col w-full p-6">
	<div class="flex flex-col gap-1.5">
		<div class="flex items-center gap-2">
			<Truck class={'animate-fade-to-cyan'} size={'2rem'} />
			<h1 class="text-3xl font-medium text-white">PBV 모듈 시스템</h1>
		</div>
		<p class="text-slate-400">Purpose Built Vehicle - 모듈 도킹/분리 제어</p>
	</div>
	<div class="mb-4 w-full"></div>
	<div class="grid w-full grid-cols-2">
		<StageListSection />
	</div>
</Display>

<style>
	@keyframes fade-to-cyan {
		from {
			color: white;
		}
		to {
			color: rgb(34 211 238);
		}
	}

	:global(.animate-fade-to-cyan) {
		animation: fade-to-cyan 250ms ease-in-out forwards 500ms;
	}
</style>
