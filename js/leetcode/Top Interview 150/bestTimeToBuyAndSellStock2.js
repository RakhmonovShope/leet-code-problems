const bestTimeToBuyAndSellStock2 = (prices) => {
  let min = prices[0];
  let maxProfit = 0;
  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);

    if (maxProfit <= prices[i] - min) {
      maxProfit = prices[i] - min;
    } else {
      sum += maxProfit;
      maxProfit = 0;
      min = prices[i];
    }

    if (i === prices.length - 1) sum += maxProfit;
  }

  return sum;
};

// const prices = [1, 2, 3, 4, 5];
// const prices = [7, 1, 5, 3, 6, 4];
// const prices = [7, 6, 4, 3, 1];
// const prices = [6, 1, 3, 2, 4, 7];

console.log(bestTimeToBuyAndSellStock2(prices));
