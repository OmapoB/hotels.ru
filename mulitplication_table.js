export default class MultiplicationTable {
    static draw(num) {
        let row = "";
        for (let i = 1; i <= num; i++) {
            for (let j = 1; j <= num; j++) {
                row += ('' + (j * i)).padStart(('' + num).length + 1, ' ') + " ";
            }
            console.log(row);
            row = '';
        }
    }
}