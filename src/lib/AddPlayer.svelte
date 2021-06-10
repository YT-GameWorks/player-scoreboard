<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let player = {
		name: '',
		points: 0,
	};

	function onSubmit(e: any) {
		e.preventDefault();
		dispatch('addplayer', player);

		player = {
			name: '',
			points: 0,
		};
	}
</script>

<main>
	<form class="grid-3" on:submit={onSubmit}>
		<input type="text" placeholder="Player Name" bind:value={player.name} />
		<input type="text" placeholder="Player Points" bind:value={player.points} />

		<input type="submit" value="Add Player" class="btn btn-primary" />
	</form>
</main>
