export default class MultiplicationTable {
    static draw(num) {
        let oneRow = "";
        for (let i = 1; i <= num; i++) {
            for (let j = 1; j <= num; j++) {
                oneRow += ('' + (j * i)).padStart(('' + num).length + 1, ' ') + " ";
            }
            console.log(oneRow);
            oneRow = '';
        }
    }
}