function multiply(a,b,c,d) {
    return this.name + " has multiply " + (a*b*c*d);
}

var lex = { name: 'Lex' } 
var annia = { name: 'Annia' }


var pep = {
    firstName: "Pep Guardiola",
    sayHi: function () {
        setTimeout(function () {
            console.log("Hi " + this.firstName);
        }.bind(this), 2000)
    },
    sayBye: function () {
        console.log("Bye " + this.firstName);
    },
    context: function () {
        return this;
    },
    idThis: this
}