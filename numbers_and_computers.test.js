import ComputersCase from "./numbers_and_computers.js";

export default class ComputersCaseTest {
    #instance = new ComputersCase();

    testCase0() {
        for (let i = 0; i < 10; i++) {
            let test = Math.ceil(Math.random()) * 10;
            let result = this.#instance.run(test);
            if (result.slice(-2) !== "ов") {
                console.log(result)
                return "Failed";
            }
        }
        return "Succes";
    }

    testCase1() {
        for (let i = 0; i < 10; i++) {
            let test = 10 + Math.ceil(Math.random()) * 10 + 1;
            let result = this.#instance.run(test);
            if (result.split(" ")[1].length !== 9) {
                console.log(result.split(" ")[1].length)
                return Failed;
            }
        }
        return "Succes";
    }

    testCase2_4() {
        for (let i = 2; i < 4; i++) {
            let test = Math.ceil(Math.random()) * 10 + 10 + i;
            let result = this.#instance.run(test);
            if (result.slice(-1) !== "а") {
                console.log(result)
                return Failed;
            }
        }
        return "Succes";
    }

    testCase11_19() {
        for (let i = 11; i <= 19; i++) {
            let result = this.#instance.run(i);
            if (result.slice(-2) !== "ов") {
                return Failed;
            }
        }
        return "Succes";
    }

    handTest(number) {
        return this.#instance.run(number);
    }
}