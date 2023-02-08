// mathTest

const mathTest = {
    firstExample: "1 + 1 =",
    secondExample: "2 + 2 =",
    getSqrt: function(n){
        return Math.sqrt(n);
    }
}

function sqrt(n) {
    return this.getSqrt(Math.sqrt(n))
}

console.log(sqrt.apply(mathTest, [16]));