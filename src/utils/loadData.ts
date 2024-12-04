import fs from "node:fs";
import path from "node:path";

export function loadDinoData() {
  const filePath = path.join(process.cwd(), "src", "data", "dinosaurs.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent).dinosaurs;
}
