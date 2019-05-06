//1
function hello(name) {
    console.log(`Hello, ${name}!`);
}
hello('Mustache');

//2
function hello(name) {
    name = name || 'world';
    msg = `Hello, ${name}!`;
    console.log(msg);
}
hello();

//3
function madlib(name, subject) {
    let params = '';
    params = `${name}'s favorite subject in school is ${subject}.`;
    return params;
}
const newMadlib = madlib('Danny', 'lunch')
console.log(newMadlib);

//4,5,6
function tipAmount(bill, service, checks) {
    if (service === 'good') {
        return (bill * 1.2)/checks;
    } else if (service === 'fair') {
        return (bill * 1.15)/checks;
    } else if (service === 'bad') {
        return (bill * 1.1)/checks;
    }
}
const total = tipAmount(20, 'good', 3)
console.log(total);