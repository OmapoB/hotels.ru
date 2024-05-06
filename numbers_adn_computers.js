export default class ComputersCase {
    #word = "компьютер";
    run(amount) {
        return `${amount} ${this.#caseForNumber(amount)}`
    }

    #caseForNumber(number) {
        if (
            number % 100 >= 11 & number % 100 <= 19 |
            number % 10 >= 5 & number % 10 <= 9 |
            number % 10 === 0
        ) {
            return this.#word + "ов";
        }
        if (number % 10 >= 2 & number % 10 <= 4) {
            return this.#word + "а";
        }
        return this.#word;
    }
}