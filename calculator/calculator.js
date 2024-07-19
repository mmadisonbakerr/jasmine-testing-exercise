window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value)
  }
};

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 100000, years: 12, rate: 6};
  const amount = (document.getElementById("loan-amount"));
  amount.value = values.amount;
  const years = (document.getElementById("loan-years"))
  years.value = values.years;
  const rate = (document.getElementById("loan-rate"))
  rate.value = values.rate
  update()
}

// Get the current values from the UI
// Update the monthly payment

function update() {
  const {amount, years, rate} = getCurrentUIValues()
  updateMonthly(calculateMonthlyPayment(amount, years, rate))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(amount, years, rate) {
  const monthlyPayment = (amount *((rate/100)/12)) / (1 - (1 + (rate/100)/12) ** (-12*years));
  const roundedNum = monthlyPayment.toFixed(2);
  return roundedNum;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = `$${monthly}`
}
