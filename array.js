/*
browser=["Chrome","Firefox","Safari"]
console.log (browser)
console.log (browser[0])

Text=["Login Test",
    "Dashboard test",
    "Logout test"
]
for (test of Text){
    console.log(test)
}

results=['pass','fail','pass','pass','fail','pass','pass','fail']
passedcount=0
failedcount=0
for (result of results){
    if (result==='pass'){
        passedcount++
    }
    else{
        failedcount++
    }
}
console.log("Total passed tests are :",passedcount,"Total failed tests are :",failedcount)
*/

let pods=[
    {name:"pod 1",status:"Running"},
    {name:"pod 2",status:"Running"},
    {name:"pod 3",status:"Running"},
    {name:"pod 4",status:"Pending"},
    {name:"pod 5",status:"Failed"}
]
let failedpods=0
 for (let pod of pods)
 {
    if (pod.status=="Failed"||pod.status=="Pending")
        {
        console.log("Failed pod is :",pod.name,"and pod status is :",pod.status)
        failedpods++
        }
 }
 console.log("Total failed pods are :",failedpods)