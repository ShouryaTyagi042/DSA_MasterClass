const player = {
    name: 'Virat Kohli' ,
    team : 'India' ,
    address : {
        city : 'Bombay'
    }
} ;

const [firstName,MiddleName,LastName] = [shourya,null,tyagi]
console.log(firstName)
console.log(player.name)

const {name , address:{city}} = player

console.log(`${name} lives in ${city}`);
