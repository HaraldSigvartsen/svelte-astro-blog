<script>
	import { onMount } from "svelte";

	//Use in async
	const sleep = (milliseconds) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

	export let words = [
		"Bienvenido",
		"Bienvenue",
		"Willkommen",
		"Benvenuto",
		"ようこそ",
		"Velkommen",
        "Welcome"
	];
	let output = "";
	let wordIndex = 0;
	let letterIndex = 0;

	//Delete word letter by letter
	async function deleteWord() {
		let word = words[wordIndex];
		//Delete letters one at a time, with a wait
		for (let i = word.length - 1; i >= 0; i--) {
			output = output.slice(0, -1);
			await sleep(60);
		}
		letterIndex = 0;
	}

	async function type() {
		//initial part could probably be put in a different function
		let word = words[wordIndex];
		while (letterIndex < word.length) {
			output += word[letterIndex];
			letterIndex++;
			await sleep(70);
		}
		// Word sits for a second before deleting
		await sleep(1500);
		await deleteWord();
		await sleep(500);

		// Loop through all possible words and restart at end
		if (wordIndex < words.length - 1) {
			wordIndex++;
		} else {
			wordIndex = 0;
		}

		//Loop forever!
		await type();
	}

	onMount(async () => {
		await sleep(500);
		await type();
	});
</script>

{output}<span class=" blink">|</span>


<style>
    /* This could move to global.css inside tailwindCSS */
	.blink {
		animation: blink-animation 0.7s steps(5, start) infinite;
		-webkit-animation: blink-animation 0.7s steps(5, start) infinite;
	}
	@keyframes blink-animation {
		to {
			visibility: hidden;
		}
	}
	@-webkit-keyframes blink-animation {
		to {
			visibility: hidden;
		}
	}
</style>