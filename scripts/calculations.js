let budgetValue = 0;
let totalExpensesValue = 0;

let expenseEntries = [
    ["groceries", 33],
    ["restaurants", 50],
    ["transport", 12],
    ["home", 70],
    ["subscriptions", 14],
    ["groceries", 28],
    ["subscriptions", 12]
];

for (let expense of expenseEntries) {
    totalExpensesValue += expense[1];
    console.log("Valor total de los gastos: " + totalExpensesValue);
}

function calculateAverageExpense() {
    if (expenseEntries.length === 0) {
        return 0;
    }
    return totalExpensesValue / expenseEntries.length;
}

let averageExpense = calculateAverageExpense();
console.log("Gasto promedio: " + averageExpense);

function calculateBalance() {
    return budgetValue - totalExpensesValue;
}

let balance = calculateBalance();
console.log("Saldo disponible: " + balance);

let balanceColor = "green";

function updateBalanceColor() {
    let balance = calculateBalance();
    
    if (balance < 0) {
        balanceColor = "red";
    } else if (balance < (budgetValue * 0.25)) {
        balanceColor = "orange";
    } else {
        balanceColor = "green";
    }
}

function calculateCategoryExpenses(categoryName) {
    let categoryTotal = 0;

    for (let expense of expenseEntries) {
        if (expense[0] === categoryName) {
            categoryTotal += expense[1];
        }
    }

    return categoryTotal;
}


console.log("Total en Groceries: " + calculateCategoryExpenses("groceries"));
console.log("Total en Subscriptions: " + calculateCategoryExpenses("subscriptions"));


function calculateLargestCategory() {

    let categories = ["groceries", "restaurants", "transport", "home", "subscriptions"];
    let categoriesData = [];

    
    for (let category of categories) {
        let total = calculateCategoryExpenses(category);
        categoriesData.push([category, total]);
    }

    
    let largestAmount = 0;
    let largestName = "";

    for (let data of categoriesData) {
        let categoryName = data[0];
        let categoryTotal = data[1];

        if (categoryTotal > largestAmount) {
            largestAmount = categoryTotal;
            largestName = categoryName;
        }
    }

    return largestName;
}


console.log("La categoría con más gastos es: " + calculateLargestCategory());

function addExpenseEntry(newEntry) {
    
    expenseEntries.push(newEntry);

    totalExpensesValue += newEntry[1];
}


addExpenseEntry(["groceries", 45]);
console.log("Nuevo total de gastos: " + totalExpensesValue);