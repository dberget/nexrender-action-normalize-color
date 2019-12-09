const { name } = require("./package.json");
const path = require("path");

module.exports = (job, settings, options, type) => {
  console.log(options);

  return new Promise((resolve, reject) => {
    const colorAssets = job.assets.filter(asset => asset.type == "color");

    console.log(colorAssets);

    colorAssets.forEach(asset => {
      const index = job.assets.findIndex(x => x.layerName == asset.layerName);
      const color = hexToRgb(asset.value);

      job.assets[index].value = color;
      job.assets[index].type = "data";

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
