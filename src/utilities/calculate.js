const add = (first, second) => {
    return first + second;
}

const multiply = (first, second) => {
    return first * second;
}

/* const numbers = [20, 24, 35, 65, 89];
const sumReducer = (previous, current) => previous + current;
const total = numbers.reduce(sumReducer, 0); */

/* const items = [
    { id: 1, name: 'Alta', Price: 100 },
    { id: 2, name: 'Palish', Price: 200 },
    { id: 3, name: 'Malish', Price: 300 },
    { id: 4, name: 'Balish', Price: 400 },
    { id: 5, name: 'Nalish', Price: 500 }
]

const itemSumReducer = (previous, current) => previous + current.price;
const itemTotal = items.reduce(itemSumReducer, 0); */

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

export {
    add,
    multiply,
    getTotalPrice as getTotal
};