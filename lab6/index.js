function fermaTest(n){
    // if(n<2) return false
    // if(n in [2,3]) return true
    for(let i =0;i<200;i++){
        const a = Math.random() * (n-4) + 2
        const r = Math.pow(a, n-1) % n
        if(r === 1) return true
    }
    return false    
}

// let result = ''
// for(let i = 5;i<25;i++){
//     result += `${i}(${fermaTest(i)}), `
// }
// console.log(result)

function jacobi(n, k){
    //   assert(k > 0 && k % 2 === 1)
      n = n % k
      let t = 1
      while (n !== 0) {
        while (!n%2){
          n = n / 2
          let r = k % 8
          if(r === 3 || r === 5) t = -t
        }
        [n, k] = [k, n]
        if (n % 4 === 3 && k % 4 === 3) t = -t
        n = n % k
      }
    
      if ( k === 1) 
        return t
      else
        return 0 
}

function solovoyStrassen(p, iteration = 200) {
    for(let i = 0; i<iteration; i++){
        let r = Math.floor(Math.random()*2 );   

        const a = r % (p - 1) + 1
        let j = (p + jacobi(a, p)) % p
        let mod =  Math.pow(a, Math.floor((p-1)/2)) % p

        if(j === 0 || mod != j) return false

    }
    return true
}


// let result = ''
// for(let i = 5;i<25;i++){
//     result += `${i}(${solovoyStrassen(i)}), `
// }
// console.log(result)


function millerRibben(n, k=100) {
    if (n % 2 === 0) return false

	var s = 0, d = n - 1;
	while (d % 2 === 0) {
		d /= 2;
		++s;
	}
 
	WitnessLoop: do {
		//A base between 2 and n - 2
        // let x = Math.random() * (n-4) + 2
        var x = Math.pow(2 + Math.floor(Math.random() * (n - 3)), d) % n;

		if (x === 1 || x === n - 1)
			continue;
 
		for (var i = s - 1; i--;) {
			x = x * x % n;
			if (x === 1)
				return false ;
			if (x === n - 1)
				continue WitnessLoop;
		}
 
		return false ;
	} while (--k);
 
	return true ;
}


let result = ''
for(let i = 5;i<25;i++){
    result += `${i}(${millerRibben(i)}), `
}
console.log(result)

