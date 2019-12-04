import pixieChime from "../assets/audio/pixie_chime.mp3";
import pixieCorrect from "../assets/audio/pixie_correct.mp3";
import pixieWrong from "../assets/audio/pixie_wrong.mp3";
import pixieWin from "../assets/audio/pixie_win.mp3";

function playAudio(type) {
  let audioFile;
  switch (type) {
    case "start":
      audioFile = pixieChime;
      break;
    case "correct":
      audioFile = pixieCorrect;
      break;
    case "wrong":
      audioFile = pixieWrong;
      break;
    case "win":
      audioFile = pixieWin;
      break;
    default:
      audioFile = pixieWrong;
  }
  let audio = new Audio(audioFile);
  audio.load();
  audio.play();
}

export { playAudio };
