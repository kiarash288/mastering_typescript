type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
}

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
}

type CalculationResult = InvestmentResult[] | string;


function calculateInvestment(data: InvestmentData): CalculationResult {
    const { initialAmount, annualContribution, expectedReturn, duration} = data;

    if (initialAmount < 0) 
        return 'Initial investment amount must be at least zero.';

    if (duration <= 0) 
        return 'No valid amount of years provided.';

    if (expectedReturn < 0) 
        return 'Expected return must be at least zero.';

    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;

    const annualResults: InvestmentResult[] = [];

for (let i = 0; i < duration; i++) {
    total = total * (1 + expectedReturn);
    totalInterestEarned = total - totalContributions - initialAmount;
    totalContributions = totalContributions + annualContribution;
    total = total + annualContribution;

    annualResults.push({
        year: `Year ${i + 1}`,
        totalAmount: total,
        totalContributions: totalContributions,
        totalInterestEarned: totalInterestEarned,
        totalContributions: totalContributions,
    })
}
return annualResults;
}





function printResults(results: CalculationResult) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (const year of  results) {
    console.log(year.year);
    console.log(`Total: ${year.totalAmount.toFixed(0)}`);
    console.log(`Total Contributions: ${year.totalContributions.toFixed(0)}`);
    console.log(`Total Interest Earned: ${year.totalInterestEarned.toFixed(0)}`);
    console.log('----------------------');
}
}
const investmentData: InvestmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
}
const results = calculateInvestment(investmentData);
printResults(results);