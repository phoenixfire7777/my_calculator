// create "calculator" function which acccepts 
// two number and a callback function which will
// do some math (add, multipy) on those two numbers.
function calculator(x, y, equipment) {
    const output = equipment(x, y)
    return output
}
function add(x, y) {
    return x + y
}
function multiply(x, y) {
    return x * y
}
function divide(x, y) {
    return x / y
}
const addOutput = calculator(1, 2, add)
const multiplyOutPut = calculator(1, 2, multiply)
const divideOutPut = calculator(1, 2, divide)
console.log({
    addOutput,
    multiplyOutPut,
    divideOutPut,
})
console.assert(addOutput === 3, "addition expected 3")
console.assert(multiplyOutPut === 2, "multiplication expected 2")
console.assert(divideOutPut === 0.5, "division expected 0.5")