import GCD from "./gcd.js";
import MultiplicationTable from "./mulitplication_table.js";
import ComputersCaseTest from "./numbers_and_computers.test.js"
import PrimeNumbersGenerator from "./prime_nums_generator.js";

const tests = new ComputersCaseTest();
console.log(tests.testCase0());
console.log(tests.testCase1());
console.log(tests.testCase2_4());
console.log(tests.testCase11_19());

butt.onclick = () => {
    let num = document.getElementById("compTest").value;
    console.log(tests.handTest(num));
}

buttGcd.onclick = () => {
    let nums = document.getElementById("gcdTest")
        .value
        .split(" ")
        .map((num) => { return parseInt(num, 10) });
    console.log(GCD.calculcate(nums));
}

buttTable.onclick = () => {
    let num = document.getElementById("tableTest").value;
    MultiplicationTable.draw(num);
}

buttPrime.onclick = () => {
    let [start, stop] = document.getElementById("primeTest")
    .value
    .split(" ")
    .map((num) => {return parseInt(num, 10)});
    console.log(PrimeNumbersGenerator.generate(start, stop));
}