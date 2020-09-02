const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const imageminOptipng = require('imagemin-optipng');

module.exports = withPlugins([
  [
    optimizedImages,
    {
       imageminOptipng()
    },
  ],

  // your other plugins here
  // Target must be serverless
  {
    target: "serverless",
  },
]);
