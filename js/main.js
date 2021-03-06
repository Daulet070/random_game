'use strict';
/* 
— спрашивает пользователя: "Угадай число от 1 до 100".
— если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
— если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
— если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
— если пользователь нажимает "Отмена", то игра заканчивается.

Программа выполнена с помощью рекурсии, без циклов.
Загаданное число храниться «в замыкании»
*/

function random() {                                             // Функция задает рандомное число
  return Math.ceil(Math.randomm() * 100);                       /* операция возвращает псевдослучайное число 
                                                                   в диапазоне от 0 до 100 округленное в большую сторону*/
}
function isNumder(n) {                                          // Выполняет проверку на число
  return (!isNaN(parseFloat(n)) && isFinite(n));
}
function game(question) {                                       // Основная функция исполнения игры
  
  let randomNumber = random();                                  // получаем рандомное число в переменную
  let start = confirm('Загадано число от 1 до 100 разгадаем?'); // заключаем в переменную действия пользователя (кнопка да/нет)

  start === true ? gameStartFunc() : alert('Пока!');            // в зависимости от полученного ответа продолжаем исполнение или прерываем

  function gameStartFunc() {                                    /* функция запускает операции сравнения и соответствия 
                                                                   условиям полученных от пользователя данных */
    let innerNumber = prompt('Введите число');                  // получаем введенное число от пользователя

    if(isNumder(innerNumber)) {                                 // если введенная строка является числом то
      innerNumber = +innerNumber;                               // преобразуем тип данных строка в тип данных число
      if(innerNumber > randomNumber) {                          // если полученное число больше рандомного числа то
        alert('Число меньше');                                  // выводим на экран 'Число меньше'
        gameStartFunc();                                        // и запускаем функцию gameStartFunc() заново
        return;                                                 // прерывая исполнение программы тут
      } else if(innerNumber < randomNumber) {                   // если полученное число меньше рандомного числа то
        alert('Число больше');                                  // выводим на экран 'Число больше'
        gameStartFunc();                                        // и запускаем функцию gameStartFunc() заново
        return;                                                 // прерывая исполнение программы тут
      } else {                                                  // иначе 
        alert('Угадал!');                                       // выводим на экран 'Угадал!'
        return;                                                 // прерывая исполнение программы тут
      } 
    } else {                                                    // иначе если введенная строка не является числом то
        alert('Можно вводить только числа');                    // выводим на экран 'Можно вводить только числа'
        gameStartFunc();                                        // и запускаем функцию gameStartFunc() заново
        return;                                                 // прерывая исполнение программы тут
      }
  }
}
game();                                                         // вызов основной функции исполнения "игры"