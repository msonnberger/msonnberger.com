<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Martin Sonnberger</title>
</svelte:head>

<div
	class="w-screen min-h-[100dvh] flex flex-col items-center px-5 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100"
>
	<slot />
</div>
