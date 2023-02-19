<script lang="ts">
	export let msg: string;
</script>

<div class="msg text-xl">I am a Svelte component! - {msg}</div>

<style lang="scss">
	.msg {
		&:hover {
			font-weight: bold;
		}
	}
</style>
