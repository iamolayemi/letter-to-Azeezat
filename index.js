const letterEl = document.getElementById("letter")
const optionsEl = document.getElementById("options")
const speed = 80
let sentenceID = 0

const sentences = [
  {
    sentence: "Azeezat mi, what best describes Akinkunmi's attitudes towards you?",
    options: ["Corrective", "Complaining", "Demanding"],
    postfix: "."
  },
  {
    sentence: "You're not the only girl I've met, nor are you the only girl I have, but I chose you cuz I decided to, and you turned out to be the best for me." +
        " And if I have decide to live the rest of my life with you, I shouldn't keep quite to something that really hurts." +
        " This is majorly cuz I don't want you to repeat it.",
    options: ["And there's more"],
    postfix: ","
  },
  {
    sentence: "I don't correct you selfishly, you can also see what I'm complaining about. " +
        "I don't own you so I can't tell you how to live your life but if you decide to be in a relationship with me, I guess we could help each other grow. " +
        "Sometimes I feel I'm doing too much and I don't want to complain anymore but I know where that would end so I didn't stop pointing the mistakes. " +
        "Please try not to make me complain on same thing especially things that could hurt me emotionally, Thanks .",
    options: ["To Things I Noticed"],
    postfix: ","
  },
  {
    sentence: "Yes, I understand that this is your first relationship and you don't do these things before. " +
        "But like I said, expressing how you feel about my actions be it good or bad shouldn't be too shallow. " +
        "Please, I'm begging you, quit saying you feel something inside and expressing close to zero to me and just expect me to assume the big feeling is inside.",
    options: ["And an important reminder"],
    postfix: ","
  },
  {
    sentence: "Remember that I love you so much and remember that I know yu love me too.",
    options: ["And to the final part"],
    postfix: "!"
  },
  {
    sentence: "I'm not angry anymore.",
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

