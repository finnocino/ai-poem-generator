function displayPoem(response) {

    console.log("poem generated");
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
      
}

function generatePoem(event) {
   event.preventDefault();

  let instructions = document.querySelector("#user-instructions");
  let apiKey = "cf2a3b53726tfaddf4o0d7a1400a5b31";
  let prompt = `User instructions: please generate a poem about ${instructions.value}`;
  let context = "You are poem expert and love to write short poems. Your goal is to generate a 6 line poem in baisc HTML format. Make sure to follow the user instructions provided above. Please do not include the title at the top.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML =`<div class="generating"> ⏳ Generating Poem about ${instructions.value}</div>`;
   
  axios.get(apiUrl).then(displayPoem);
  
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);