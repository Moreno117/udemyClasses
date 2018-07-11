function swap(a,b) {
    return [a,b] = [b,a];
}
// console.log(swap(1,5))

function sum(...number) {
    if(arguments.length < 2){        
        return function(b){
            return number[0] + b
        }
    } else {
        return number[0] + number[1]
    }
}
// console.log( sum(1,3) )
// console.log( sum(1)(3) )

function createStudent({ likesES2015=true, likesJavaScript=true } = {}) {
    if (likesES2015 && likesJavaScript) return 'The student likes JavaScript and ES2015';
    if (!likesES2015) return 'The student likes JavaScript!';
    if (!likesJavaScript) return 'The student likesES2015!';
    if (!likesES2015 && !likesJavaScript) return 'The student does not like much...';
}
// console.log(createStudent({likesJavaScript:false}))