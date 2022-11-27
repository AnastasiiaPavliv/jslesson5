//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
/*function s (a,b){
    return a*b;
}
let x=s(10,10);
console.log(x);*/

//- створити функцію яка обчислює та повертає площу кола з радіусом r
/*function s(r) {
    const p=3.14;
    return 2*p*r;
}
let x=s(2)
console.log(x)*/

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
/*function s(h,r){
    const p=3.14;
    return 2*p*r*(h+r);
}
let x=s(1,1);
console.log(x)*/

//- створити функцію яка приймає масив та виводить кожен його елемент
/*function  x(arr) {
    for (const item of arr) {
        console.log(item);
    }
}
x([1, 5, 7]);*/

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
/*function tx(text) {
    document.write(`<p>${text}</p>`)
}
tx('hi')*/
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
/* l(text){
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)
}
l(`hello`)*/
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
/*function l(text, num){
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
document.write(`<li>${text}</li>`)
        
    }
    document.write(`</ul>`)
}
l(`hello`, 10)*/
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
/*let arr = [1,2,true,false,`hi`];
const elem = function (arr){
    document.write(`<ul>`)
    for (const item of arr ) {
    document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
elem(arr);*/

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
/*const arr =[
    {
        name: 'Nastia',
        age: 19,
        id: true
    },
    {name:'Nastia',
        age: 19,
        id: true}
    ]
    const users=function (arr){
        for (const user of arr) {
         document.write(`<div>${user.name} ${user.age} ${user.id}</div>`)
        }
    }
users(arr);*/

//- створити функцію яка повертає найменьше число з масиву
/*let arr=[1, 2, 3, 4, 15, -6];
function x(array){
    let min=array[0]
    for (const item of array) {
if (item < min){
    min=item;
}
    }
    return min;
}
let x1=x(arr);
console.log(x1);*/
// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
/*let arr=[5, 5, 5];
function x(array){
    let sum = 0;
    for (const item of array) {
      sum+=item;
    }
    return sum;
}
console.log(x(arr));*/