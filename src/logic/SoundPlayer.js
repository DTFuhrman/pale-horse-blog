
import * as Tone from 'tone'
import generateNote from './NoteGenerator'

class SoundPlayer {
    constructor(tempo) {
        this.tempo = tempo;
        this.notes1 = [];
        this.notes2 = [];
        this.notes3 = [];
        this.notes4 = [];
        this.sequences = [];
    }

    updateNotes() {
        this.notes1.push(generateNote());
        this.notes2.push(generateNote());
        this.notes3.push(generateNote());
        this.notes4.push(generateNote());

        if (this.notes1.length > 100) this.notes1.shift();
        if (this.notes2.length > 100) this.notes2.shift();
        if (this.notes3.length > 100) this.notes3.shift();
        if (this.notes4.length > 100) this.notes4.shift();
    }

    async playSound() {
        const synth = new Tone.PolySynth(Tone.Synth).toDestination();
        await Tone.start()

        Tone.Transport.bpm.value = this.tempo;

        this.updateNotes();

        const sequence1 = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, "2n", time);
            this.updateNotes();
        }, this.notes1, "2n").start(0);

        const sequence2 = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, "4n", time);
            this.updateNotes();
        }, this.notes2, "4n").start(0);

        const sequence3 = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, "8n", time);
            this.updateNotes();
        }, this.notes3, "8n").start(0);

        const sequence4 = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, "16n", time);
            this.updateNotes();
        }, this.notes4, "16n").start(0);
        
        Tone.Transport.start();

        this.sequences = [sequence1, sequence2, sequence3, sequence4];
    }

    stopSound() {
        this.sequences.forEach(sequence => sequence.stop());
        Tone.Transport.stop();
    }

    setTempo(tempo) {
        console.log('setting tempo to: ' + tempo);
        this.tempo = tempo;
    }
}

export default SoundPlayer;