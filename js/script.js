// allover
let age = document.getElementById("age");
let results = document.getElementById("results");
let submitBtn = document.getElementById("submitBtn");

// For Name Input & Playback 
let nameInput = document.getElementById("name");
let submitBtn1 = document.getElementById("submitBtn1");
let speakingName = document.getElementById("speakingName");
submitBtn1.addEventListener("click", () => {
    speakingName.innerText = `Hola! "${nameInput.value}"`; 
    let utterance = new SpeechSynthesisUtterance(`Welcome ${nameInput.value} to Age Verification Portal`);
    speechSynthesis.speak(utterance);
});

// For Age Input & Playback
submitBtn.addEventListener("click", () => {
    console.log();
if (age.value >= 21) {
    results.innerText = `Congrats! You're ${age.value}, You Can Marry`;
    results.style.color = "green";
    let utterance = new SpeechSynthesisUtterance(`Congratulation! Your Age is ${age.value}, and you can marry`); speechSynthesis.speak(utterance);
age.value = "";
}
else {
    results.innerText = `Sorry! You're Only ${age.value}, So You Cannot Marry`;
    results.style.color = "red";
    let utterance = new SpeechSynthesisUtterance(`Sorry! Your Age is ${age.value}, so you can't marry`);
speechSynthesis.speak(utterance);
    age.value = "";
}
})

// Submit Button logic to avoid click
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("submitBtn");
  const container = document.querySelector(".form");
  
  // A helper function to generate a random number within a range
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 20)) + min;
  }

  button.addEventListener("mouseenter", (event) => {
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Calculate the maximum possible positions
    const maxX = containerRect.width - buttonRect.width; 
    const maxY = containerRect.height - buttonRect.height;

    // Generate new random coordinates
    const newX = getRandomNumber(0, maxX);
    const newY = getRandomNumber(0, maxY);

    // Apply the new position
    button.style.left = `${newX}px`;
    // button.style.top = `${newY}px`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("submitBtn1");
  const container = document.querySelector(".form2");
  
  // A helper function to generate a random number within a range
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 20)) + min;
  }

  button.addEventListener("mouseenter", (event) => {
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Calculate the maximum possible positions
    const maxX = containerRect.width - buttonRect.width; 
    const maxY = containerRect.height - buttonRect.height;

    // Generate new random coordinates
    const newX = getRandomNumber(0, maxX);
    const newY = getRandomNumber(0, maxY);

    // Apply the new position
    button.style.left = `${newX}px`;
    // button.style.top = `${newY}px`;
  });
});
