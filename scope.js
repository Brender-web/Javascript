//global scope-defined outside code blocks
//local scope-defined inside code blocks

let mycity ="nairobi";

if (mycity){
    let mycity ="kisumu";
    let mycity2 ="lamu"
    console.log(mycity);
}

console.log(mycity);
console.log(mycity2);

{
    var name1 = "Brender";
}
console.log(name1)

{
    let name2 = "juliet";
}
console.log(name2)