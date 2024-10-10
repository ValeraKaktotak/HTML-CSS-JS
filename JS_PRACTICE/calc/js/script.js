
// ф-ция ввода значений и операций в блок табло с помощью кнопок
var buttonNumbers = document.querySelectorAll('.calc table tr td button');
function numberAction (event){

    var currentItem = event.currentTarget;
    var value = currentItem.innerHTML;
    var data = document.querySelectorAll('.table .result');
    if(data[0].innerHTML === '0' && value === '.'){
        data[0].innerHTML += value;
    }
    else if(data[0].innerHTML === '0'){
        data[0].innerHTML = value;
    }
    else{
        data[0].innerHTML += value;
    }
}
buttonNumbers.forEach(element => element.addEventListener('click', numberAction))

// buttonNumbers.forEach(function(element) {
//     element.addEventListener('click', numberAction)
// });

// ф-ция очистки данных в табло
var clearButton = document.getElementById('clear')
function clearAction(){
    var data = document.querySelectorAll('.table .result');
    data[0].innerHTML = '0';
}
clearButton.addEventListener('click', clearAction);

//функция подсчета выражения с табло (=)
var score = document.getElementById('score');
score.addEventListener('click', result)
function result(){
    var stringResult = document.querySelectorAll('.table .result');
    var result = eval(stringResult[0].innerHTML);
    stringResult[0].innerHTML = result;
    // finalResult[0].innerHTML = result;
}


