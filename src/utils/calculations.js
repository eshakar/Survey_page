export function calculateHealthScore(data) {
  const savingsRate = (data.income - data.expenses) / data.income;
  const ageFactor = 1 - data.age / 60;
  const investmentFactor = Math.min(data.investments / 2000000, 1);

  const score =
    savingsRate * 400 + ageFactor * 300 + investmentFactor * 300;

  return Math.min(Math.round(score), 1000);
}

export function getAssetAllocation(risk) {
  if (risk === "aggressive")
    return { Equity: 70, Debt: 10, Gold: 10, RealEstate: 10 };

  if (risk === "moderate")
    return { Equity: 50, Debt: 30, Gold: 10, RealEstate: 10 };

  return { Equity: 30, Debt: 40, Gold: 20, RealEstate: 10 };
}

export function sipAmounts(allocation, income) {
  const base = income * 0.2;
  return Object.fromEntries(
    Object.entries(allocation).map(([k, v]) => [k, (base * v) / 100])
  );
}
