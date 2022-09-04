(function () {
  "use strict";

  let conversionType = "meters";
  const heading = document.querySelector("h1");
  const intro = document.querySelector("p");
  const answer = document.getElementById("answer");
  const form = document.getElementById("converter");
  const directions = document.getElementById("directions");

  document.addEventListener("keydown", function (event) {
    const key = event.code;

    if (key === "KeyM") {
      conversionType = "meters";
      heading.innerHTML = "Meters to Feet Converter";
      intro.innerHTML = "Convert from Meters to Feet!";
      document.getElementById("length").placeholder = "Enter a length in meters";
      directions.innerHTML = `Press the "F" key to switch to Feet conversion`;
    } else if (key === "KeyF") {
      conversionType = "feet";
      heading.innerHTML = "Feet to Meters Converter";
      intro.innerHTML = "Convert from Feet to Meters!";
      document.getElementById("length").placeholder = "Enter a length in feet";
      directions.innerHTML = `Press the "M" key to switch to Meter conversion`;
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const length = parseFloat(document.getElementById("length").value);

    if (length) {
      if (conversionType == "meters") {
        const convertedLength = (length * 3.281).toFixed(3);
        answer.innerHTML = `${length} meters is ${convertedLength} feet`;
      } else if (conversionType == "feet") {
        const convertedLength = (length / 3.281).toFixed(3);
        answer.innerHTML = `${length} feet is ${convertedLength} meters`;
      }
    } else {
      answer.innerHTML = "Please provide a number!";
    }
  });
})();
