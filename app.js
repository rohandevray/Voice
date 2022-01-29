const button = document.querySelector(".talk");
const content = document.querySelector(".content");

//for how are you
const greetings = [
  "I am fine you little piece of love",
  "Do not ask me anything",
  "Get lost I am angry",
  "Ufff hey your voice is annoying",
];
//for weather
const weather = [
  "you need a tan",
  "Its awesome today",
  "I hate Rain",
  "I will make a cup of coffee for your head",
  "Lets go hawai",
];
// for music
const music = [
  "So, baby, pull me closer In the back seat of your Rover That I know you can't afford Bite that tattoo on your shoulder",
  "I was on the bando a long long time Need to get the Lambo and drive I was on the lab you were on my mind But all I really do is just grind",
];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
//we are using window object here bcoz its the global language in js and web apis like speechrecognition
//are lying in that object .

const recognition = new SpeechRecognition();
//it means we gave the function name recogniton

recognition.onstart = () => {
  console.log("Ya it means u can talk to microphone");
  //bascially its starts and you can talk now to microphone
};
//when the voice is activated this above gona run

recognition.onresult = (event) => {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  //text content is the actual text inside it
  readOutLoud(transcript);
};
//it means when u stops talking and it have the string of the resulted voice it gets executed

//adding listener to button
button.addEventListener("click", () => {
  recognition.start();
  //onclicking the button it gonna run the function recognition
});

const readOutLoud = (message) => {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "I dont know what you said";
  //i put it here bcoz if it chnages it can change below
  if (message.includes("how are you")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
    console.log(finalText);
  } else {
    if (message.includes("weather")) {
      const second = weather[Math.floor(Math.random() * weather.length)];
      speech.text = second;
    } else {
      if (message.includes("music")) {
        const third = music[Math.floor(Math.random() * music.length)];
        speech.text = third;
      }
    }
  }

  speech.rate = 1;
  speech.volume = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
};
