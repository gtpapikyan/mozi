//Caesar Cipher
//UTF
//[a-z] 97-122
//[A-Z] 65-90
const alphabet = "! abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

function CaesarEncode( msg, k = 1){
    let res = ''
    for(let char of msg){
        let code = alphabet.indexOf(char)
        res += alphabet[ (code+k)%alphabet.length ]
    }
    return res
}

function CaesarDecode( msg, k = 1){
    let res = ''
    for(let char of msg){
        let code = [...alphabet].reverse().indexOf(char)
        res += [...alphabet].reverse()[ (code+k)%alphabet.length ]
    }
    return res
}

//Atbash Cipher
function AtbashEncodeDecode( msg ){
    let res = ''
    for(let char of msg){
        let code = alphabet.indexOf(char)
        res += [...alphabet].reverse()[ code ]
    }
    return res
}

const k = 55
const text = 'Hey There!'
console.log(`
Caesar Cipher:
text=${text}
k=${k}
encoded=${CaesarEncode( text, k )}
decoded=${ CaesarDecode( CaesarEncode( text, k ), k)}

Atbash Cipher:
text=${text}
encoded=${AtbashEncodeDecode( text )}
decoded=${ AtbashEncodeDecode( AtbashEncodeDecode( text ))}

`)