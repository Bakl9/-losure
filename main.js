
function calCulator (n) {
    return function() {
        console.log(n + 1000)
    }
}

const name = calCulator('name')
name() 



function newSission(name) {
    return function(age) {
        return name + age
    };
};

const addOne = newSission('ilsyha ');
const addTwo = newSission('Olena ');

console.log(addOne(20));
console.log(addTwo(30));
