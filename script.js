var budget = +prompt("Ваш бюджет на месяц?", 0);

var userDate = prompt("Введите дату в формате YYYY-MM-DD", '');

var appData = {};

appData.budget = budget;
appData.userDate = userDate;
appData.expenses = {};
appData.optionalExpenses = {};
appData.income = [];
appData.savings = false;

var expensesSum = 0;

for (var i=0; i<=1; i++){
    var key = prompt("Введите обязательную статью расходов в этом месяце", '');
    var value = +prompt("Во сколько обойдется?", 0);
    
    appData.expenses[key] = value;
    
    expensesSum += value;
};


alert("бюджет на 1 день = "+(appData.budget-expensesSum)/30);
