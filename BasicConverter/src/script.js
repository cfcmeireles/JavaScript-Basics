(function () {
  "use strict";

  // Select converter form to add an event listener of type "submit" and create a function with an event
  document.getElementById("converter").addEventListener("submit", function (event) {
    
      event.preventDefault();

      // Get the value from length, parseFloat parses the argument and returns a floating point number
      const length = parseFloat(document.getElementById("length").value);
      const answer = document.getElementById("answer");

      if (length) {
        // Convert value from length to convertedLength, multiply length by 3.281 and round up the result to 3 decimal numbers
        const convertedLength = (length * 3.281).toFixed(3);
        // Change h2 div innerHTML to showcase results
        answer.innerHTML = `<h2>${length} meters is ${convertedLength} feet</h2>`;
      } else {
        answer.innerHTML = "<h2>Please type a number!</h2>";
      }
    });
})();
