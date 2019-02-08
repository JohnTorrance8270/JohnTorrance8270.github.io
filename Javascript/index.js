let consoleName = "he said \"my name is matt\"";
console.log(consoleName);
console.log(consoleName.toUpperCase());

let newNumber = "1" + 2;
console.log(newNumber);

newNumber = Number("1") + 2;
console.log(newNumber);

let fakeArray = ["a", "b", "c"];
customLoop();

fakeArray.push("d");
customLoop();

fakeArray.pop();
customLoop();

fakeArray.splice(2, 1);
customLoop();

// add key 2 with val 2 in string format
fakeArray[2] = "2";
customLoop();

function customLoop()
{
    for(let x = 0; x < fakeArray.length; x++)
    {
        console.log(fakeArray[x]);
    }
}

let arrayLiteral = 
{
    "e" : "cat",
    "d" : "dog",
    "a" : "meh"
}

console.log(arrayLiteral["e"]);
console.log(arrayLiteral.e);

let personObject =
{
    age : 20
}

isOld();
function isOld()
{
    if(!(personObject.age >= 40) || (personObject.age <= 20))
    {
        console.log("rightAge");
    }
    else
    {
        console.log("wrongAge");
    }

    let input = 0;
    let defaultValue = 1;
    let fillExample = input || defaultValue;
    console.log(fillExample);

    if(typeof input !== 'undefined')
    {
        console.log("you exist!");   
    }
}

let newAge =  newIsOld();
console.log(newAge);

function newIsOld()
{
    return (personObject && (!(personObject.age >= 40) || (personObject.age <= 20)));
}