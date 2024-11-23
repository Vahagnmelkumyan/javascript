//1.
let str = "I am learning JavaScript";
let result = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    result += "-";
  } else {
    result += str[i];  
  }
}
console.log(result);

//2.

let n = 5;
for(let i = 1; i <= 10; i++)
{
    console.log(`${n} * ${i} = ${n * i}`)
};
