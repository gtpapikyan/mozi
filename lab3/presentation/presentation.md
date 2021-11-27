---
## Front matter
lang: ru-RU
title: Шифрование Гаммированием
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

# Шифрование Гаммированием

## Простой способ гаммирования

- Обратимость

- Ключ равный сообщению по длине

![](pic1.png){ #fig:01 width=100% }
  

## Шифрование конечной гаммой

- Отсутствие обратимости

- Короткий ключ

![](pic2.png){ #fig:002 width=100% }

   

## Связь с шифром Цезаря

- Шифрование конечной гаммой использует идею шифра Цезаря

![](pic2.png){ #fig:003 width=100% }

## Реализация шифрования конечной гаммой

![](pic3.png){ #fig:004 width=110% }


<!-- ## {.standout} -->

<!-- Wer's nicht glaubt, bezahlt einen Taler -->
