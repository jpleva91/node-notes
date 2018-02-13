import { NoteInterface } from './interfaces/note.interface'

console.log('Starting notes...');

const fs = require('fs');

export default class Notes {

    constructor () {}

    private fetchNotes = () => {
        try {
            const notesString = fs.readFileSync('notes-data.json');
            return JSON.parse(notesString);
        } catch (e) {
            return [];
        }
    };

    private saveNotes = (notes: NoteInterface[]): void => {
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    };

    public addNote = (title: string, body: string) => {
        const notes = this.fetchNotes();
        const note = {
            title,
            body
        };

        const duplicateNotes = notes.filter((note: NoteInterface) => note.title === title);

        if (duplicateNotes.length === 0) {
            notes.push(note);

            console.log(`
                Note created.
                --
                Title: ${title},
                Body: ${body}
            `);

            return this.saveNotes(notes);
        }

        return console.log(`
            Duplicate note.
            --
            Please add note with unique title.
        `);
    };

    public getAll = () => {
        console.log('Getting all notes');
    };

    public getNote = (title: string) => {
        console.log('Getting note', title);
    };

    public removeNote = (title: string) => {
        // fetch notes
        const notes = this.fetchNotes();
        // filter notes, removing where title equals argument
        const filteredNotes = notes.filter((note: NoteInterface) => note.title !== title);
        // save new notes array
        this.saveNotes(filteredNotes);
        // print result to the console
        notes.length !== filteredNotes.length
            ? console.log(`
                Note "${title}" deleted.
            `)
            : console.log(`
                Note "${title}" not found.
                --
                Please try another title.
            `)

    };

}