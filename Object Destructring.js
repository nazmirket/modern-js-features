// EXAMPLE 1
const person = {
   firstName: 'Nazmi',
   age: 24,
   profession: 'Developer',
   weight: 75,
}

// Old Fashion
console.log(person.firstName, person.age, person.profession, person.weight)

// Modern JS
const { firstName, age, profession, weight } = person
console.log(firstName, age, profession, weight)

// EXAMPLE 2
const people = [person, person, person]

// Old Fashion
for (const item of people) {
   console.log(item.firstName)
}

// Modern JS
for (const { firstName } of people) {
   console.log(firstName)
}
