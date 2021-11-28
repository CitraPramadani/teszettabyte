// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(input) {
  // Your Code Here
}
function sumSimpleArray(array){let sum = 0; for(let i = 0; i < array.length; i++)
  {sum +=array[i];}
return sum;}

function sumSimpleArray(array){let sum = 0; const reducer = (accumulator, currentValue=> {return accumulator + currentValue})}
return array.reduce(reducer)

function sumSimpleArray(array){let sum = 0;
  return array.reduce((accumulator,currentValue)=>{return accumulator + currentValue })

console.log(result(input));