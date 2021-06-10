<script lang="ts">
	import Navbar from './lib/navbar.svelte';
	import Player from './lib/Player.svelte';
	import AddPlayer from './lib/AddPlayer.svelte';

	let players = [
		{
			name: 'John Doe',
			points: 53,
		},
		{
			name: 'Sam Smith',
			points: 45,
		},
		{
			name: 'Sara Wilson',
			points: 34,
		},
	];

	function addPlayer(e: any) {
		const newPlayer = e.detail;
		players = [...players, newPlayer];
	}

	function removePlayer(e: any) {
		players = players.filter((player) => player.name !== e.detail);
	}
</script>

<main>
	<Navbar />

	<div class="container">
		<AddPlayer on:addplayer={addPlayer} />

		{#if players.length === 0}
			<h3 class="text-center">No players, Be the First One!</h3>
		{:else}
			{#each players as player}
				<Player
					name={player.name}
					points={player.points}
					on:removeplayer={removePlayer}
				/>
			{/each}
		{/if}
	</div>
</main>
