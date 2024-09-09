// Write a function that takes an array of strings as input and returns a new array with all strings converted to uppercase
// - Hints: Use the toUpperCase() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abc", "def"]
//     - Output Test Cases: ["HELLO", "WORLD", "ABC"], ["XYZ", "ABC", "DEF"]


str1 = +prompt("how many element do you want to store:");
str =[];
res =[];
function outputArray(){
     for(num=1;num<=str1;num++){
        str.push(prompt("enter an element : "));
    }
    for(i=0;i<=str.length-1;i++){
        let str1 = str[i].toUpperCase();
        res.push(str1);
    }
    res = str.map(element => element.toUpperCase())
    console.log(res);
}
outputArray()



using completely functions
function input(){
    let input = +prompt("enter a number of elements to add: ");
    return input;
}
function getElements(num){
    let elements= [];
    for(i =1;i<=num; i++){
        elements.push(prompt("enter a String: "));
    }
    return elements
}
function arrUpperConversation(array){
    return array.map((elements)=> elements.toUpperCase());
}
function displayArray(array){
    console.log(array)
}

function mainFunction(){
    let numberOfElements = input();
    let pushElements = getElements(numberOfElements);
    let convertElements = arrUpperConversation(pushElements);
    displayArray(convertElements)
}
mainFunction()

// 2. Substring
//     - Question: Write a function that takes an array of strings as input and returns a new array with the first 3 characters of each string.
//     - Hints: Use the substring() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abcdef"]
//     - Output Test Cases: ["hel", "wor", "abc"], ["xyz", "abc"]

function getInput(){
    return +prompt("how many element do you want to store:");
}
function iterateInput(takeInput){
    arr = []
    for(num=1;num<=takeInput;num++){
        arr.push(prompt("enter an element : "));
    }
    return arr;
}
function newArray(array){
    let res = array.map((ele)=>{
        return ele.slice(0,4)
    })
    return res;
}
function displayArray(){
    let a = getInput();
    let b = iterateInput(a);
    let c = newArray(b);
    console.log(c)
}
displayArray();

(or)


let input= +prompt("how many element do you want to store:");
let arr = [];
function displayFunction(a){
    for(num=1;num<=a;num++){
        arr.push(prompt("enter an element : "));
    }
    let res = arr.map((ele)=>{
        return ele.slice(0,3)
    });
    console.log(res)
}
displayFunction(input)

// 3. Replace
//     - Question: Write a function that takes an array of strings as input and returns a new array with all occurrences of "o" replaced with "0".
//     - Hints: Use the replace() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "foo", "bar"]
//     - Output Test Cases: ["hell0", "w0rld", "abc"], ["xyz", "f00", "bar"]

let input= +prompt("how many element do you want to store:");
let arr = [],res= [];
function displayFunction(a){
    for(num=1;num<=a;num++){
        arr.push(prompt("enter an element : "));
    }
    for(i of arr){
        if(i.includes("o")){
           res.push(i.replace("o", "0"))
        }
    }
    return res;
}
displayFunction(input)



// 4. Split
//     - Question: Write a function that takes an array of strings as input and returns a new array with each string split into words.
//     - Hints: Use the split() method.
//     - Input Test Cases: ["hello-world", "abc-def"], ["xyz-abc-def"]
//     - Output Test Cases: ["hello", "world", "abc", "def"], ["xyz", "abc", "def"]

let input= +prompt("how many element do you want to store:");
let arr = [];
function displayFunction(a){
    for(num=1;num<=a;num++){
        arr.push(prompt("enter an element : "));
    }
    let res = arr.flatMap((ele)=>{
        return ele.split("-")
    });
    console.log(res)
}
displayFunction(input);


// 5. Filter
//     - Question: Write a function that takes an array of strings as input and returns a new array with only the strings longer than 5 characters.
//     - Hints: Use the filter() method.
//     - Input Test Cases: ["hello", "world", "abc", "defghi"], ["xyz", "abcdef"]
//     - Output Test Cases: ["defghi"], ["abcdef"] 
let input= +prompt("how many element do you want to store:");
let arr = [];
function displayFunction(a){
    for(num=1;num<=a;num++){
        arr.push(prompt("enter an element : "));
    }
    let res = arr.filter((ele)=>{
        return ele.length > 5;
    })
    console.log(res)
}

displayFunction(input);


// 6.Map
//     - Question: Write a function that takes an array of strings as input and returns a new array with all strings converted to uppercase and "!" appended.
//     - Hints: Use the map() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abc"]
//     - Output Test Cases: ["HELLO!", "WORLD!", "ABC!"], ["XYZ!", "ABC!"]
let input= +prompt("how many element do you want to store:");
let arr = [];
function displayFunction(a){
    for(num=1;num<=a;num++){
        arr.push(prompt("enter an element : "));
    }
    let res = arr.map((ele)=>{
        return ele.toUpperCase()+"!";
    })
    console.log(res)
}

displayFunction(input);

// 7.Find
//     - Question: Write a function that takes an array of strings as input and returns the first string containing "o".
//     - Hints: Use the find() method.
//     - Input Test Cases: ["hello", "world", "abc", "defghi"], ["xyz", "foo", "bar"]
//     - Output Test Cases: "world", "foo"

let input= +prompt("how many element do you want to store:");
let arr = [];
function displayFunction(a){
    for(num=1;num<=a;num++){
        arr.push(prompt("enter an element : "));
    }
    let res = arr.find((ele)=>{
        ele = ele.includes("o")
        return ele
    })
    console.log(res)
}

displayFunction(input);


// Join
//     - Question: Write a function that takes an array of strings as input and returns a new string with all strings joined by commas.
//     - Hints: Use the join() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abc"]
//     - Output Test Cases: "hello,world,abc", "xyz,abc"
let input= +prompt("how many element do you want to store:");
let arr = [];
function displayFunction(a){
    for(num=1;num<=a;num++){
        arr.push(prompt("enter an element : "));
    }
    let res = arr.join("");
    console.log(res)
}

displayFunction(input);
