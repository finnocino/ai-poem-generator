function generatePoem(event) {
   event.preventDefault();

   let poemBox = document.querySelector("#poem");

   new Typewriter('#poem', {
  strings: "I love cats",
  autoStart: true,
  delay: 1,
  cursor: "",
});

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
//console.log(poemFormElement);