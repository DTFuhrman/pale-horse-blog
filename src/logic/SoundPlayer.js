
import * as Tone from 'tone'
import generateNote from './NoteGenerator'

class SoundPlayer {
    constructor() {
        this.notes1 = [];
        this.notes2 = [];
        this.notes3 = [];
        this.notes4 = [];
        this.sequences = [];
    }

    updateNotes(key) {
        this.notes1.push(generateNote(key));
        console.log('notes1:', this.notes1);
        this.notes2.push(generateNote(key));
        console.log('notes2:', this.notes2);
        this.notes3.push(generateNote(key));
        console.log('notes3:', this.notes3);
        this.notes4.push(generateNote(key));
        console.log('notes4:', this.notes4);

        if (this.notes1.length > 100) this.notes1.shift();
        if (this.notes2.length > 100) this.notes2.shift();
        if (this.notes3.length > 100) this.notes3.shift();
        if (this.notes4.length > 100) this.notes4.shift();
    }

    async playSound(tempo, key) {
        if (isNaN(tempo) || tempo === '') {
            console.error('Invalid tempo:', tempo);
            return;
        }
        const synth = new Tone.PolySynth(Tone.Synth).toDestination();
        await Tone.start()

        Tone.Transport.bpm.value = tempo;

        this.updateNotes(key);

        const sequence1 = new Tone.Sequence((time, note) => {
            if (note !== "rest") {
                synth.triggerAttackRelease(note, "2n", time);
            }
            this.updateNotes(key);
        }, this.notes1, "2n").start(0);

        const sequence2 = new Tone.Sequence((time, note) => {
            if (note !== "rest") {
                synth.triggerAttackRelease(note, "4n", time);
            }
            this.updateNotes(key);
        }, this.notes2, "4n").start(0);

        const sequence3 = new Tone.Sequence((time, note) => {
            if (note !== "rest") {
                synth.triggerAttackRelease(note, "8n", time);
            }
            this.updateNotes(key);
        }, this.notes3, "8n").start(0);

        const sequence4 = new Tone.Sequence((time, note) => {
            if (note !== "rest") {
                synth.triggerAttackRelease(note, "16n", time);
            }
            this.updateNotes(key);
        }, this.notes4, "16n").start(0);
        
        Tone.Transport.start();

        this.sequences = [sequence1, sequence2, sequence3, sequence4];
    }


    setTempo(tempo) {
        console.log('setting tempo to: ' + tempo);
        this.tempo = tempo;
    }

    stopSound() {
        this.sequences.forEach(sequence => sequence.stop());
        Tone.Transport.stop();
    }

}

export default SoundPlayer;