const { name } = require("./package.json");
const path = require("path");

module.exports = (job, settings, options, type) => {
  console.log(job);
  console.log(settings);
  console.log(options);

  if (type != "prerender") {
    throw new Error(
      `Action ${name} can be only run in prerender mode, you provided: ${type}.`
    );
  }

  return new Promise((resolve, reject) => {
    let input = options.input || job.output;
    let output = options.output || "encoded.mp4";

    if (!path.isAbsolute(input)) input = path.join(job.workpath, input);
    if (!path.isAbsolute(output)) output = path.join(job.workpath, output);

    if (options.debug) {
      settings.logger.log(
        `[${job.uid}] [action-handbrake] output is set to ${output}`
      );
    }

    resolve(job);
  });
};

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255
      ]
    : null;
}
