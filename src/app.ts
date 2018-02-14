const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

import Notes from './notes';

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'Fetch a list of all notes by title')
    .command('read', 'Fetch a note by given title', {
        title: titleOptions,
    })
    .command('remove', 'Remove a note by given title', {
        title: titleOptions,
    })
    .help()
    .argv;

const command = argv._[0];
const { title, body } = argv;
const notes = new Notes();

switch (command) {

    case 'add':
        notes.addNote(title, body);
        break;
    case 'list':
        notes.getAll();
        break;
    case 'read':
        notes.getNote(title);
        break;
    case 'remove':
        notes.removeNote(title);
        break;
    default:
        console.log('Command not recognized');

}
