document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById("expense-form");
    const expenseNameInput = document.getElementById("expense-name");
    const expenseAmountInput = document.getElementById("expense-amount");
    const expenseList = document.getElementById("expense-list");
    const totalAmountSpan = document.getElementById("total-amount");

    let expenses = [];

    function addExpense(name, amount) {
        const expense = { id: Date.now(), name, amount: parseFloat(amount) };
        expenses.push(expense);
        console.log("Expense added:", expense);
        renderExpenses();
        updateTotalAmount();
    }

    function editExpense(id, newName, newAmount) {
        const expense = expenses.find(exp => exp.id === id);
        if (expense) {
            expense.name = newName;
            expense.amount = parseFloat(newAmount);
            console.log("Expense edited:", expense);
            renderExpenses();
            updateTotalAmount();
        }
    }

    function deleteExpense(id) {
        expenses = expenses.filter(exp => exp.id !== id);
        console.log("Expense deleted with id:", id);
        renderExpenses();
        updateTotalAmount();
    }

    function renderExpenses() {
        expenseList.innerHTML = '';
        expenses.forEach(exp => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${exp.name}: $${exp.amount.toFixed(2)}
                <div>
                    <button class="edit" data-id="${exp.id}">Edit</button>
                    <button class="delete" data-id="${exp.id}">Delete</button>
                </div>
            `;
            expenseList.appendChild(li);
        });
    }

    function updateTotalAmount() {
        const totalAmount = expenses.reduce((total, exp) => total + exp.amount, 0);
        totalAmountSpan.textContent = totalAmount.toFixed(2);
        console.log("Total amount updated:", totalAmount);
    }

    expenseForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = expenseNameInput.value;
        const amount = parseFloat(expenseAmountInput.value);
        if (name && !isNaN(amount)) {
            addExpense(name, amount);
            expenseNameInput.value = '';
            expenseAmountInput.value = '';
        } else {
            console.log("Invalid input: ", name, amount);
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
