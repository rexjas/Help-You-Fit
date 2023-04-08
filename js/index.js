const sleep = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

const phrases = ["Reach your fitness goals.", "Stay Healthy.", "Be more fit."]
const el = document.getElementById("type-write");

let sleepTime = 100;
let curPhraseIndex = 0; 

async function writeLoop() {
    while (true) {
      const curWord = phrases[curPhraseIndex];
      console.log(curWord);

        for (let i = 0; i < curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }
        await sleep(1000);

        for (let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        
        }
        await sleep(500);

        if (curPhraseIndex === phrases.length -1) {
            curPhraseIndex = 0;
        } else { curPhraseIndex++;
        }
    } 
};
writeLoop();