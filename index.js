let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

//console.log(weeklyExpenseQuestions)

/* window.prompt(weeklyExpenseQuestions[0]);

window.prompt(weeklyExpenseQuestions[1]);

window.prompt(weeklyExpenseQuestions[2]); */

/*for (let i = 0; i < weeklyExpenseQuestions.length; i++){
  let useranswer = parseInt(window.prompt(weeklyExpenseQuestions[i]))
  weeklyExpenses = useranswer + weeklyExpenses;
  console.log(weeklyExpenses);
} */
for (let i = 0; i < weeklyExpenseQuestions.length; i++){
weeklyExpenses = weeklyExpenses + parseInt(window.prompt(weeklyExpenseQuestions[i]))
console.log(weeklyExpenses) 
}

for (let i = 0; i < monthlyExpenseQuestions.length; i++){
monthlyExpenses = monthlyExpenses + parseInt(window.prompt(monthlyExpenseQuestions[i])) 
console.log(monthlyExpenses) 
}

for (let i = 0; i < annualExpenseQuestions.length; i++){
annualExpenses = annualExpenses + parseInt(window.prompt(annualExpenseQuestions[i])) 
console.log(annualExpenses) 
}
    