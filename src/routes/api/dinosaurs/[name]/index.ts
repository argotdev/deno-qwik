import { RequestHandler } from "@builder.io/qwik-city";
import { loadDinoData } from "~/utils/loadData";

export const onGet: RequestHandler = async ({ params, json }) => {
  const { name } = params;
  const dinosaurs = loadDinoData();

  if (!name) {
    json(400, { error: "No dinosaur name provided." });
    return;
  }

  const dinosaur = dinosaurs.find(
    (dino) => dino.name.toLowerCase() === name.toLowerCase()
  );

  if (!dinosaur) {
    json(404, { error: "No dinosaur found." });
    return;
  }

  json(200, dinosaur);
};
