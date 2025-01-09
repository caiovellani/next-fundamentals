import { Suspense } from "react";
import { LongWaitComponent } from "./components/long-wait-component";
import { GithubProfile } from "./components/github-profile";

export default async function Home() {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return (
		<div>
			<h1>Home!</h1>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
				reprehenderit expedita esse facilis quibusdam ullam ut voluptatibus. Hic
				explicabo, dolorum a corrupti reiciendis quas dolorem, quaerat officia
				quo placeat ipsa?
			</p>

			<Suspense fallback={<p>Carregando LongWaitComponent</p>}>
				<LongWaitComponent />
			</Suspense>

			<Suspense fallback={<p>Carregando GitHubProfile</p>}>
				<GithubProfile />
			</Suspense>
		</div>
	);
}
