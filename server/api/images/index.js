import { readFile } from "fs/promises";
import { resolve } from "path";

export default defineEventHandler(async () => {
  let filePath;
  if (process.env.NODE_ENV === "development") {
    filePath = "public/images.json";
  } else {
    filePath = resolve(process.cwd(), "radel/public/images.json");
  }

  try {
    const data = await readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return { error: error.message };
  }
});
// import fs from "fs";
// import path from "path";

// export default defineEventHandler(async (event) => {
//   const galleryPath = "public/realisations/gallery";

//   try {
//     const scanDirectory = (dirPath) => {
//       const items = fs.readdirSync(dirPath);
//       const result = [];

//       items.forEach((item) => {
//         if (item === ".DS_Store") return;
//         const fullPath = path.join(dirPath, item);
//         const stats = fs.statSync(fullPath);

//         if (stats.isDirectory()) {
//           result.push({
//             type: "directory",
//             name: item,
//             path: fullPath.replace("public/", ""),
//             contents: scanDirectory(fullPath),
//           });
//         } else {
//           result.push({
//             type: "file",
//             name: "item",
//             path: fullPath.replace("public/", ""),
//             size: stats.size,
//             extension: path.extname(item),
//           });
//         }
//       });
//       handleJSON(result);
//       return result;
//     };
//     const galleryStructure = scanDirectory(galleryPath);
//     return {
//       succes: true,
//       data: galleryStructure,
//     };
//   } catch (error) {
//     return {
//       succes: false,
//       error: error.message,
//     };
//   }

//   function handleJSON(data) {
//     const readyData = JSON.stringify(data, null, 2);
//     fs.writeFile("images.json", readyData, "utf8", (err) => {
//       if (err) {
//         console.error("Error writing to file", err);
//       } else {
//         console.log("Data written to file");
//       }
//     });
//   }
// });
