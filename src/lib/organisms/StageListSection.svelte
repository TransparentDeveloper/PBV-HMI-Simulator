<script>
	import Panel from '$lib/atoms/Panel.svelte';
	import StageMarker from '$lib/molecules/StageMarker.svelte';
</script>

<Panel class={'flex w-full flex-col gap-4 rounded-xl p-5 pt-3'}>
	<h3>프로세스</h3>
	<ol class={'flex w-full list-none flex-col gap-2'}>
		<li class="list-none" aria-labelledby="1">
			<StageMarker id="1" icon={'radio'} iconSize={'16px'} step={'ready'} label={'연결대기'} />
		</li>
		<li aria-labelledby="2">
			<StageMarker icon={'wifi'} iconSize={'16px'} step={'ready'} label={'근거리 통신'} />
		</li>
		<li aria-labelledby="3">
			<StageMarker icon={'shield'} iconSize={'16px'} step={'ready'} label={'제어권 이양'} />
		</li>
		<li aria-labelledby="4">
			<StageMarker icon={'signal'} iconSize={'16px'} step={'ready'} label={'자동제어'} />
		</li>
		<li aria-labelledby="5">
			<StageMarker icon={'check-circle'} iconSize={'16px'} step={'ready'} label={'완료'} />
		</li>
	</ol>
</Panel>
