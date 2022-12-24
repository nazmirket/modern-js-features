// DECLARATION

// Normal Function Declaration
function add1(a, b) {
   return a + b
}


// Arrow Function Declaration
const add2 = (a, b) => a + b

// test
add1(5,4)
add2(7,1)


// USE OF THIS KEYWORD

const obj = {
   value1: 158,
   fn1: function () {
      console.log(this.value1)
   },
   fn2: () => {
      console.log(this.value1)
   },
}

// test
obj.fn1()
obj.fn2()
