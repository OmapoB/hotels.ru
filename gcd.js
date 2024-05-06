export default class GCD {
    static calculcate(a, b) {
        let [x, xx, y, yy] = [1, 0, 0, 1];
        while (b) {
            let q = Math.floor(a / b);
            [a, b] = [b, a % b];
            [x, xx] = [xx, x - xx * q];
            [y, yy] = [yy, y - yy * q]
        }
        return a;
    }
    static calculcate(nums) {
        let gcd = [];
        for (let i = 2; i <= Math.min.apply(null, nums); i++) {
            if (this.#isDivisor(i, nums)) {
                gcd.push(i);
            }
        }
        return gcd;
    }

    static #isDivisor(num, nums) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] % num !== 0) {
                return false;
            }

        }
        return true;
    }
}