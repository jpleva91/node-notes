console.log('Starting notes...');

export default class Notes {

    public static addNote = (title: string, body: string) => {
        console.log('Adding note', title, body);
    };

    public static getAll = () => {
        console.log('Getting all notes');
    };

    public static getNote = (title: string) => {
        console.log('Getting note', title);
    };

    public static removeNote = (title: string) => {
        console.log('Removing note', title);
    };

}