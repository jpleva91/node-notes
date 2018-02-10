import {Inject} from "typedi";

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

switch (command) {
    case 'add':
        Notes.addNote(title, body);
        break;
    case 'list':
        Notes.getAll();
        break;
    case 'read':
        Notes.read(title);
        break;
    case 'remove':
        Notes.remove(title);
        break;
    default:
        console.log('Command not recognized');
}
