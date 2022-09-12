class HashTable {
    constructor(size=53) {
        this.keymap = new Array(size);
    }
    _hashKey(key) {
        let total = 0;
        let wierd_prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * wierd_prime) % this.keymap.length ;
        }
        return total;
    }
    set(key,value) {
        let index = this._hashKey(key) ;
        if(!this.keymap[index]) {
            this.keymap[index] = [] ;
        }
        this.keymap[index].push([key,value]);
    }
    get(key) {
        let index = this._hashKey(key) ;
        if(this.keymap[index]) {
            for(let i = 0 ; i < this.keymap[index].length ; i++ ) {
                if(this.keymap[index][i][0] === key) {
                    return this.keymap[index][i][1] ;
                }
            }
        }
        return undefined ;
    }
}


let ht = new HashTable(17) ;
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
