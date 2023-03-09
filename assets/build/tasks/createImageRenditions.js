import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import { paths } from "../config/paths";
import size from "gulp-size";
import { onError } from "../utils/onError";

import fs from "fs";
import { globSync } from "glob";
import path from "path";
import sharp from "sharp";
import { log } from "console";

const imgRenditionConf = {
  "*": [
    {
      width: 320,
      rename: {
        suffix: "-320px",
        extname: ".webp",
      },
    },
    {
      width: 480,
      rename: {
        suffix: "-480px",
        extname: ".webp",
      },
    },
    {
      width: 640,
      rename: {
        suffix: "-640px",
        extname: ".webp",
      },
    },
    {
      width: 750,
      rename: {
        suffix: "-750px",
        extname: ".webp",
      },
    },
    {
      width: 960,
      rename: {
        suffix: "-960px",
        extname: ".webp",
      },
    },
    {
      width: 1080,
      rename: {
        suffix: "-1080px",
        extname: ".webp",
      },
    },
    {
      width: 1200,
      rename: {
        suffix: "-1200px",
        extname: ".webp",
      },
    },
    {
      width: 1440,
      rename: {
        suffix: "-1440px",
        extname: ".webp",
      },
    },
    {
      width: 1920,
      rename: {
        suffix: "-1920px",
        extname: ".webp",
      },
    },
    {
      width: 2048,
      rename: {
        suffix: "-2048px",
        extname: ".webp",
      },
    },
    {
      width: 3840,
      rename: {
        suffix: "-3840px",
        extname: ".webp",
      },
    },
    {
      rename: {
        suffix: "-original",
        extname: ".webp",
      },
    },
  ],
};

// specify transforms
const transforms = [
  {
    options: {
      width: 320,
      fit: "cover",
    },
  },
  {
    options: {
      width: 480,
      fit: "cover",
    },
  },
  {
    options: {
      width: 640,
      fit: "cover",
    },
  },
  {
    options: {
      width: 750,
      fit: "cover",
    },
  },
  {
    options: {
      width: 960,
      fit: "cover",
    },
  },
  {
    options: {
      width: 1080,
      fit: "cover",
    },
  },
  {
    options: {
      width: 1200,
      fit: "cover",
    },
  },
  {
    options: {
      width: 1440,
      fit: "cover",
    },
  },
  {
    options: {
      width: 1920,
      fit: "cover",
    },
  },
  {
    options: {
      width: 2048,
      fit: "cover",
    },
  },
  {
    options: {
      width: 3840,
      fit: "cover",
    },
  },
];

// resize images
export const createImageRenditions = (done) => {
  // glob all files

  return new Promise((resolve, reject) => {
    let files = globSync(paths.src.assets.images);
    // loop through configuration array of objects
    transforms.forEach((transform) => {
      // if dist folder does not exist, create it with all parent folders
      if (!fs.existsSync(`${paths.dist.dir}/images`)) {
        fs.mkdirSync(`${paths.dist.dir}/images`, { recursive: true }, (err) => {
          if (err) throw err;
        });
      }

      // for each file, apply transforms and save to file
      files.forEach((file) => {
        let filename = path.parse(file).name;
        sharp(file)
          .resize(transform.options)
          .webp({ lossless: true })
          .toFile(
            `${paths.dist.dir}/images/${filename}-${transform.options.width}.webp`
          )
          .catch((err) => {
            console.log(err);
          });
      });
    });

    files.forEach((file) => {
      let filename = path.parse(file).name;
      sharp(file)
        .webp({ lossless: true })
        .toFile(`${paths.dist.dir}/images/${filename}-original.webp`)
        .catch((err) => {
          console.log(err);
        });
    });
    done();
  });
};
