"use strict";
const movements = [10000, 5000, 7500, -3000, 2000, -20000];
console.log(movements);
const movementsInNaira = movements.slice();
console.log(movementsInNaira);
const movementsInDollars = movementsInNaira.map(function (movement) {
  return movement / 1500;
});
console.log(movementsInDollars);
const movementsInDollarsDeposit = movementsInDollars.filter(function (deposit) {
  return deposit > 0;
});
const movementsInDollarsWithdrawal = movementsInDollars.filter(function (
  withdrawal
) {
  return withdrawal < 0;
});
console.log(movementsInDollarsDeposit);
console.log(movementsInDollarsWithdrawal);
const sumOfMovementsInDollarsDeposit=movementsInDollarsDeposit.reduce(function(total,deposit){return total+deposit},0)
const sumOfMovementsInDollarsWithdrawal=movementsInDollarsWithdrawal.reduce(function(total,withdrawal){return total+withdrawal},0)
console.log(sumOfMovementsInDollarsDeposit);
console.log(sumOfMovementsInDollarsWithdrawal);