<script>
	import '../app.css';
	import GitHub from './GitHub.svelte';
	import Link from './Link.svelte';
	import LinkedIn from './LinkedIn.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<svelte:head>
	<title>Martin Sonnberger</title>
</svelte:head>

<div
	class="w-screen min-h-[100dvh] flex flex-col items-center px-5 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100"
>
	<div class="w-full max-w-2xl flex-1">
		<header>
			<div class="mt-20 flex justify-between">
				<h1 class="font-handwriting tracking-wide text-3xl mr-8 mb-2">
					Hey, I am Martin Sonnberger 👋
				</h1>
				<div class="flex gap-5 text-lg items-center">
					<a
						class="block hover:text-emerald-600 transition-colors"
						href="https://linkedin.com/in/msonnberger"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedIn />
					</a>
					<a
						class="block hover:text-emerald-600 transition-colors"
						href="https://github.com/msonnberger"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GitHub />
					</a>
					<span class="text-xl leading-none translate-y-[1px]"><ThemeToggle /></span>
				</div>
			</div>
			<h2 class="font-light">I do stuff on the web</h2>
			<hr class="border-slate-300 dark:border-slate-700 mt-4 mb-10" />
		</header>
		<slot />
	</div>
	<footer class="w-full justify-center mt-20">
		<hr class="w-full max-w-6xl mx-auto dark:border-slate-700" />
		<div class="pb-4 pt-3 w-full max-w-6xl mx-auto text-slate-500 flex justify-between text-sm">
			<small class="text-sm tracking-wide">© Martin Sonnberger</small>
			<Link href="/imprint" nounderline>Imprint</Link>
		</div>
	</footer>
</div>
