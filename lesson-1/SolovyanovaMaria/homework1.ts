// 1
// Немного не понимаю, как указать, что первый элемент - обязательно массив
// и как быть в случае с ...rest (как его типизировать с учетом,
// что элемент rest может быть любого типа)

const isInArray = <T extends (string | number | boolean | null | undefined | symbol | object)[]>(...elements: T[]) => {
    const [targetArray, ...rest] = elements;
    return rest.every(currentElement => targetArray.includes(currentElement));
};

// 2
const summator = (...elements: (string | number)[]) => {
    return elements.reduce((acc: number, currentElement: (string | number)) => {
        if (typeof(currentElement) === 'string') {
            currentElement = Number(currentElement);
        }
        return acc += currentElement;
    }, 0);
};

// 3
// Можно использовать unknown вместо перечисления всех типов?
// Иначе перечисление типов занимает больше места, чем сама функция

const getUnique = (...array: unknown[]) => {
    return array.reduce((acc: unknown[],
                         currentElement: unknown) =>
        (acc.includes(currentElement) ? acc : [...acc, currentElement]), []);
};

// 4
const toMatrix = (data: unknown[], rowSize: number) => {
    return data.map(currentElement => Array(rowSize).fill(currentElement));
};