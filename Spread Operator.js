// With Objects

const o1 = {
   p1: 'Some property',
   p2: 99,
   p3: 'Some other property',
}

const o2 = {
   p4: 'Another property',
}

const oUnified = { ...o1, ...o2 }

console.log(oUnified)

// With Arrays
const a1 = [23, 45, 124, 53]

const a2 = [512, 23, 123, 464, 23]

const aUnified = [...a1, ...a2, 67, 132]

console.log(aUnified)
