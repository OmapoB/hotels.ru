export default class PrimeNumbersGenerator {
    static generate(start, stop) {
        let nums = [];
        for (start; start <= stop; start++) {
            if (this.#isPrime(start)) {
                nums.push(start);
            }
        }
        return nums;
    }

    static #isPrime(num) {
        num = Math.abs(num);
        if (num === 1) {
            return true;
        }
        if (num === 2 || num === 3) {
            return true;
        }
        if (num % 2 === 0 || num % 3 === 0) {
            return false;
        }

        const sqrt = Math.floor(Math.sqrt(num));

        for (let i = 5, j = 7; i <= sqrt || j <= sqrt; i += 6, j += 6) {
            if (num % i === 0 || num % j === 0) {
                return false;
            }
        }
        return true;
    }
}