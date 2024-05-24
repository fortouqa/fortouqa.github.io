const textInput = document.getElementById("textInput");
const output = document.getElementById("output");

// Function to multiply vowels
function longText(text, n) {
  const vowels = ["a", "e", "i", "o", "u"];
  const textArray = text.split("");
  for (let i = 0; i < textArray.length; i++) {
    if (vowels.includes(textArray[i].toLowerCase())) {
      textArray[i] = textArray[i].repeat(n);
    }
  }
  output.innerHTML = textArray.join("");
}

// Event listener for text input
textInput.addEventListener("input", function () {
  longText(textInput.value, 2);
});

// Random love messages
let love = [
  "You are Amazing!",
  "Keep moving Forward!",
  "Open your mind for new things.",
  "You are smarter than you think."
];

let gerarPalavrasBonitas = function () {
  let n = Math.floor(Math.random() * love.length);
  output.innerHTML = love[n];
};

// Optional: Uncomment to display a random love message on load
// gerarPalavrasBonitas();
