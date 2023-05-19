<script lang="ts">
	import { NAME } from "../../consts"

	

	export let introText: string =
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"

	export let introTitle: string = 'What is lorum Ipsum?'
</script>

<div class="p-8 flex">
	<div>
		<h2 class="mb-4 text-2xl">{introTitle}</h2>
		<p>{introText}</p>
	</div>
	<img alt="Portrait of {NAME}" class="rounded-full h-44 w-40 px-2" src="public/images/Portrait.jpeg" />
</div>
