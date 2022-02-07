const Modal = {
    open() {
      document
        .querySelector(".modal-overlay")
        .classList
        .add("active");
    },

    close() {
      document
        .querySelector(".modal-overlay")
        .classList
        .remove("active");
    },
  }

  const transactions = [
    {
        id: 1,
        description:'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description:'Website',
        amount: 500000,
        date: '23/01/2021',
    }, 
    {
        id: 3,
        description:'Internet',
        amount: -20000,
        date: '23/01/2021',
    }, 
]


const transaction = {
    incomes() {
        //somar entradas 
    },
    expenses(){
        //somar saidas
    },
    total(){
        //entradas - saidas
    }

}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    
    addTransaction(transaction, index) {      
        
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount >0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <tr>
        <td class="description">${transaction.description}</td>
        <td class=${CSSclass}>${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
          <img src="./assets/minus.svg" alt="Remover Transação" />
        </td>
      </tr> 
        `
        return html
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) <0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Numer(value) / 100



        console.log(value)
    }
}

transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})