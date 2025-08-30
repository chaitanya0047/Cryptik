class CurrencyList {
  constructor(data, containerSelector) {
    this.data = data;
    this.container = document.querySelector(containerSelector);
  }

  render() {
    this.data.forEach((currency) => {
      const currencyItemContainer = document.createElement("div");
      currencyItemContainer.classList.add("currency-Item-Container");
      this.container.appendChild(currencyItemContainer);

      const currencyLeftContainer = document.createElement("div");
      currencyLeftContainer.classList.add("currency-left-container");
      currencyItemContainer.appendChild(currencyLeftContainer);



      const icon = document.createElement("img");
      icon.classList.add("currency-icon");
      icon.setAttribute("src", `https://logo.twelvedata.com/crypto/${currency.symbol.toLowerCase()}.png`);
      icon.setAttribute("alt", currency.name);

      const name = document.createElement("h3");
      name.classList.add("currency-name");
      name.innerText = currency.name;

      const symbolContainer = document.createElement("div");
      symbolContainer.classList.add("symbol-container");
      const symbol = document.createElement("p");
      symbol.classList.add("currency-symbol");
      symbol.innerText = currency.symbol;

      const priceContainer = document.createElement("div");
      priceContainer.classList.add("price-container");

      const price = document.createElement("strong");
      price.classList.add("currency-price");
      price.innerHTML = currency.price;

      currencyLeftContainer.appendChild(icon);
      currencyLeftContainer.appendChild(name);
      symbolContainer.appendChild(symbol);
      currencyItemContainer.appendChild(symbolContainer);
      currencyItemContainer.appendChild(priceContainer);
      priceContainer.appendChild(price);
    });
  }
}
const getCurrencies = async (currency) => {
  const currencyUrl = `https://api.twelvedata.com/exchange_rate?symbol=${currency}/INR&apikey=03b7eab69603427ba4c569dd4b906ab5`;
  try {
    const response = await fetch(currencyUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`API Failed: ${err.message}`);
    return null;
  }
};

const setCurrencies=()=>{
  currencies.forEach(async (item)=>{
    const result=await getCurrencies(item.symbol);
    console.log(result);
    
    item.price="₹"+result.rate;

  })
}

const currencies = [
  {name: "Euro", symbol: "EUR", price: "" },
  {name: "Doller", symbol: "USD", price: "" },
  {name: "Japanese Yen", symbol: "JPY", price: "" },
  {name: "British Pound", symbol: "GBP", price: "" },
  {name: "Russian Ruble", symbol: "RUB", price: "" },
];

const currencyList = new CurrencyList(currencies,".currencyContainer");
// getCurrencies("JPY");
setCurrencies();
console.log(currencies);

currencyList.render();






