<script lang="ts">
	export let nounderline: boolean | undefined = undefined;
	export let href: string;
	$: external = href.startsWith('http');
</script>

<a
	{href}
	class:underline={!nounderline}
	class=" hover:text-emerald-600 transition-colors"
	target={external ? '_blank' : ''}
	rel={external ? 'noopener noreferrer' : ''}
>
	<slot />
</a>
