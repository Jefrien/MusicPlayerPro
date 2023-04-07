const jsmediatags = require("jsmediatags");
const readTags = (path, folderPath) => {
  return new Promise((resolve, reject) => {
    jsmediatags.read(path, {
      onSuccess: function (tag) {
        let image = Buffer.from(tag.tags.picture.data).toString('base64')    
        image =  `data:${tag.tags.picture.format};base64,${image}`
        

        resolve({
            title: tag.tags.title,
            artist: tag.tags.artist,
            album: tag.tags.album,
            year: tag.tags.year,                        
            path: path,
            folderPath: folderPath,
            filename: path.split("\\").pop(),
            picture: image,
        });
      },
      onError: function (error) {
        reject(error);
      },
    });
  });
};


module.exports = {
    readTags,
}