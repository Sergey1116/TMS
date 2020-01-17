// task_1
let str = "Hello world!";
alert(str);
str = "Привет мир!"
console.log(str);

// task_2
let strng = "hello";
let numb = 16;
let bool = true;
let udef;
let _null = null;
let obj = { name: "Tom" };

function console_alert(x){
    let temp = `${typeof(x)}:  ${x}`;
    console.log(temp);
    alert(temp);
}

console_alert(strng);
console_alert(numb);
console_alert(bool);
console_alert(udef);
console_alert(_null);
console_alert(obj);

// task_3
var age = 0;
do{
    age = Number(prompt("Сколько вам лет?", ''));
}while(!Number.isInteger(age) || (age <= 0))

checkAge(age);

function checkAge(age) { 
    if (age > 18) { 
      return alert(`Поздравляем, вам ${age} полных лет. Вы совершеннолетний пользователь!`); 
    }
    else{
      return alert(`Поздравляем, вам ${age} полных лет. Вы несовершеннолетний пользователь!`); 
    } 
  }