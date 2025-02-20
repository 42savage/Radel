import fs from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
  const galleryPath = "public/realisations/gallery";

  try {
    const scanDirectory = (dirPath) => {
      const items = fs.readdirSync(dirPath);
      const result = [];

      items.forEach((item) => {
        if (item === ".DS_Store") return;
        const fullPath = path.join(dirPath, item);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
          result.push({
            type: "directory",
            name: item,
            path: fullPath.replace("public/", ""),
            contents: scanDirectory(fullPath),
          });
        } else {
          result.push({
            type: "file",
            name: "item",
            path: fullPath.replace("public/", ""),
            size: stats.size,
            extension: path.extname(item),
          });
        }
      });
      return result;
    };
    const galleryStructure = scanDirectory(galleryPath);
    return {
      succes: true,
      data: galleryStructure,
    };
  } catch (error) {
    return {
      succes: false,
      error: error.message,
    };
  }
});
