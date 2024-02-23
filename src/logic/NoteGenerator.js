import PisanoCalculator from './PisanoCalculator';

const keys = {
    'C': ["C5", "C4", "D4", "E4", "F4", "G4", "A4", "B4"],
    'C#': ["C#5", "C#4", "D#4", "E#4", "F#4", "G#4", "A#4", "B#4"],
    'D': ["D5", "D4", "E4", "F#4", "G4", "A4", "B4", "C#5"],
    'D#': ["D#5", "D#4", "E#4", "F##4", "G#4", "A#4", "B#4", "C##5"],
    'E': ["E5", "E4", "F#4", "G#4", "A4", "B4", "C#5", "D#5"],
    'F': ["F5", "F4", "G4", "A4", "A#4", "C5", "D5", "E5"],
    'F#': ["F#5", "F#4", "G#4", "A#4", "B4", "C#5", "D#5", "E#5"],
    'G': ["G5", "G4", "A4", "B4", "C5", "D5", "E5", "F#5", "G5"],
    'G#': ["G#5", "G#4", "A#4", "B#4", "C#5", "D#5", "E#5", "F##5"],
    'A': ["A5", "A4", "B4", "C#5", "D5", "E5", "F#5", "G#5"],
    'A#': ["A#5", "A#4", "B#4", "C##5", "D#5", "E#5", "F##5", "G##5"],
    'B': ["B5", "B4", "C#5", "D#5", "E5", "F#5", "G#5", "A#5"],
    'Cm': ["C5", "C4", "D4", "D#4", "F4", "G4", "G#4", "A#4"],
    'C#m': ["C#5", "C#4", "D#4", "E4", "F#4", "G#4", "A4", "B4"],
    'Dm': ["D5", "D4", "E4", "F4", "G4", "A4", "A#4", "C5"],
    'D#m': ["D#5", "D#4", "F4", "F#4", "G#4", "A#4", "B4", "C#5"],
    'Em': ["E5", "E4", "F#4", "G4", "A4", "B4", "C5", "D5"],
    'Fm': ["F5", "F4", "G4", "G#4", "A#4", "C5", "C#5", "D#5"],
    'F#m': ["F#5", "F#4", "G#4", "A4", "B4", "C#5", "D5", "E5"],
    'Gm': ["G5", "G4", "A4", "A#4", "C5", "D5", "D#5", "F5"],
    'G#m': ["G#5", "G#4", "A#4", "B4", "C#5", "D#5", "E5", "F#5"],
    'Am': ["A5", "A4", "B4", "C5", "D5", "E5", "F5", "G5"],
    'A#m': ["A#5", "A#4", "C5", "C#5", "D#5", "F5", "F#5", "G#5"],
    'Bm': ["B5", "B4", "C#5", "D5", "E5", "F#5", "G5", "A5"]
};


export function generatePisanoPeriodNoteArray(seed1, seed2, key, counter) {
    console.log('key:', key);
    console.log('counter:', counter);

    // Get the notes for the selected key
    const notes = keys[key];
    console.log('notes:', notes);

    // Create a new PisanoCalculator
    const pisanoCalculator = new PisanoCalculator();
    
    // Generate a Pisano Period
    const period =  pisanoCalculator.generatePisanoPeriod(BigInt(seed1), BigInt(seed2), BigInt(counter));

    // Generate a hat sequence
    const hatSequence = pisanoCalculator.generateHatSequence(period);

    // Create a Pisano period note array
    const pisanoPeriodNoteArray = [];

    // Add the notes to the pisanoPeriodNoteArray
    for (let i = 0; i < hatSequence.length; i++) {
        pisanoPeriodNoteArray.push(notes[Number(hatSequence[i])]);
    }

    //pisanoPeriodNoteArrays always end with a rest
    pisanoPeriodNoteArray.push("0");

    return pisanoPeriodNoteArray;
}




