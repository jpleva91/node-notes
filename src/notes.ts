console.log('Starting notes...');

export default class Notes {

    public static addNote = (title: string, body: string) => {
        console.log('Adding note', title, body);
    };

    public static getAll = () => {
        console.log('Getting all notes');
    };

    public static read = (title: string) => {
        console.log('Fetching note', title);
    };

    public static remove = (title: string) => {
        console.log('Removing note', title);
    };

}