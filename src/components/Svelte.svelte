<script lang="ts">
	import ctl from '@netlify/classnames-template-literals';
	export let msg: string;

	let count = 1;
</script>

<div class={ctl('msg text-xl')}>
	I am a Svelte component! - {msg} - {count}
	<button
		class={ctl('rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700')}
		on:click={() => count++}>Increase Svelte counter</button
	>
</div>

<style lang="scss">
	.msg {
		&:hover {
			font-weight: bold;
		}
	}
</style>
