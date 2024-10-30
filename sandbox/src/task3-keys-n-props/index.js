/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 * 
 * @param {Object} obj Объект
 * @returns {Object} Объект с количеством вхождений типов
 */
export const solutionFn = (obj) => {
    const typeCounts = {
        string: 0,
        number: 0,
        object: 0,
        undefined: 0
    };
    
    if (Object.keys(obj).length === 0) {
        typeCounts.object++;
    }
    for (let key in obj) {
        const value = obj[key];
        if (typeof value === 'string') {
            typeCounts.string++;
        } else if (typeof value === 'number') {
            typeCounts.number++;
        } else if (typeof value === 'object' || value === null) {
            typeCounts.object++;
        } else if (typeof value === 'undefined') {
            typeCounts.undefined++;
        }
    }
    return typeCounts;
};
