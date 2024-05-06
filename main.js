import GCD from "./gcd.js";
import ComputersCaseTest from "./numbers_and_computers.test.js"

const tests = new ComputersCaseTest();
console.log(tests.testCase0())
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
