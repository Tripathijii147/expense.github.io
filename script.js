let expenses = [];
let totalamount = 0;

const catagorySelect = document.getElementById('catagory-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click',function() {
    const catagory = catagorySelect.value;
    const amount = Number(amountInput.value);
    const date = dataInput.value;

    if(catagory ===""){
        alert ('Please select a catagory');
        return;
    }
    if(isNaN(amount)|| amount <=0){
        alert('Please enter a valid amount')
        return;
    }
        if(date ===""){
            alert ('Please select a date')
            return;
        }
        expenses.push({catagory,amount,date});

        totalamount += amount;
        totalAmountCell.textContent = toatlAmount;

        const newRow = expensesTableBody.insertRow();

        const catagoryCell = newRow.insertCell();
        const amountCell = newRow.insertCell();
        const dateCell = newRow.insertCell();
        const deleteCell = newRow.insertCell();
        const deleteBtn = document.createElement('button');

        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click',function(){
            expenses.splice(expenses.indexOf(expense),1);

            totalAmount -= expense.amount;
            totalAmountCell.textContent = totalamount;

            expensesTableBody.removeChild(newrow);
        });

        const expense = expense[expense.lenth-1];
        catagoryCell.textContent = expense.catagory;
        amountCell.textContent = expense.amount;
        dataCell.textContent = expense.data;
        deleteCell.appendChild(deleteBtn);

    });

    for(const expense of expenses){
        totalAmount += expense.amount;
        totalAmount.textContent = totalAmount;

        const newRow = expensesTableBody.insertRow();
        const catagoryCell = newRow.insertCell();
        const amountCell = newRow.insertCell();
        const dateCell = newRow.insertCell();
        const deleteCell = newRow.insertCell();
        const deleteBtn = document.createElement('button'); 
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click',function(){
            expenses.splice(expenses.indexOf(expense),1);

            totalAmount -= expense.amount;
            totalAmountCell.textContent = totalamount;

            expensesTableBody.removeChild(newrow);
        });
      catagoryCell.textContent = expense.catagory;
        amountCell.textContent = expense.amount;
        dataCell.textContent = expense.data;
        deleteCell.appendChild(deleteBtn);
