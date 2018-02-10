"use strict";
console.log('Starting app...');
var fs = require('fs');
var os = require('os');
var _ = require('lodash');
var notes = require('./notes');
// console.log(_.isString(true));
// console.log(_.isString('Jared'));
var filteredArray = _.uniq(['Jared', 'Jared', 1, 2, 3, 4]);
console.log(filteredArray);
// console.log('Results', notes.add(9, 1));
// let user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);
//# sourceMappingURL=app.js.map