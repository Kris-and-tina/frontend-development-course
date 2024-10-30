/**
 * Валидирует операнды и возвращает их сумму
 * 
 * @param {unknown} leftOperand Левый операнд
 * @param {unknown} rightOperand Правый операнд
 * @returns {Number} Сумма операндов
 */
export const sum = (leftOperand, rightOperand) => {
    if (typeof leftOperand !== 'number' && typeof rightOperand !== 'number') {
        console.log("Operands are not numbers");
        return null;
    } else if (typeof rightOperand !== 'number') {
        console.log("The right operand is not a number");
        return null;
    } else if (typeof leftOperand !== 'number') {
        console.log("The left operand is not a number");
        return null;
    } else {
    return leftOperand + rightOperand;
    }
};
