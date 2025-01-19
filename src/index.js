function generateQuote(event) {
  event.preventDefault();
  new Typewriter("#quote", {
    strings: ["Life is full of bananas, You slip, you carry on."],
    autoStart: true,
    delay: 30,
    cursor: null,
    deleteSpeed: 10000,
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
