var calc = {
    Add: function (a,b) { 
        c=a+b;
        console.log('Add two numbers: ' + c);
    },
    Sub:function (a,b) { 
        c=a-b;
        console.log('Sub two numbers: ' + c);
    },
    Mult:function (a,b) { 
        c=a*b;
        console.log('Multiplication of two numbers: ' + a*b);
    },
    Div:function (a,b) { 
        c=a/b;
        console.log('Division of two numbers: ' + a/b);
    }
};

module.exports = calc