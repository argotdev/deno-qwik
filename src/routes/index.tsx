import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import type { Dino } from "~/types";
import { loadDinoData } from "~/utils/loadData";

export const useDinosaurs = routeLoader$(() => {
  return loadDinoData();
});

export default component$(() => {
  const dinosaursSignal = useDinosaurs();

  return (
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">Welcome to the Dinosaur app</h1>
      <p class="mb-4">Click on a dinosaur below to learn more.</p>
      <ul class="space-y-2">
        {dinosaursSignal.value.map((dinosaur) => (
          <li key={dinosaur.name}>
            <Link
              href={`/${dinosaur.name.toLowerCase()}`}
              class="text-blue-600 hover:underline"
            >
              {dinosaur.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});
