// NoteGenerator.js
export default function generateNote() {
    // Replace this with your own note generation logic
    //this is an array holding notes
    const notes = ["C4", "E4", "G4", "B4"];
    //this is returning a random note from the array
    const note = notes[Math.floor(Math.random() * notes.length)];
    //logging only - console.log(note);  // Log the note to the console
    return note;
}