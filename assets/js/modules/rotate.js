const rotate = {
  init: function () {
    console.log("Hello world, I'm rotate.js");

    // crearte an array from the elements
    rotate.wrapperSpans = Array.from(
      document.querySelectorAll(".wrapper-span")
    );

    // replace the contents of these spans
    rotate.dropSpansContents();
  },
  /**
   * Replaces the content of each wrapper span with individual spans around each letter.
   * This prepares each letter to be animated individually.
   */
  dropSpansContents: function () {
    // console.log("rotage.dropSpansContents()");

    for (rotate.wrapperSpan of rotate.wrapperSpans) {
      // get the text content of the first child of the wrapper span
      // split that string into an array of individual letters
      rotate.letters = rotate.wrapperSpan.children[0].textContent.split("");

      // clear the existing content of the wrapper span
      rotate.wrapperSpan.innerHTML = "";

      // fill the wrapper span with new span elements for each letter
      rotate.fillSpans();
    }
  },
  /**
   * Creates individual span elements for each letter and adds a transition delay style.
   * This delay is used to create a staggered animation effect.
   */
  fillSpans: function () {
    // console.log("rotage.fillSpans()");

    // initialaze an index
    let index = 0;

    for (rotate.letter of rotate.letters) {
      // find the index of the current letter in the array
      index = rotate.letters.indexOf(rotate.letter);
      // add a span element inside the wrapper span for the letter
      // rach span gets a style with a transition delay calculated based on its index
      rotate.wrapperSpan.innerHTML += `<span style="transition-delay: ${
        0.07 * index
      }s">${rotate.letter}</span>`;
    }
  },
};
