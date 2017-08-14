/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
  name: "pricechart", //must be unique to embeds
  files: {

    html: "src/embed/pricechart.html",
    loader: 'src/assets/images/rippleThrobber.png',

    common: [
      'vendor/lodash/lodash.js',
      'vendor/d3/d3.js',
      'deps/ripple.js',
      'vendor/moment/moment.js'
    ],

    js: [
      'deps/onResize.js',
      'src/common/apiHandler.js',
      'deps/offersExercisedListener.js',
      'src/embed/pricechart-script.js'
      ],

    less: [
      'src/embed/pricechart.less',
      'src/embed/ticker.less'
    ]
  }
};

