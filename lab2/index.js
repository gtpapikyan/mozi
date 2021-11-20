function pathCipher (msg, key = 'password'){
    const n = key.length
    const m = Math.ceil(msg.length / n)
    const completedMsg = msg + 'a'.repeat( m*n - msg.length )

    const sortedKey = key.split('').map((char,idx)=>[char,idx]).sort((a,b)=>a[0] > b[0])
    const getCol = (idx) => {
        let res = ''
        for(let i = 0;i<m;i++){
            res+=completedMsg[idx + i*n ]
        }
        return res
    }

    let res = ''
    for(let [_, idx] of sortedKey){
        res+=getCol(idx)
    }
    return res
}

console.log(pathCipher('нельзянедооцениватьпротивника', 'пароль')) //еенпнзоатаьовокннеьвлдирияцтиa
