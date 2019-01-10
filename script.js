var money = +prompt("Ваш бюджет на месяц?", 0);
var time = prompt("Введите дату в формате YYYY-MM-DD", '');

var appData = {};

appData.budget = money;
appData.timeData = time;
appData.expenses = {};
appData.optionalExpenses = {};
appData.income = [];
appData.savings = false;

for (var i=0; i < 2; i++){
    var key = prompt("Введите обязательную статью расходов в этом месяце", '');
    var value = +prompt("Во сколько обойдется?", 0);   
    
    if((typeof(key)) === 'string' && key.length < 50 
    && (typeof(key)) != null && (typeof(value)) != null && key != '' && value != ''){
        console.log("done");
        appData.expenses[key] = value;
    } else {
        i--;
    }
};

// Другая реализация цикла
// var i = 0;
// while (i < 2){
//     var key = prompt("Введите обязательную статью расходов в этом месяце", '');
//     var value = +prompt("Во сколько обойдется?", 0);   
    
//     if((typeof(key)) === 'string' && key.length < 50 
//     && (typeof(key)) != null && (typeof(value)) != null && key != '' && value != ''){
//         console.log("done");
//         appData.expenses[key] = value;
//         i++;
//     } else {
//         if (i <= 0) continue;
//         i--;
//     }
// }
// Другая реализация цикла
// var i = 0;
// do {var key = prompt("Введите обязательную статью расходов в этом месяце", '');
// var value = +prompt("Во сколько обойдется?", 0);   

// if((typeof(key)) === 'string' && key.length < 50 
// && (typeof(key)) != null && (typeof(value)) != null && key != '' && value != ''){
//     console.log("done");
//     appData.expenses[key] = value;
//     i++;
// } else {
//     if (i <= 0) continue;
//     i--;
// }} while (i < 2);

appData.budgetPerDay = appData.budget/30;

alert("бюджет на 1 день = "+appData.budgetPerDay);

if (appData.budgetPerDay < 100){
    console.log("Минимальный уровень достатка");
} else if (appData.budgetPerDay > 100 && appData.budgetPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.budgetPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

console.log(appData);
