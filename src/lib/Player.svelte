<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let name: string;
	export let points: number;
	let showControls: boolean = false;

	function addPoint() {
		points += 1;
	}

	function removePoint() {
		points -= 1;
	}

	function toggleControls() {
		showControls = !showControls;
	}

	function removePlayer(e: any) {
		e.preventDefault();
		dispatch('removeplayer', name);
	}
</script>

<main>
	<div class="card">
		<h1>
			{name}
			<button class="btn btn-primary btn-sm" on:click={toggleControls}>
				{#if showControls}-{:else}+{/if}
			</button>
			<button class="btn btn-danger btn-sm" on:click={removePlayer}>X</button>
		</h1>
		<h3>
			Points: {#if points === null}0{:else}{points}{/if}
		</h3>

		{#if showControls}
			<button class="btn" on:click={addPoint}>+1</button>
			<button class="btn btn-dark" on:click={removePoint}>-1</button>
			<input type="number" bind:value={points} />
		{/if}
	</div>
</main>

<style>
	h1 {
		color: var(--primary-color);
	}

	h3 {
		margin-bottom: 10px;
	}
</style>
