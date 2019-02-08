let list = [1,2,3];
let sum = 0;

list.forEach(a => sum += a);
console.log(sum);

list = list.map(a => a - -1);
console.log(list);

let newList = list.filter(a => a > 2);
console.log(newList);

let total = list.reduce((acc, val) => acc + val, 100);
console.log(total);

let numLetters = ['a', 'b', 'c', 'd'];
numLetters.map(letter => 
{
    console.log(letter); 
    return letter + "1";
})
.map(letter => 
{
        console.log(letter); 
        return letter + "2";
})
.forEach(letter => console.log(letter));