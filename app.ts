console.log('Starting app...');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

// console.log(_.isString(true));
// console.log(_.isString('Jared'));
const filteredArray = _.uniq(['Jared', 'Jared', 1, 2, 3, 4]);
console.log(filteredArray);

// console.log('Results', notes.add(9, 1));

// let user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);
