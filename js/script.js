//Получение элементов

let startCalc = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

expensesItem.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;


startCalc.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", 0);
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesItem.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
});

expensesBtn.addEventListener('click', function () {
  
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let key = expensesItem[i].value;
        let value = expensesItem[++i].value;

        if ((typeof (key)) === 'string' && key.length < 50 &&
            (typeof (key)) != null && (typeof (value)) != null && key != '' && value != '') {
            console.log("done");
            appData.expenses[key] = value;
            sum += +value;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let expense = optionalExpensesItem[i].value;
        if (typeof (expense) == "string" && expense != '') {
            appData.optionalExpenses[i] = expense;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        } else {
            i--;
        }
    }
});

countBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.budgetPerDay = ((appData.budget - expensesValue.textContent)/ 30).toFixed();
        daybudgetValue.textContent = appData.budgetPerDay;

        if (appData.budgetPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.budgetPerDay > 100 && appData.budgetPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.budgetPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        daybudgetValue.textContent = "Произошла ошибка";
    }
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
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