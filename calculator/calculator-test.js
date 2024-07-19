
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 100000,
    years: 12,
    rate: 6
  }
  expect(calculateMonthlyPayment(values.amount, values.years, values.rate)).toEqual(975.85)
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 100000,
    years: 12,
    rate: 6
  }
  expect(calculateMonthlyPayment(values.amount, values.years, values.rate)).toEqual(126.60)
});

/// etc
