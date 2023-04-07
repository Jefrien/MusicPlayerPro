export const defaultNames = {
  all: "Toda la música",
};

export const getPlayListName = (type, id, firstTrack) => {
  const pathFolder = Buffer.from(id, "base64").toString("ascii");
  console.log("Type: ", type, " id: ", id, " pathFolder: ", pathFolder);
  if (type === "all") {
    return defaultNames.all;
  }
  if (type === "folder") {
    // split to get the last folder name
    return pathFolder.split("\\").pop();
  }
  if (type === "artist") {
    return firstTrack.artist;
  }
  return type;
};

export const getPlayListNameKey = (type, id, firstTrack) => {
  let name = getPlayListName(type, id, firstTrack);
  return Buffer.from(encodeURIComponent(name)).toString("base64");
};

export const getAmplitudeMapSong = (track) => {
  let encodedPath = Buffer.from(encodeURIComponent(track.path)).toString(
    "base64"
  );
  return {
    name: track.title,
    artist: track.artist,
    album: track.album,
    url: "http://localhost:3312/audio/" + encodedPath,
    cover_art_url: track.picture,
  };
};
