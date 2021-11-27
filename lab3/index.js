
const alphabet = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM !'
const reversedAlphabet = alphabet.split('').reverse().join('')

function gammaCipher(msg, gamma, decode = false){
    const swappedAlphabet = decode ?  reversedAlphabet : alphabet
    const fullGamma = gamma.repeat(Math.ceil(msg.length / gamma.length))

    const msgCodes = msg.split('').map( char=> swappedAlphabet.indexOf(char) )
    const fullGammaCodes = fullGamma.split('').map( char=>alphabet.indexOf(char) )

    const resCodes = msgCodes.map((msgCode, idx) => (msgCode+fullGammaCodes[idx])%alphabet.length)
    const res = resCodes.map( code=>swappedAlphabet[code] ).join('')

    return res
}

const key = 'pass'
const msg = 'hello there!'
const encoded = gammaCipher(msg, key) 
const decoded = gammaCipher(encoded, key, true)

console.log( `
key = ${key}, msg = ${msg}, 
encoded = ${encoded}
decoded = ${decoded}
` )