const fs = require("fs");
const { readTags } = require("./helpers.js");



const readFiles = async (path) => {
    const files = await fs.promises.readdir(path);
    const mp3Files = files.filter((file) => file.endsWith(".mp3"));
    const tags = await Promise.all(
        mp3Files.map((file) => readTags(path + "\\" + file, path))
    );
    return tags;
}

module.exports = {
    readFiles,
}