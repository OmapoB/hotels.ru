import ComputersCase from "./numbers_adn_computers";

export default class ComputersCaseTest {
    #instance = new ComputersCase();

    testCase11_19() {
        for (let i = 11; i <= 19; i++) {
            if (this.#instance.run(i).slice(-2) !== "ов") {
                return false;
            }
        }
        return true;
    }

    testCase0() {
        for (let i = 0; i < 10; i++) {
            let test = Math.random() * 10;
            if (this.#instance.run(test).slice(-2) !== "ов") {
                return false;
            }
        }
        return true;
    }

    testCase2_4() {
        for (let i = 2; i < 4; i++) {
            let test = Math.random() * 10 + i;
            if (this.#instance.run(test).slice(-1) !== "а") {
                return false;
            }
        }
        return true;
    }

    testCase1() {
        for (let i = 0; i < 10; i++) {
            let test = Math.random() * 10 + 1;
            if (this.#instance.run(test).length() !== 9) {
                return false;
            }
        }
        return true;
    }

    handTest(number) {
        return this.#instance.run(number);
    }
}