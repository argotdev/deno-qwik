import { RequestHandler } from "@builder.io/qwik-city";
import { loadDinoData } from "~/utils/loadData";

export const onGet: RequestHandler = async ({ json }) => {
  const dinosaurs = loadDinoData();
  json(200, dinosaurs);
};
