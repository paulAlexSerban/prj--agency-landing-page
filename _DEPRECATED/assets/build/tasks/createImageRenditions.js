import { paths } from "../config/paths";
import fs from "fs";
import { globSync } from "glob";
import path from "path";
import sharp from "sharp";
import transforms from "../config/imageTransforms";
import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs.log" }),
  ],
});

// resize images
export const createImageRenditions = (done) => {
  logger.info("Starting image resizing");

  // glob all files
  let files = globSync(paths.src.assets.images);

  // loop through configuration array of objects
  transforms.forEach((transform) => {
    // if dist folder does not exist, create it with all parent folders
    if (!fs.existsSync(`${paths.dist.dir}/images`)) {
      fs.mkdirSync(`${paths.dist.dir}/images`, { recursive: true }, (err) => {
        if (err) {
          logger.error(`Error creating folder: ${err}`);
          throw err;
        }
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
        .then(() => {
          logger.info(
            `Transformed image: ${filename}-${transform.options.width}.webp`
          );
        })
        .catch((err) => {
          logger.error(
            `Error transforming image: ${filename}-${transform.options.width}.webp - ${err}`
          );
        });
    });
  });

  // Create original webp files
  files.forEach((file) => {
    let filename = path.parse(file).name;
    sharp(file)
      .webp({ lossless: true })
      .toFile(`${paths.dist.dir}/images/${filename}-original.webp`)
      .then(() => {
        logger.info(`Created original webp image: ${filename}-original.webp`);
      })
      .catch((err) => {
        logger.error(
          `Error creating original webp image: ${filename}-original.webp - ${err}`
        );
      });
  });

  logger.info("Finished image resizing");
  done();
};
