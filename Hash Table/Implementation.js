class hashTable {

    constructor(size = 7) {
        this.dataMap = new Array(size)
    }


    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % key.length // 23 used for most random numbers , will provide 0 to 6 any reminder number
        }
        return hash
    }



    set(key, value) {
        let index = this._hash(key)

        if (!this.dataMap[index]) {
            this.dataMap[index] = [] // if data not found then that index will be an array
        }

        this.dataMap[index].push([key, value])

        return this
    }



    get(key) {
        let index = this._hash(key)
        if (this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) { // this particular index is an array
                if (this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1]
                }
            }
        }
        return undefined
    }


    getKeys() {

        let allKeys = [];

        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0])
                }
            }
        }
     
        if(allKeys.length < 1){
            return []
        }

        return allKeys

    }

}


function Test(Message, Data) {
    console.log(Message, Data);
}

const myHashTable = new hashTable()

myHashTable.set('bolts', 100)
myHashTable.set('washers', 100)
myHashTable.set('pipe', 50)
myHashTable.set('tyre', 500)

Test('Value' , myHashTable.get('tyre'))

Test('All keys' , myHashTable.getKeys())
