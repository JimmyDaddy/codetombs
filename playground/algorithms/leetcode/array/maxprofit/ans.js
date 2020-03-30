var maxProfit = function(prices) {
  let totalProfile = 0
  for (let index = 1; index < prices.length; index++) {
    const price = prices[index];
    const prevPrice = prices[index - 1];
    const profile = price-prevPrice;
    if (profile > 0) {
      totalProfile += profile;
    }
  }
  return totalProfile
};

const res = maxProfit([7,1,5,3,6,4])

console.log('====================================');
console.log(res);
console.log('====================================');