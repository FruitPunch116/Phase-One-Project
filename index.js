const URL = "http://localhost:3000/profiles"
fetch(URL)
.then(r => r.json())
.then(profiles => { 

  // profiles.forEach(profile => (profile))
  // logIn(profiles)
  // accActivity(profiles[0])
  // debitDetails(profiles[0])
  // savingsDetails(profiles[0])
  // accDetails (profiles)
  // welcomeMessage(profiles[0])
  menuOptions(profiles)
  interfaceDisplay (profiles[0])
  document.body.addEventListener("load",welcomeMessage(profiles[0]))
  document.body.addEventListener("click",()=> notification(profiles[0]))
  /*document.querySelector("#interface").addEventListener("keydown", function (event){
    if (event.key === "Digit1"){
      interfaceDisplay (profiles[0])
    } else if (event.key === "ArrowRight"){
      interfaceDisplay(profiles[1])
    } else if (event.key === "KeyA"){
      interfaceDisplay(profiles[2])
    } else if (event.key === "Period"){
      interfaceDisplay (profiles[3])
    } else if (event.key === "KeyP"){
      interfaceDisplay(profiles[4])
    } else (alert ("Profile not found try again laater!!"))
  })*/
  document.querySelector("#interface").addEventListener("hover", creditSpy(profiles[0]))
})
.catch(e => alert (e.message));

let selectedName
let selectedPassword
let selectedToken

function creditSpy (profile) {
  alert (`Looks like your credit is having a problem now look: ${profile.creditCard.creditScore}`)
}

function notification (profile) {
  alert(`This is ${profile.accountName}'s account`)
}

function welcomeMessage (profile) {
  alert(`Welcome Back ${profile.accountName}`)
  console.clear
}
const menuOptionsDiv = document.createElement("div")
menuOptionsDiv.id= "menu-options";

// document.body.addEventListener("load",() => welcomeMessage())

// const interfaceDiv = document.createElement("div")
// interfaceDiv.id = "interface"
const interfaceDiv = document.getElementById("interface")

function menuOptions () {  
  const table = document.createElement("table");// Create the table element
  const tbody = document.createElement("tbody");// Create the table body element
  const optionsRow = document.createElement("tr");// Create the table row element with id "options"
  optionsRow.id = "options";

  const accountHeader = document.createElement("th");// Create the table header cells
  accountHeader.textContent = "Accounts";
  const planHeader = document.createElement("th");// Create the table header cells
  planHeader.textContent = "Plan & Tack";
  const payHeader = document.createElement("th");// Create the table header cells
  payHeader.textContent = "Pay & Transfer";
  const investmentHeader = document.createElement("th");// Create the table header cells
  investmentHeader.textContent = "Investments";
  const securityHeader = document.createElement("th");// Create the table header cells
  securityHeader.textContent = "Security & Privacy";

  // Append the header cells to the optionsRow
  optionsRow.appendChild(accountHeader);
  optionsRow.appendChild(planHeader);
  optionsRow.appendChild(payHeader);
  optionsRow.appendChild(investmentHeader);
  optionsRow.appendChild(securityHeader);

  tbody.appendChild(optionsRow);// Append the optionsRow to the tbody

  table.appendChild(tbody);// Append the tbody to the table

  menuOptionsDiv.appendChild(table);// Append the table to the menuOptionsDiv

  const signOutDiv = document.createElement("div");// Create the "sign-out" div
  signOutDiv.id = "sign-out";

  const signOutLabel = document.createElement("label");// Create the label with class "log-out"
  signOutLabel.className = "log-out";
  signOutLabel.textContent = "Sign out";

  signOutDiv.appendChild(signOutLabel);// Append the signOutLabel to the signOutDiv

  menuOptionsDiv.appendChild(signOutDiv);// Append the signOutDiv to the menuOptionsDiv

  document.body.appendChild(menuOptionsDiv);// Append the menuOptionsDiv to the document body

}

function interfaceDisplay (profile) {
  // const interfaceDiv = document.createElement("div")
  // interfaceDiv.id = "interface"
  
  
  const accDetailsDiv = document.createElement("div")//Wrap every detail inside
  accDetailsDiv.id = "account-details"

  const debitDiv = document.createElement("div");// Create the debit div with id "debit" and class "main-layout"
  debitDiv.id = "debit"
  debitDiv.className = "main-layout"
  // debitDiv.textContent = `$ ${profile.debitBalance}`
  const accDebitBalance = `$ ${profile.debitBalance}`
  // console.log(profile)

  debitDiv.append(accDebitBalance)
  
  const savingsDiv = document.createElement("div");// Create the savings div with id "savings" and class "main-layout"
  savingsDiv.id = "savings"
  savingsDiv.className = "main-layout"
  const accSavingsBalance = `$ ${profile.investmentAmount}`

  savingsDiv.append(accSavingsBalance)

  const creditCardDiv = document.createElement("div");// Create the credit-card div with id "credit-card" and class "main-layout"
  creditCardDiv.id = "credit-card"
  creditCardDiv.className = "main-layout"
  const accCreditBalance = profile.creditCard.limit
  // console.log(profile.creditCard.limit)
  creditCardDiv.append(accCreditBalance)
  
  const accActivityDiv = document.createElement("div");// Create the account-activity div with id "account-activity" and class "main-layout"
  accActivityDiv.id = "account-activity"
  accActivityDiv.className = "main-layout"
  const accActivityDetails = [[profile.weeklyDeposits[0].amount,profile.weeklyDeposits[0].merchant],
  // [profile.monthlyExpenses.categories.groceries],
  // [profile.weeklyDeposits[1].amount, profile.weeklyDeposits[1].merchant],
  // [profile.monthlyExpenses.categories.utilities],
  // [profile.weeklyDeposits[2].amount, profile.weeklyDeposits[2].merchant],
  // [profile.monthlyExpenses.categories.entertainment],
  [profile.weeklyDeposits[3].amount, profile.weeklyDeposits[3].merchant]]
  accActivityDiv.append(accActivityDetails)
  // console.log(profile.weeklyDeposits[0])
  
  accDetailsDiv.appendChild(debitDiv)
  accDetailsDiv.appendChild(savingsDiv)
  accDetailsDiv.appendChild(creditCardDiv)
  accDetailsDiv.appendChild(accActivityDiv)

  interfaceDiv.appendChild(accDetailsDiv)
  

  const accExtraDiv = document.createElement("div")
  accExtraDiv.id = "account-extras"

  function accountExtraManagement () {
  const extraManagDiv = document.createElement("div")
  extraManagDiv.id = "extra-management"

  const spendSumDiv = document.createElement("div");
  spendSumDiv.id = "spending-summary";
  spendSumDiv.className = "p-t-m";

  const creditJDiv = document.createElement("div");
  creditJDiv.id = "credit-j";
  creditJDiv.className = "p-t-m";

  const myHomeDiv = document.createElement("div");
  myHomeDiv.id = "my-home";
  myHomeDiv.className = "p-t-m";

  const autoDiv = document.createElement("div");
  autoDiv.id = "auto";
  autoDiv.className = "p-t-m";

  extraManagDiv.appendChild(spendSumDiv);
  extraManagDiv.appendChild(creditJDiv);
  extraManagDiv.appendChild(myHomeDiv);
  extraManagDiv.appendChild(autoDiv);

  accExtraDiv.appendChild(extraManagDiv);
  interfaceDiv.appendChild(accExtraDiv);

  
  const table = document.createElement("table");// Create the table element
  table.id = "p-t-m_table";

  const caption = document.createElement("caption");// Create the table caption (h2 element)
  caption.textContent = "Plan, track & manage";
  table.appendChild(caption);

  const tbody = document.createElement("tbody");// Create the table body (tbody element)

  // Create an array of data for each row
  const rowData = [
    ["Spending summary", "See your spending over time"],
    ["Credit journey", "Your credit score, alerts & identity restoration services"],
    ["Chase MyHome", "See rates, properties and insights, and manage your mortgage"],
    ["All things auto", "Get financing and tailored insights to help you buy and own a car"]
  ];

  // Loop through the rowData array to create table rows and cells
  for (let i = 0; i < rowData.length; i++) {
    const row = document.createElement("tr");
    
    const headerCell = document.createElement("th");
    headerCell.textContent = rowData[i][0];
    
    const dataCell = document.createElement("td");
    dataCell.textContent = rowData[i][1];
    
    row.appendChild(headerCell);
    row.appendChild(dataCell);
    
    tbody.appendChild(row);
  }

  table.appendChild(tbody);// Append the tbody to the table

  extraManagDiv.appendChild(table);// Append the table to the document body or a desired container element

  }

  accountExtraManagement()

  function extraProducts () {
    const extraProductsDiv = document.createElement("div")
    extraProductsDiv.id = "extra-products"

    const heading = document.createElement("h2");// Create the heading element (h2)
    heading.textContent = "Explore products";
    extraProductsDiv.appendChild(heading);

    // Array of product names
    const productNames = [
      "Credit Cards",
      "Checking account",
      "Savings & CDs",
      "Auto financing",
      "Mortgage",
      "Investing",
      "Chase for Business",
      "Just for you"
    ];

    // Loop through the productNames array to create product elements
    for (let i = 0; i < productNames.length; i++) {
      const productDiv = document.createElement("div");
      productDiv.id = productNames[i].toLowerCase().replace(/ /g, "-");
      productDiv.className = "explore-products";
      productDiv.textContent = productNames[i];
      extraProductsDiv.appendChild(productDiv);
    }

    accExtraDiv.appendChild(extraProductsDiv);// Append the exploreProductsDiv to the document body or a desired container element

  }
  extraProducts()

  // function extraDeals () {}

  document.body.appendChild(interfaceDiv)// Append the accountDetailsDiv to the document body

}

function debitDetails (content) {
  const debit = document.createElement("div");
  debit.id = "debit"
  debit.textContent = `$ ${content.debitBalance}`
  const debitBalance = `$ ${content.debitBalance}`

  debit.append(debitBalance)
}

function savingsDetails (content) {
  const savings = document.getElementById("savings")
  savings.textContent = `$ ${content.investmentAmount}`
}

let num1 = 1
let num2 = 4
const day = Math.round(Math.random()*num1 *(30))
const month = Math.ceil(5.7)
const year = 2023
const dates = `${month}/${day}/${year}`
const dates2 = `${month}/${day}/${year}`

function accActivity (profile) {
  /*const accountActivity = document.querySelector("#account-activity")
  const accountActivityContent = document.createElement("h2")
  accountActivityContent.textContent = "Account Activity"

  // const description = ["Date", "Description", "Type", "Balance"]

  // for (let headerText of headers) {
  //     const headerCell = document.createElement('th');
  //     headerCell.textContent = headerText;
  //     tableRow.appendChild(headerCell);
  // }
  // table.appendChild(tableRow);
  
  const income = document.createElement("li")
  const expenses = document.createElement("li")

  income.textContent = [profile.weeklyDeposits[0].amount, profile.weeklyDeposits[0].merchant, 
  profile.weeklyDeposits[1].amount, profile.weeklyDeposits[1].merchant]

  expenses.textContent = [profile.monthlyExpenses.categories.groceries ,
  profile.monthlyExpenses.categories.utilities,
  profile.monthlyExpenses.categories.entertainment]
  console.log(`Testing expenses ${expenses.textContent}`)
  console.log(`Testing income ${income.textContent}`)
      
  // tableRow.append(income)
  // tableRow.append(expenses)
  accountActivityContent.append(income)
  accountActivityContent.append(expenses)
  accountActivity.append(accountActivityContent)
    
  accountActivity.appendChild(accountActivityContent);
  // accountActivity.appendChild(table);
  console.log(profile)
  console.log(accountActivityContent)*/
  // Create the parent h2 element
  const h2 = document.createElement('h2');
  h2.textContent = 'Account Activity';
  // Create the table element
  const table = document.createElement('table');
  // Create the table header row
  const headerRow = document.createElement('tr');
  // Create the table header cells
  const headers = ['Date', 'Description', 'Type', 'Amount', 'Balance'];
  for (let headerText of headers) {
    const headerCell = document.createElement('th');
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  }
  // Append the header row to the table
  table.appendChild(headerRow);
  // Create the table rows
  const rows = [
    [dates, profile.weeklyDeposits[0].merchant, 'Deposit', profile.weeklyDeposits[0].amount, '1000000'],
    [dates2, profile.weeklyDeposits[1].merchant, 'Deposit', profile.weeklyDeposits[1].amount, '997100'],
    [dates, profile.weeklyDeposits[2].merchant, 'Deposit', profile.weeklyDeposits[2].amount, '992100'],
    [dates2, profile.weeklyDeposits[3].merchant, 'Deposit', profile.weeklyDeposits[3].amount, '978480'],
    [dates, 'Fruit Studio Tuning Auto Shop', 'Withdrawal', '5800.00', '970680']
  ];

  for (let rowData of rows) {
    // Create the table row
    const row = document.createElement('tr');
    
    for (let cellData of rowData) {
      // Create the table cell
      const cell = document.createElement('td');
      cell.textContent = cellData; 
      // Append the cell to the row
      row.appendChild(cell);
    }
    // Append the row to the table
    table.appendChild(row);
  }
  // Append the h2 and table to the document body
  document.body.appendChild(h2);
  document.body.appendChild(table);

}

// const 

// function extras () {

// }


// function logInDetails () {
  
// }

function accDetails (profile) {

}
