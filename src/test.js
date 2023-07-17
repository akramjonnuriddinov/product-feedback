let myObject = {
  name: 'John',
  skillItem1: 4,
  skillItem2: 7,
  skillItem3: 2,
  skillItem4: 1,
}

// Updates any numerical values that are more than or equal to 4, and changes them to 10:
Object.keys(myObject).forEach((item) => {
  myObject[item] = 10
})

console.log(myObject)
