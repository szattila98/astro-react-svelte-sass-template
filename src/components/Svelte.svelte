<script lang="ts">
	import ctl from '@netlify/classnames-template-literals';
	export let msg: string;
</script>

<div class={ctl('msg text-xl')}>I am a Svelte component! - {msg}</div>

<style lang="scss">
	.msg {
		&:hover {
			font-weight: bold;
		}
	}
</style>
