
import * as Tone from 'tone'
import Notebook from './Notebook';


class SoundPlayer {
    constructor(seed1, seed2, key, tempo) {
        this.seed1 = seed1
        this.seed2 = seed2
        this.key = key
        this.tempo = tempo
        this.notes1 = new Notebook(seed1, seed2, key);
        this.notes2 = new Notebook(seed1, seed2, key);
        this.notes3 = new Notebook(seed1, seed2, key);
        this.notes4 = new Notebook(seed1, seed2, key);
        this.sequences = [];
    }

    offsetVoices() {
        let secondRest= (this.notes1.indexOf(0, this.notes.indexOf(0) + 1)+1);
        for (let i = 0; i < secondRest*2; i++) {
            this.notes2.notes.unshift("0");
        }
        for (let i = 0; i < secondRest*6; i++) {
            this.notes3.notes.unshift("0");
        }
        for (let i = 0; i < secondRest*14; i++) {
            this.notes4.notes.unshift("0");
        }
    }

    async playSound() {
        if (isNaN(this.tempo) || this.tempo === '') {
            console.error('Invalid tempo:', this.tempo);
            return;
        }

        const synth = new Tone.PolySynth(Tone.Synth, {
            "attack": 0.01,
            "attackCurve": "sine",
            "decay": 0.1,
            "sustain": 0.1,
            "release": 0.5,
        }).toDestination();
        await Tone.start()

        //set the tempo
        Tone.Transport.bpm.value = this.tempo;

        this.notes2.setLimit(2000);
        this.notes3.setLimit(4000);
        this.notes4.setLimit(8000);

        this.notes1.preloadNotes(this.seed1, this.seed2, this.key);
        this.notes2.preloadNotes(this.seed1, this.seed2, this.key);
        this.notes3.preloadNotes(this.seed1, this.seed2, this.key);
        this.notes4.preloadNotes(this.seed1, this.seed2, this.key);

        const voice1 = new Tone.Sequence((time, note) => {
                synth.triggerAttackRelease(note, "2n", time);
            this.notes1.addNote();
        }, this.notes1.notes, "2n").start(0);

        const voice2 = new Tone.Sequence((time, note) => {
                synth.triggerAttackRelease(note, "4n", time);
            this.notes2.addNote();
        }, this.notes2.notes, "4n").start(0);

        const voice3 = new Tone.Sequence((time, note) => {
                synth.triggerAttackRelease(note, "8n", time);
            this.notes3.addNote();
        }, this.notes3.notes, "8n").start(0);

        const voice4 = new Tone.Sequence((time, note) => {
                synth.triggerAttackRelease(note, "16n", time);
            this.notes4.addNote();
        }, this.notes4.notes, "16n").start(0);
        
        Tone.Transport.start();

        this.voices = [voice1, voice2, voice3, voice4];
    }


    setTempo(tempo) {
        console.log('setting tempo to: ' + tempo);
        this.tempo = tempo;
    }

    setKey(key) {
        console.log('setting key to: ' + key);
        this.key = key;
    }

    setSeed1(seed1) {
        console.log('setting seed1 to: ' + seed1);
        this.seed1 = BigInt(seed1);
    }

    setSeed2(seed2) {
        console.log('setting seed2 to: ' + seed2);
        this.seed2 = BigInt(seed2); 
    }
    
    stopSound() {
        this.voices.forEach(voice => voice.stop());
        Tone.Transport.stop();
    }

}

export default SoundPlayer;