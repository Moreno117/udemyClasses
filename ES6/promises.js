import $ from 'jquery'

function displayAtRandomTime() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(Math.random() > .5){
                resolve('Yes!');
            } else {
                reject('No!');
            }
        }, 1000);
    });
}

// displayAtRandomTime()
// .then(function(value){
//     console.log(value)
// })
// .catch(function(value){
//     console.log(value)
// })

function getMostFollowers(...users) {
    const url = "https://api.github.com/users/"
    const promises = users.map(user => $.getJSON(`${url}${user}`))        
    return Promise.all(promises)
        .then(data => {
            let max = data.sort((a,b) => a.followers < b.followers)[0];
            return `{max.name} has the most followers with ${max.followers}`
        })
}

console.log(getMostFollowers('elie', 'tigarcia', 'colt'))
