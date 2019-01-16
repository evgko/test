let money, time;

function start() {
    while (isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", 0);
    }
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
}
start();

let appData = {
    budget : money,
    timeData : time,
    expenses :{},
    optionalExpenses : {},
    income : [],
    savings : true,
    chooseExpenses: function(){
        for (let i=0; i < 2; i++){
            let key = prompt("Введите обязательную статью расходов в этом месяце", '');
            let value = +prompt("Во сколько обойдется?", 0);   
            
            if((typeof(key)) === 'string' && key.length < 50 
            && (typeof(key)) != null && (typeof(value)) != null && key != '' && value != ''){
                console.log("done");
                appData.expenses[key] = value;
            } else {
                i--;
            }
        }
    },
    chooseOptExpenses: function(){
        for (let i = 1; i < 4; i++) {
            let expense = prompt("Статья необязательных расходов?", '');
            if (typeof(expense) == "string" && expense != '') {
                appData.optionalExpenses[i] = expense;
            } else {
                i--;
            }
        } 
    },
    detectDayBudget: function(){
        appData.budgetPerDay = (appData.budget/30).toFixed();

        alert("Ежедневный бюджет = "+appData.budgetPerDay);
    },
    checkSaving: function(){
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", 0);
            let percent = +prompt("Под какой процент?", 0);
    
            appData.monthIncome = (save/100/12*percent).toFixed();
            alert("Доход в месяц с вашего депозита = " + appData.monthIncome);
        }
    },
    chooseIncome: function() {
       for (let i = 0; i < 1; i++){

        let items = prompt("Что принесет дополнителный доход? (Перечислите через запятую)", '');

        if (typeof(items) == 'string' && items != '' && items != null){
        appData.income = items.split(', ');      
        appData.income.push(prompt("Может что-то еще?", ''));
        appData.income.sort();
        } else {
            i--;
        }
    }
    appData.income.forEach(function(item, i, arr){
        alert("Способы доп. заработка: "+(i+1)+" - "+item);
    });
    },
    listingProperties: function(){
        for(let key in appData){
            console.log("Наша программа включает в себя данные: "+key);
        }
    }
};



// Другая реализация цикла

// let i = 0;
// while (i < 2){
//     let key = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let value = +prompt("Во сколько обойдется?", 0);   



// let i = 0;
// do {let key = prompt("Введите обязательную статью расходов в этом месяце", '');
// let value = +prompt("Во сколько обойдется?", 0);   


// if((typeof(key)) === 'string' && key.length < 50 
// && (typeof(key)) != null && (typeof(value)) != null && key != '' && value != ''){
//     console.log("done");
//     appData.expenses[key] = value;
//     i++;
// } else {
//     if (i <= 0) continue;
//     i--;
// }} while (i < 2);



// function detectLevel() {
//     if (appData.budgetPerDay < 100){
//         console.log("Минимальный уровень достатка");
//     } else if (appData.budgetPerDay > 100 && appData.budgetPerDay < 2000) {
//         console.log("Средний уровень достатка");
//     } else if (appData.budgetPerDay > 2000) {
//         console.log("Высокий уровень достатка");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectLevel();

//  console.log(appData);

