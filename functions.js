/* function for build status check
function checkbuild(status){
    status=status.toLowerCase()
    if (status=="running")
        console.log("Build is HEALTHY")
    else if (status=="pending" || status=="failed"){
        console.log("Build is UNHEALTHY")
    }
    else{
    console.log("Build is in unknown state")
    }

}
checkbuild("RUNNING")


const add=(a,b)=>{
    return a+b
}

console.log(add(11,10))

//function to check builds
const checkbuild=(status)=>{
status=status.toLowerCase()
if (status=='pending')
{
console.log("Build is unhealthy")
}
else if (status=='running')
{
console.log("Build is healthy")
}
}
checkbuild('PENDING')

*/

let build={
    buildid:1234,
    actpods:5,
    exppods:5,
    status:"running"
}
console.log("Build id is :",build.buildid)
console.log("Actual pods are :",build.actpods)
console.log("Expected pods are :",build.exppods)
console.log("Build status is :",build.status)
if (build.status=="running"&& build.actpods==build.exppods)
{
console.log("Build is healthy")
}
else
{
console.log("Build is unhealthy")
}