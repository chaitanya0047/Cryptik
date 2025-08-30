const cryptoSymbols = [
  "BTC",
  "ETH",
  "BNB",
  "XRP",
  "ADA",
  "DOGE",
  "SOL",
  "DOT",
  "MATIC",
  "LTC",
  "SHIB",
  "AVAX",
  "ATOM",
  "LINK",
  "UNI",
];

class CoinList {
  constructor(data, containerSelector) {
    this.data = data;
    this.container = document.querySelector(containerSelector);
  }

  render() {
    this.data.forEach((coin) => {
      const itemContainer = document.createElement("div");
      itemContainer.classList.add("coinItemContainer");
      this.container.appendChild(itemContainer);

      const coinIconContainer = document.createElement("div");
      coinIconContainer.classList.add("iconContainerCoin");
      itemContainer.appendChild(coinIconContainer);

      const iconEl = document.createElement("img");
      iconEl.classList.add("coin-icon");
      iconEl.setAttribute("src", `https://logo.twelvedata.com/crypto/${coin.symbol.toLowerCase()}.png`);
      iconEl.setAttribute("alt", coin.name);

      const coinInfoContainer = document.createElement("div");
      coinInfoContainer.classList.add("coin-info");

      const nameEl = document.createElement("h3");
      nameEl.classList.add("coin-name");
      nameEl.innerText = coin.name;

      const symbolEl = document.createElement("p");
      symbolEl.classList.add("coin-symbol");
      symbolEl.innerText = coin.symbol;

      const priceEl = document.createElement("strong");
      priceEl.classList.add("coin-price");
      priceEl.innerText = coin.price;

      coinIconContainer.appendChild(iconEl);
      coinIconContainer.appendChild(coinInfoContainer);
      coinInfoContainer.appendChild(nameEl);
      coinInfoContainer.appendChild(symbolEl);
      itemContainer.appendChild(priceEl);
    });
  }
}

const coins = [
  { icon: "", name: "Bitcoin", symbol: "BTC", price: "$52,291" },
  { icon: "", name: "Ethereum", symbol: "ETH", price: "$3,201" },
  { icon: "", name: "Solana", symbol: "SOL", price: "$142" },
  { icon: "", name: "Ripple", symbol: "XRP", price: "$0.57" },
  { icon: "", name: "Cardano", symbol: "ADA", price: "$0.62" },
  { icon: "", name: "Polkadot", symbol: "DOT", price: "$7.48" },
  { icon: "", name: "Dogecoin", symbol: "DOGE", price: "$0.088" },
  { icon: "", name: "Avalanche", symbol: "AVAX", price: "$38.22" },
  { icon: "", name: "Polygon", symbol: "MATIC", price: "$0.91" },
  { icon: "", name: "Litecoin", symbol: "LTC", price: "$72.15" },
  { icon: "", name: "Chainlink", symbol: "LINK", price: "$14.89" },
  { icon: "", name: "Shiba Inu", symbol: "SHIB", price: "$0.000009" },
  { icon: "", name: "Uniswap", symbol: "UNI", price: "$7.52" },
  { icon: "", name: "Cosmos", symbol: "ATOM", price: "$10.12" },
  { icon: "", name: "Stellar", symbol: "XLM", price: "$0.12" },
];


const coinList = new CoinList(coins, ".container");
coinList.render();
// const fetchCrypto= async (currentSymbol)=>{
//   const url=`https://api.api-ninjas.com/v1/cryptoprice?symbol=${currentSymbol}`
//   try{
//     const response= await fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "X-Api-Key": "tt9jZqosLYsFKZH3bMD4tg==I4FoET1dvRe6xPDM"
//       }
//     });
//     const result=await response.json();
//     console.log(result);
//   }
//   catch(error){
//     console.error(error);
    
//   }
// }



