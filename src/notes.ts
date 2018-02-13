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
        const notes = this.fetchNotes();

        if (notes.length > 0) {
            console.log(`
                Getting all notes...
                --
                Current Notes by Title:
            `);

            return notes.forEach((note: NoteInterface)  => {
                console.log(`${note.title}`)
            })
        }

        console.log(`
            No notes found.
            --
            Please use the add command to create a new note.
         `)
    };

    public getNote = (title: string) => {
        const note = this.fetchNotes().filter((note: NoteInterface) => note.title === title);

        if (note.length > 0) {
            return console.log(`
                Fetching Note...
                --
                Title: ${title},
                --
                Body: ${note.body}
            `);
        }

        console.log(`
            No note found.
            --
            Please try another title or use the list command to view all notes.
         `)
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
            `);
    };

}