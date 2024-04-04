const array=[1,2,3,4,5];

for(let i=0;i< array.length; i++){
    console.log(array[i]);
}

let count=0;

while(count<5){
    console.log("count is:" + count);
    count++;
}
let num=0;
do{
    console.log("hemakant" + num);
    num++;
}while(num<5);

console.log(sayName);

function sayName(name){     //function declartion
    console.log(name);
}

sayName("Hemakant");

//Arrow function

console.log(sayName);

const sayName= (name) => {
    console.log(name);
}
sayName("Hemakant");     //function invocation / function call


//Ternery Operator

const age=22;
if(age>18){
    console.log("i am an adult");
}else{
    console.log("i am under 18");
}

age>18 ? console.log("i am an adult") : console.log("i am under 18");



//Nullish Colescing Operator (??):null undefined

let num1;
num1=5 ?? 10
num1=null ?? 10
num1=undefined ?? 15
num1= null ?? undefined ?? 20
 console.log(num1);


//Operational chaining

const adventurer={
    name: 'Hemakant',
    cat: {
        name: 'jagu',
    },
};

const dogName= adventurer.dog?.name;
console.log(dogName);