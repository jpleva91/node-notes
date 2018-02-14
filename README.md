# node-notes


## Getting Started

### Clone the project and run 
npm install

### Transpile Typescript to Javascript by running
tsc

### Starting the app
cd dist && node app.js --help


### Using Commands
node app.js [Command]

### Commands

#### help
node app.js --help

#### add
Create a new note.
Example: node app.js add -t='This is a title' -b='This is the body'

#### list
List all current notes by title.
Example: node app.js list

#### read
Read a note with a given title.
Example: node app.js read -t='This is a title'

#### remove
Delete a note with a given title.
Example node app.js remove -t='This is a title'
