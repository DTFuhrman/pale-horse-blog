import { generatePisanoPeriodNoteArray } from "./NoteGenerator";

class Notebook {
    constructor(seed1 = 1, seed2 = 1, key = "C") {
        this.notes = [];
        this.counter = 1;
        this.key = key;
        this.seed1 = seed1;
        this.seed2 = seed2; 
        this.limit = 1000;
        this.pisanoNoteArray = [];
    }

    preloadNotes(seed1, seed2, key) {
        this.pisanoNoteArray = generatePisanoPeriodNoteArray(this.seed1, this.seed2, this.key, this.counter);
        while (this.notes.length < this.limit) {
            if (this.pisanoNoteArray.length > 0) {
                this.addNote(this.pisanoNoteArray);
                this.pisanoNoteArray.shift();
            } else {
                this.counter++;
                this.pisanoNoteArray = generatePisanoPeriodNoteArray(this.seed1, this.seed2, this.key, this.counter);
            }
        }
    }

    addNote(noteArray) {
        if(this.pisanoNoteArray.length > 0) {
        this.notes.push(this.pisanoNoteArray[0]);
        } else {
            this.counter++;
            this.pisanoNoteArray = generatePisanoPeriodNoteArray(this.seed1, this.seed2, this.key, this.counter);
            this.notes.push(this.pisanoNoteArray[0]);
        }
    }

    setLimit(limit) {
        this.limit = limit;
    }

    removeFirstNote() {
        this.notes.shift();
    }

    getNotes() {
        return this.notes;
    }
}

export default Notebook;
