const { name } = require("./package.json");
const path = require("path");

module.exports = (job, settings, options, type) => {
  return new Promise((resolve, reject) => {
    options.layers.forEach(asset => {
      const index = job.assets.findIndex(x => x.layerName == options.layers);
      const color = hexToRgb(job.assets[index].value);

      job.assets[index].value = color;
    });

    resolve(job);
  });
};

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        round(parseInt(result[1], 16) / 255, 2),
        rount(parseInt(result[2], 16) / 255, 2),
        round(parseInt(result[3], 16) / 255, 2)
      ]
    : null;
}
