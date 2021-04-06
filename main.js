
function calCulator (n) {
    return function() {
        console.log(n + 1000)
    }
}

const name = calCulator('name')
name() 
