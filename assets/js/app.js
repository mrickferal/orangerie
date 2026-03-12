const app = {
  init: function () {
    console.log("Hello world, I'm app.js 👑");

    // all the colors of the app are set in CSS variables
    // get the value of the CSS variables
    app.colors = {
      black: getComputedStyle(document.documentElement).getPropertyValue(
        "--black"
      ),
      white: getComputedStyle(document.documentElement).getPropertyValue(
        "--white"
      ),
      pumpkinSpice: getComputedStyle(document.documentElement).getPropertyValue(
        "--pumpkin-spice"
      ),
    };

    // load the module used in the app
    rotate.init();
  },
};

document.addEventListener("DOMContentLoaded", app.init);
