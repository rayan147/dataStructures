/*
Arrays
 */

const names =['Max','Manuel','Julia','Max',]
for (let el of names){
    console.log(el)
}
let fin = names.findIndex(el => el === "Julia")

console.log(fin)

/*
Set
 */

const ids  = new Set([])
ids.add("123")
ids.add("4")
ids.delete([1])
console.log(ids.has(4))
for ( let el of ids){
    console.log(el)
}

/* 
Object are unorder key-value-pair
access element by keys 
Object  are not iterable
Key are unique
*/

const person = {
    name:"Max",
    age:27 ,
    hobbies:["Chess","LINUX","React","Manga","Anime"],
  greet() {
       return  console.log(`Hi I am ${name}`)
    }
}

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        const element = person[key];
        console.log(element)
    }
}

/* 
Map are order key-value-pair
access element by keys 
Map are iterable
Key are unique
keys can be anything 
Pure data storage 
optimized by data access
*/
const results  = new Map()
results.set('name',"Rayan")
results.set('lastname',"Ramirez")
results.set('age',27)
results.set('hobies',["Chess","LINUX","React","Manga","Anime"])

console.log(results)

for ( let el of results){
    console.log(el)
}

/*
WeakMap and WeakSet 
are varation of Set and Map
Values and key are only weakly refrence 
Javascript Garbage collection can delete values and keys if 
not used in the app
 */
const results  = new WeakMap()

results.set({},'rayan')
results.set({name:"??"},'rayan')
console.log(results)

for ( let el in results){
    console.log(results[el])
}