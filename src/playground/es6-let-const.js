var nameVar = 'Andrew';
var nameVar = 'Aman'
console.log('nameVar', nameVar)

let nameLet = 'Jen'
nameLet = 'Julie'
console.log('nameLet', nameLet)

const nameConst = "Frank"
console.log('nameConst', nameConst)

//block scoping

var fullName = 'Aman Mistry'

if(fullName) {
    var firstName = fullName.split(' ')[0]
    console.log(firstName )
}
