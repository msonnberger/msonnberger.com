<script>
	import Link from './Link.svelte';
</script>

<main>
	<section>
		<h3 class="mb-8 text-3xl tracking-wide">Projects</h3>
		<div class="grid grid-cols-2 gap-6 w-full">
			<article class="p-6 bg-slate-200 rounded-3xl col-span-2">
				<h4 class="text-2xl font-extrabold text-slate-800">Queued</h4>
				<span class="text-slate-800">2023</span>
				<hr class="border-slate-300 mt-2 mb-4" />
				<p class="font-medium text-slate-800">
					A tool for listening music on Spotify together with your friends. Add song suggestions and
					vote which one should play next. You decide on your collaborative playlist. I worked
					together with one fellow student and designed and built the project from start to finish
					using Figma and SvelteKit.
				</p>
				<a
					href="https://github.com/msonnberger/queued"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block mt-8 px-6 py-3 bg-slate-900 text-slate-100 font-semibold rounded-2xl hover:bg-slate-700 transition-colors"
				>
					View on Github
				</a>
			</article>
			<article class="p-6 bg-rose-300 rounded-3xl col-span-2 sm:col-span-1">
				<h4 class="text-2xl font-extrabold text-rose-900">Dycards</h4>
				<span class="text-rose-900">2022</span>
				<hr class="border-rose-400/80 mt-2 mb-4" />
				<p class="font-medium text-rose-900">
					A web app for flashcards where you can create various interactive cards like single or
					multiple choice questions. Together with one student, I designed and built the app in Ruby
					on Rails.
				</p>
				<a
					href="https://github.com/msonnberger/dycards"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block mt-8 px-6 py-3 bg-rose-950 text-rose-50 font-semibold rounded-2xl hover:bg-rose-800 transition-colors"
				>
					View on Github
				</a>
			</article>
			<article class="p-6 bg-emerald-300 rounded-3xl col-span-2 sm:col-span-1">
				<h4 class="text-2xl font-extrabold text-emerald-900">Rindr</h4>
				<span class="text-emerald-900">2022</span>
				<hr class="border-emerald-400 mt-2 mb-4" />
				<p class="font-medium text-emerald-900">
					A web app for finding ride shares at my university. With a Tinder-like swiping UI you can
					find available rides within a given radius. I was part of a group of four students and
					developed the app using Next.js.
				</p>
				<a
					href="https://github.com/msonnberger/rindr"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block mt-8 px-6 py-3 bg-emerald-950 text-emerald-50 font-semibold rounded-2xl hover:bg-emerald-800 transition-colors"
				>
					View on Github
				</a>
			</article>
			<article class="p-6 bg-cyan-300 rounded-3xl col-span-2">
				<h4 class="text-2xl font-extrabold text-cyan-900">darts.io</h4>
				<span class="text-cyan-900">2021</span>
				<hr class="border-cyan-400 mt-2 mb-4" />
				<p class="font-medium text-cyan-900">
					A WebSocket based website where you can connect to a room for exchanging darts scores over
					the internet. You enter your thrown darts and your partner sees the updated scores in real
					time. I designed and built the app from scratch using vanilla JS as well as PHP for the
					WebSocket server.
				</p>
				<a
					href="https://github.com/msonnberger/darts-io"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block mt-8 px-6 py-3 bg-cyan-950 text-cyan-50 font-semibold rounded-2xl hover:bg-cyan-800 transition-colors"
				>
					View on Github
				</a>
			</article>
		</div>
	</section>
	<section>
		<p class="mt-20 text-2xl">
			Want to get in touch?<br class="inline sm:hidden" />
			<Link href="mailto:hello@msonnberger.com">Send me an email!</Link>
		</p>
	</section>
</main>
