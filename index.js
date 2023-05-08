const letterEl = document.getElementById("letter")
const optionsEl = document.getElementById("options")
const speed = 80
let sentenceID = 0

const sentences = [
  {
    sentence: "Dear love of my life, what should i call you?",
    options: ["Azeezah mi ❤️", "Yetunde mi ❤️", "Ayoka mi ❤️"],
    postfix: "."
  },
  {
    sentence: "Since the moment we first met, I have always been joyful. You came into my life not only with love but also with a lot of benefits and concern. You are a good woman who always sticks up for me, rescues me from my foolishness, and understands what to do.",
    options: ["And there's more"],
    postfix: ","
  },
  {
    sentence: "I might never be able to express to your thoughts that you are the one I am constantly thinking about. But there is one thing I can absolutely do, and that is to treat you like the master in my heart, the queen of my palace, the one I think about constantly, the one I have been thinking about, as this realization makes clear. Dreams also provide me a lot of grounds to think that genuine love does exist. I promise to care for the blessings God has bestowed upon me through you and to love you for as long as I live.",
    options: ["To my imperfections"],
    postfix: ","
  },
  {
    sentence: "Yes, we have misunderstandings, sometimes things seem to fall apart, this is only due to human flaws and we will get better as we help each other grow, trust me the best is yet to come. I love you very much and I will always do. I must admit that my love for you deepens as a result of your decision to spend the rest of your life with me.",
    options: ["And an important reminder"],
    postfix: ","
  },
  {
    sentence: "This is just a reminder that love has no boundaries. Many mountains will move, many seas will dry, but my evergreen love for you will always bloom, because you are the only one I can trust my life without fear, The one who kept looking at my back in difficult times. Today, I want you to know that there is nothing to return, only my heart, sincerely saying to you: Our love will never end, even in the afterlife.",
    options: ["And to the final part"],
    postfix: "!"
  },
  {
    sentence: "you are my Everything. Thank you for being my friend, my lover, my wife and the mother of my children. I love you so much.",
    options: ["Oyah call me ❤️"],
    postfix: "!"
  },
];


const writeLetter = () => {
  if (sentenceID < sentences.length) {
    input = sentences[sentenceID];
    const sentence = input.sentence;
    const options = input.options;
    const postfix = input.postfix;

    typewriter(sentence, letterEl)

    setTimeout(() => {
      createButtons(options, postfix)
      window.scrollTo(0, document.body.scrollHeight);
    }, speed * sentence.length)
  }
}

const typewriter = (text, contentEl, cb = () => { }) => {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      contentEl.innerHTML += text.charAt(i);
      window.scrollTo(0, document.body.scrollHeight);
      if (i === text.length - 1) { cb() }
    }, speed * i)
  }
}

const createButtons = (options, postfix) => {
  options.map((option) => {
    const btn = document.createElement("button");
    btn.type = 'button';
    btn.innerHTML = option;
    btn.value = option;
    btn.addEventListener('click', function () {
      submitOption(option, postfix);
    }, false);
    optionsEl.appendChild(btn);
  })
}

const submitOption = (option, postfix) => {
  const text = option + postfix;
  optionsEl.innerHTML = "";
  const span = document.createElement("span");
  letterEl.append(span);
  typewriter(text, span, nextSentence)

}

const nextSentence = () => {
  sentenceID++
  writeLetter()
}

writeLetter()

