const context = new (window.AudioContext || window.webkitAudioContext)();
const root = 60;
const bpm = 240;

const actualTempo = 120 / bpm

async function playSound(url, pitch = 1.0) {
  const response = await fetch(`sounds/${url}.mp3`);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await context.decodeAudioData(arrayBuffer);

  const source = context.createBufferSource();
  source.buffer = audioBuffer;
  source.playbackRate.value = pitch;

  source.connect(context.destination);
  source.start();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main(msb) {
    let indexed_msb = msb.split("\n");
    let parsed_msb = [];

    for (let i of indexed_msb) {
        if (i !== "//") {
            const parts = i.split("|");
            for (let note of parts) {
                const parsedNote = note.split(":");
                const target = parseInt(parsedNote[0]);
                const semitoneDiff = target - root;
                const playbackRate = 2 ** (semitoneDiff / 12);
                playSound(parsedNote[2], playbackRate);
                await sleep(((parsedNote[1] * 500) * actualTempo));
            }
        }
    }
}