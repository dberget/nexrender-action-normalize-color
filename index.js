const { name } = require("./package.json");
const path = require("path");

module.exports = (job, settings, options, type) => {
  return new Promise((resolve, reject) => {
    options.layers.forEach(asset => {
      const index = job.assets.findIndex(x => x.layerName == asset);
      const color = hexToRgb(job.assets[index].value);

      job.assets[index].value = color;
      options.logger.log(
        `changed ${job.assets[index].layerName} value to ${color}`
      );
    });

    resolve(job);
  });
};

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        (parseInt(result[1], 16) / 255).toFixed(2),
        (parseInt(result[2], 16) / 255).toFixed(2),
        (parseInt(result[3], 16) / 255).toFixed(2)
      ]
    : null;
}
