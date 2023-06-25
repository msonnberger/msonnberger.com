<script>
	import GitHub from './GitHub.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<main class="w-full max-w-2xl">
	<div class="mt-20 flex justify-between">
		<h1 class="font-bold text-xl mr-8">Hi, I am Martin Sonnberger 👋</h1>
		<div class="flex gap-5 text-lg items-center">
			<a class="block" href="https://github.com/msonnberger" target="_blank">
				<GitHub />
			</a>
			<ThemeToggle />
		</div>
	</div>
	<h2 class="font-light">I do stuff on the web</h2>
	<hr class="border-slate-300 dark:border-slate-700 mt-4 mb-6" />
	<h3>Projects</h3>
	<div class="grid grid-cols-2 gap-3 w-full">
		<div class="bg-slate-200 h-28 rounded-2xl col-span-2">1</div>
		<div class="bg-rose-300 h-28 rounded-2xl col-span-2 sm:col-span-1">2</div>
		<div class="bg-emerald-300 h-28 rounded-2xl col-span-2 sm:col-span-1">3</div>
		<div class="bg-cyan-300 h-28 rounded-2xl col-span-2">4</div>
	</div>
</main>
