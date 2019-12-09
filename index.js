const { name } = require("./package.json");
const path = require("path");

module.exports = (job, settings, options, type) => {
  console.log(options.layers);

  return new Promise((resolve, reject) => {
    options.layers.forEach(asset => {
      const index = job.assets.findIndex(x => x.layerName == options.layers);
      const color = hexToRgb(job.assets[index].value);

      job.assets[index].value = color;

      console.log(job.assets[index]);
    });

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
