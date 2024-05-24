//const
const textInput = document.getElementById("textInput");
const output = document.getElementById("output");

//function to multiply vowels
function longText(text, n) {
  const vowels = ["a", "e", "i", "o", "u"];
  var textArray = text.split("");
  for (letter in textArray) {
    const currentLetter = textArray[letter];
    for (vowel in vowels) {
      if (currentLetter == vowels[vowel]) {
        textArray[letter] = textArray[letter].repeat(n);
      }
    }
  }

  output.innerHTML = textArray.join("");
}

//put the text in span
textInput.addEventListener("input", function (e) {
  longText(textInput.value, 2);
});

//Palavras bonitas
let love = [
  {
    msg: "You are Amazing!"
  },
  {
    msg: "Keep moving Foward!"
  },
  {
    msg: "Open your mind for new things"
  },
  {
    msg: "You are more smart than you think"
  }
];

let gerarPalavrasBonitas = function () {
  const place = document.querySelector("span");
  let n = Math.floor(Math.random() * love.length);
  place.innerHTML = love[n].msg;
};

//gerarPalavrasBonitas()
