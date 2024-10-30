
/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 * 
 * @param {Number} num
 * @returns {Number}
 */
export const solutionFn = (num) => {
    if (num < 10) {
        return num;
    }
    while (num >= 10) {
        let product = 1;
        let tempNum = num;
        while (tempNum > 0) {
            product *= tempNum % 10;
            tempNum = Math.floor(tempNum / 10);
        }
        num = product;
    }
    return num;
};