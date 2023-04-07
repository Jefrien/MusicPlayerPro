const express = require("express");
const cors = require("cors");
const fs = require("fs");
const axios = require("axios");

const app = express();
const port = 3312;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "API is working",
    status: 200,
  });
});

app.get("/audio/:path", (req, res) => {
  let path = req.params.path;
  // decode base64 usign Buffer
  let decodedPath = Buffer.from(path, "base64").toString("ascii");
  // url decode
  decodedPath = decodeURIComponent(decodedPath);
  // remove leading slash
  decodedPath = decodedPath.replace(/^\//, "");
  // remove trailing slash
  decodedPath = decodedPath.replace(/\/$/, "");
  // remove backslashes
  decodedPath = decodedPath.replace(/\\/g, "/");
  // remove duplicate slashes
  decodedPath = decodedPath.replace(/\/+/g, "/");

  // check if file exists
  if (!fs.existsSync(decodedPath)) {
    res.json({
      message: "File not found",
      path: decodedPath,
      status: 404,
    });
  }

  // check if file is audio
  if (!decodedPath.endsWith(".mp3")) {
    res.json({
      message: "File is not audio",
      status: 400,
    });
  }

  // send file
  res.sendFile(decodedPath);
});

app.get("/lyrics/:info", async (req, res) => {  
  const baseURL = process.env.LYRICS_API_URL || "http://localhost:3313";
  let decodedInfo = Buffer.from(req.params.info, "base64").toString("utf8");
  let searchURL = "";
  let trackId = "";
  let searchRes = {};
  try {
    // decode base64 usign Buffer

    // url decode
    decodedInfo = decodeURIComponent(decodedInfo);
    // parse to json
    decodedInfo = JSON.parse(decodedInfo);

    // serach by title and artist
    searchURL = `${baseURL}?title=${encodeURIComponent(
      decodedInfo.title
    )}&artist=${encodeURIComponent(decodedInfo.artist)}`;

    // get track id from search
    const { lyrics, status } = await axios.get(searchURL);

    if (status == 200) {
      res.json({
        lyrics,
        status: 200,
      });
    } else {
      res.json({
        message: "Lyrics not found",
        status: 404,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      message: "Lyrics not found",
      status: 404,
      decodedInfo,
      trackId,
      searchRes,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
