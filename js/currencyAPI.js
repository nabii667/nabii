// currencyAPI.js
const apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD';

async function fetchCurrencyRates() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.rates;
}
