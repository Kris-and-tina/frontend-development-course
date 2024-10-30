/**
 * Принимает на вход текст письма и массив ключевых слов и проверяет,
 * содержится ли хотя бы одно из ключевых слов в этом тексте
 * 
 * @param {String} text Текст, проверяемый на спам
 * @param {String[]} keywords Массив ключевых слов
 * @returns {Boolean}
 */
export const isSpam = (text, keywords) => {
    text = text.toLowerCase();

    for (let i = 0; i < keywords.length; i++) {
        if (text.includes(keywords[i].toLowerCase())) {
            return true;
        }
    }
    return false;
};
