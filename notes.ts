console.log('Starting notes...');

module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
};

module.exports.add = (a: number, b: number): number => {
    return a + b;
};