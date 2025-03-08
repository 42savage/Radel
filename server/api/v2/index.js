import { createStorage } from "unstorage";
import fsDriver from "unstorage/drivers/fs";
import path from "path";
import { fileURLToPath } from "url";

export default defineEventHandler(async (event) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const publicPath = path.resolve(__dirname, "../../public/realisations");

  const storage = createStorage({
    driver: fsDriver({ base: path.join(publicPath, "gallery") }),
  });
  const result = [];
  const keys = await storage.keys();
  keys.forEach((item, i) => {
    if (item === ".DS_Store") return;
    result.push({ id: i, path: item });
  });
  console.debug(result);

  return result;
});
