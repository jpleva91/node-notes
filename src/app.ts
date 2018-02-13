console.log('Starting app...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

import Notes from './notes';

const argv = yargs.argv;
const command = (process.argv as any)[2];
const { title, body } = argv;
console.log('Command:', command);
console.log('Yargs', argv);

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
