// NoteGenerator.js
export default function generateNote(key) {
    // Define the notes for each key
    const keys = {
        'C': ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "rest"],
        'C#': ["C#4", "D#4", "E#4", "F#4", "G#4", "A#4", "B#4", "C#5", "rest"],
        'D': ["D4", "E4", "F#4", "G4", "A4", "B4", "C#5", "D5", "rest"],
        'D#': ["D#4", "E#4", "F##4", "G#4", "A#4", "B#4", "C##5", "D#5", "rest"],
        'E': ["E4", "F#4", "G#4", "A4", "B4", "C#5", "D#5", "E5", "rest"],
        'F': ["F4", "G4", "A4", "A#4", "C5", "D5", "E5", "F5", "rest"],
        'F#': ["F#4", "G#4", "A#4", "B4", "C#5", "D#5", "E#5", "F#5", "rest"],
        'G': ["G4", "A4", "B4", "C5", "D5", "E5", "F#5", "G5", "rest"],
        'G#': ["G#4", "A#4", "B#4", "C#5", "D#5", "E#5", "F##5", "G#5", "rest"],
        'A': ["A4", "B4", "C#5", "D5", "E5", "F#5", "G#5", "A5", ""],
        'A#': ["A#4", "B#4", "C##5", "D#5", "E#5", "F##5", "G##5", "A#5", "rest"],
        'B': ["B4", "C#5", "D#5", "E5", "F#5", "G#5", "A#5", "B5", "rest"],
        'Cm': ["C4", "D4", "D#4", "F4", "G4", "G#4", "A#4", "C5", "rest"],
        'C#m': ["C#4", "D#4", "E4", "F#4", "G#4", "A4", "B4", "C#5", "rest"],
        'Dm': ["D4", "E4", "F4", "G4", "A4", "A#4", "C5", "D5", "rest"],
        'D#m': ["D#4", "F4", "F#4", "G#4", "A#4", "B4", "C#5", "D#5", "rest"],
        'Em': ["E4", "F#4", "G4", "A4", "B4", "C5", "D5", "E5", "rest"],
        'Fm': ["F4", "G4", "G#4", "A#4", "C5", "C#5", "D#5", "F5", "rest"],
        'F#m': ["F#4", "G#4", "A4", "B4", "C#5", "D5", "E5", "F#5", "rest"],
        'Gm': ["G4", "A4", "A#4", "C5", "D5", "D#5", "F5", "G5", "rest"],
        'G#m': ["G#4", "A#4", "B4", "C#5", "D#5", "E5", "F#5", "G#5", "rest"],
        'Am': ["A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "rest"],
        'A#m': ["A#4", "C5", "C#5", "D#5", "F5", "F#5", "G#5", "A#5", "rest"],
        'Bm': ["B4", "C#5", "D5", "E5", "F#5", "G5", "A5", "B5", "rest"]
    };
    console.log('key:', key);

    // Get the notes for the selected key
    const notes = keys[key];
    console.log('notes:', notes);

    // Return a random note from the array
    const note = notes[Math.floor(Math.random() * notes.length)];
    console.log('note:', note);

    return note;
}