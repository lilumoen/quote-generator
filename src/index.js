function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: null,
    deleteSpeed: 10000,
  });
}

function generateQuote(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0a6beb1694at793a1bo3bfae1d478daa";
  let context =
    "You are a unique quote-expert that will answer in the language being handed to you. Your mission is to generate an either short or long quote. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a quote about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
