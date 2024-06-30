import fs from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
  const baseDir = "public/realisations/gallery/"; // Załóżmy, że zdjęcia są w tym katalogu

  function getImagesWithDirectories(dir, parentDir = "") {
    const fullPath = path.join(process.cwd(), dir);

    let items;
    try {
      items = fs.readdirSync(fullPath);
    } catch (err) {
      console.error(`Error reading directory ${fullPath}:`, err);
      return [];
    }

    if (!Array.isArray(items)) {
      console.error(
        `Expected array but got ${typeof items} for directory ${fullPath}`
      );
      return [];
    }

    return items.reduce((acc, item) => {
      const itemPath = path.join(fullPath, item);
      let isDirectory;
      try {
        isDirectory = fs.statSync(itemPath).isDirectory();
      } catch (err) {
        console.error(`Error getting stats for ${itemPath}:`, err);
        return acc;
      }

      if (isDirectory) {
        const subDirImages = getImagesWithDirectories(
          path.join(dir, item),
          path.join(parentDir, item)
        );
        acc.push(...subDirImages);
      } else if (item.match(/\.(jpg|jpeg|png|gif)$/i)) {
        acc.push({
          directory: parentDir,
          image: item,
          path: path.join(parentDir, item),
        });
      }

      return acc;
    }, []);
  }

  try {
    const result = getImagesWithDirectories(baseDir);
    return result;
  } catch (error) {
    console.error("Error:", error);
    return createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
});
