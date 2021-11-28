export default class ErrorRepository {
    constructor() {
        this.map = new Map([
            ['400', 'Bad Request'],
            ['500', 'Internal Server Error']
        ]);
    };
        translate(code) {
            if (this.map.get(code)) {
                return this.map.get(code);
            }
            return 'Unknown error';
        };
    };