console.log("hello");

var person1 = {firstName: 'Scott', lastName: 'lee'}
var person2 = {firstName: 'Adam', lastName: 'Watson'}
var person3 = {firstName: 'Stuart', lastName: 'Clarke'}

function getMessage(message,city)
{
    return message + ' ' +
     city + ' ' + 
     this.firstName + ' '+ 
     this.lastName
}

// bind function 

var sayhellousingbind  = getMessage.bind(person1)
console.log(sayhellousingbind('Good Morning', 'Mumbai'))

var a = getMessage.bind(person2)('Good Morning','Pune')
console.log(a)

// call fucntion

var sayhellousingcall  = getMessage.call(person2, 'Good Morning','Chennai')
console.log(sayhellousingcall);

//apply function

var sayhellousingapply  = getMessage.apply(person3, ['Good Morning','Delhi'])
console.log(sayhellousingapply)

var a,b,c

//not related to bind and call

function sum(a,b,c)
{
    return a+b+c
}

console.log(sum(12,3,5,7))   //ignoring the third argument.