const n = Math.random() * 100

// Old Fashion
if (n > 50) {
   console.log('Pass')
} else {
   console.log('Fail')
}

// With Ternary Operator
console.log(n > 50 ? 'Pass' : 'Fail')
