<script lang="ts">
	import Display from '$lib/atoms/Display.svelte';
	import Icon from '$lib/atoms/Icon/Icon.svelte';

	import StageIndicator from '$lib/organisms/StageIndicator.svelte';
	import SimulationView from '$lib/organisms/SimulationView.svelte';
	import StageListSection from '$lib/organisms/StageListSection.svelte';
</script>

<Display className="flex flex-col w-full p-2">
	<div class="flex flex-col gap-1.5">
		<div class="flex items-center gap-2">
			<Icon name={'pbv'} size={'2rem'} class={'animate-fade-to-cyan'} />
			<h1 class="text-3xl font-medium text-white">PBV Module Swap System</h1>
		</div>
		<p class="text-slate-400">KIA PBV Station</p>
	</div>
	<div class="mb-4 w-full"></div>
	<div class="grid w-full grid-cols-2 gap-2">
		<SimulationView />
		<div class="flex h-full w-full flex-col gap-2">
			<StageIndicator />
			<StageListSection />
		</div>
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
		animation: fade-to-cyan 150ms ease-in-out forwards 500ms;
	}
</style>
