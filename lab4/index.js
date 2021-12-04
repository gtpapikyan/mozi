// Алгоритм Евклида 
const A = 106, B = 16
console.log(`A=${A} B=${B}`)
let a = A, b = B
let rem
while(rem != 0){
    rem = a%b 
    a = b 
    b = rem
}
console.log(`d=${a}`)

// Бинарный Алгоритм Евклида 
let g = 1
a = A, b = B
while(!a%2 && !b%2){
    a /= 2
    b /= 2
    g *= 2
}
let u = a, v = b 
while(u){
    if(!u%2){
        u/=2
    }
    if(!v%2){
        v/=2
    }
    if(u>=v){
        u -= v
    }else{
        v -= u
    }
}
console.log(`d=${g*v}`)

// Расширенный Бинарный Алгоритм Евклида 
g = 1
a = A, b = B
while(!a%2 && !b%2){
    a /= 2
    b /= 2
    g *= 2
}
u = a, v = b 
let a_ = 1, b_ = 0,c_ = 0, d_= 1
while(u){
    if(!u%2){
        u/=2
        if(!a_%2 && !b_%2){
            a_ /= 2
            b_ /= 2
        }else{
            a_ = (a_+b) / 2
            b_ = (b_-a) / 2
        }
    }
    if(!v%2){
        v/=2
        if(!c_%2 && !d_%2){
            c_ /= 2
            d_ /= 2
        }else{
            c_ = (c_+b) / 2
            d_ = (d_-a) / 2
        }
    }
    if(u>=v){
        u -= v
        a_ -= c_
        b_ -= d_
    }else{
        v -= u
        c_ -= a_
        d_ -= b_
    }
}
console.log(`d=${g*v} x=${c_} y=${d_}
преверка(ax + by = d): ${A*c_}+${B*d_} = ${g*v} 
`)
