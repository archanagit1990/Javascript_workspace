//filter
/*

let numbers =[34,56,33,78,56,23,66]
let result=numbers.filter(number=>number>50)
console.log("Numbers greater than 50 are :",result)


let pods=[
    {name:"pod 1",status:"Running"},
    {name:"pod 2",status:"Running"},
    {name:"pod 3",status:"Running"},
    {name:"pod 4",status:"Pending"},
    {name:"pod 5",status:"Failed"}
]

let failedpods=pods.filter(failedpod=>failedpod.status=="Failed"||failedpod.status=="Pending")
console.log("Failed pods are :",failedpods)

*/

//map

let number=[1,2,3,4,5,6,7,8,9]
let doublednumbers=number.map(number=> number*2)
console.log("Doubled numbers are :",doublednumbers)
