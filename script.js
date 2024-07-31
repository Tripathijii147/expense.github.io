document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById("expense-form");
    const expenseNameInput = document.getElementById("expense-name");
    const expenseAmountInput = document.getElementById("expense-amount");
    const expenseList = document.getElementById("expense-list");

    let expenses = [];

    function addExpense(name, amount) {
        const expense = { id: Date.now(), name, amount };
        expenses.push(expense);
        renderExpenses();
    }

    function editExpense(id, newName, newAmount) {
        const expense = expenses.find(exp => exp.id === id);
        if (expense) {
            expense.name = newName;
            expense.amount = newAmount;
            renderExpenses();
        }
    }

    function deleteExpense(id) {
        expenses = expenses.filter(exp => exp.id !== id);
        renderExpenses();
    }

    function renderExpenses() {
        expenseList.innerHTML = '';
        expenses.forEach(exp => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${exp.name}: $${exp.amount}
                <div>
                    <button class="edit" data-id="${exp.id}">Edit</button>
                    <button class="delete" data-id="${exp.id}">Delete</button>
                </div>
            `;
            expenseList.appendChild(li);
        });
    }

    expenseForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = expenseNameInput.value;
        const amount = parseFloat(expenseAmountInput.value);
        if (name && !isNaN(amount)) {
            addExpense(name, amount);
            expenseNameInput.value = '';
            expenseAmountInput.value = '';
        }
    });

    expenseList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            const id = parseInt(e.target.dataset.id, 10);
            deleteExpense(id);
        } else if (e.target.classList.contains("edit")) {
            const id = parseInt(e.target.dataset.id, 10);
            const expense = expenses.find(exp => exp.id === id);
            if (expense) {
                const newName = prompt("Edit expense name", expense.name);
                const newAmount = parseFloat(prompt("Edit expense amount", expense.amount));
                if (newName && !isNaN(newAmount)) {
                    editExpense(id, newName, newAmount);
                }
            }
        }
    });
});
