const player = {
    name: 'Virat Kohli' ,
    team : 'India' ,
    address : {
        city : 'Bombay'
    }
} ;

console.log(player.name)

const {name , address:{city}} = player

console.log(`${name} lives in ${city}`);
