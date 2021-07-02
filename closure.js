function greet(message)
{
    return function wish()
    {
        return function welcome()
        {
            return 1
        }
    }
}

var hello = greet("hi")
var welcomfunc = hello()
var welcome = welcomfunc()
console.log(welcome)

var final = greet('Hi')()()
console.log(final)


//closure

function msg(message)
{
    return  function(fname)
    {
        return message + ' ' + fname
    }
}

var a = msg('hi')
console.log(a)

var b = a('rohan')
console.log(b)
