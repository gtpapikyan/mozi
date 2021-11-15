---
## Front matter
lang: ru-RU
title: Шифры Цезаря и Атбаш
author: |
	Gagik T. Papikyan

institute: |
	RUDN University, Moscow, Russian Federation


## Formatting
toc: false
slide_level: 2
# theme: metropolis
header-includes: 
#  - \metroset{progressbar=frametitle,sectionpage=progressbar,numbering=fraction}
 - '\makeatletter'
 - '\beamer@ignorenonframefalse'
 - '\makeatother'
aspectratio: 43
section-titles: true
---

# Теоретические сведения

## Шифр Цезаря

- Примитивный алгоритм шифрования.

- Отсутствие практического применения.

- Смещение каждого символа входящего сообщения на К шагов в рассматриваемомо алфавите.

Пример:    
Алфавит: а, б, в, г, д    
Входящее сообщение: "авд"    
K: 1    
Зашифрованное: "бга"    

## Шифр Атбаш

- Примитивный алгоритм шифрования.

- Отсутствие практического применения.

- 'Симметричное отражение' символа входящего сообщения относительно центра рассматриваемого алфавита.

Пример:     
Алфавит: а, б, в, г, д    
Входящее сообщение: "ав"    
Зашифрованное: "дв"    

## Пример реализации Шифра Цезаря

``` {.js filename="../index.js"}

const alphabet = `! abcdefghijklmnopqrstuvwxyzABCDEFG    
HIJKLMNOPQRSTUVWXYZ`

function CaesarEncode( msg, k = 1){
    let res = ''
    for(let char of msg){
        let code = alphabet.indexOf(char)
        res += alphabet[ (code+k)%alphabet.length ]
    }
    return res
}

```



<!-- ## {.standout} -->

<!-- Wer's nicht glaubt, bezahlt einen Taler -->
