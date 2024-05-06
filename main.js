import ComputersCaseTest from "./numbers_adn_computers.test"

const tests = new ComputersCaseTest();
console.log(tests.testCase0())
console.log(tests.testCase1());
console.log(tests.testCase2_4());
console.log(tests.testCase11_19());

butt.onclick = () => {
    let num = document.getElementById("compTest").value;
    console.log(tests.handTest(num));
}