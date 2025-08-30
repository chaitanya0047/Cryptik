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
	"USDT",
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
		const totalItems = this.data.length;
		const duration = 120; // seconds
		const itemWidth = 260; // adjust for your design

		this.data.forEach((coin, index) => {
			const itemContainer = document.createElement("div");
			itemContainer.classList.add("coinItemContainer", "marquee__item");

			// set dynamic CSS variables for animation
			itemContainer.style.setProperty("--item-index", index + 1);
			itemContainer.style.setProperty("--total-items", totalItems);
			itemContainer.style.setProperty("--duration", `${duration}s`);
			itemContainer.style.setProperty("--item-width", `${itemWidth}px`);

			this.container.appendChild(itemContainer);

			// inner coin elements
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
	{ name: "Bitcoin", symbol: "BTC", price: "$52,291" },
	{ name: "Ethereum", symbol: "ETH", price: "$3,201" },
	{ name: "Solana", symbol: "SOL", price: "$142" },
	{ name: "Ripple", symbol: "XRP", price: "$0.57" },
	{ name: "Cardano", symbol: "ADA", price: "$0.62" },
	{ name: "Polkadot", symbol: "DOT", price: "$7.48" },
	{ name: "Dogecoin", symbol: "DOGE", price: "$0.088" },
	{ name: "Avalanche", symbol: "AVAX", price: "$38.22" },
	{ name: "Polygon", symbol: "MATIC", price: "$0.91" },
	{ name: "Litecoin", symbol: "LTC", price: "$72.15" },
	{ name: "Chainlink", symbol: "LINK", price: "$14.89" },
	{ name: "Tether", symbol: "USDT", price: "$0.000009" },
	{ name: "Uniswap", symbol: "UNI", price: "$7.52" },
	{ name: "Cosmos", symbol: "ATOM", price: "$10.12" },
	{ name: "Stellar", symbol: "XLM", price: "$0.12" },
];


const coinList = new CoinList(coins, ".marquee");
coinList.render();


// const fetchCrypto= async (currentSymbol)=>{
// const url=`https://api.api-ninjas.com/v1/cryptoprice?symbol=${currentSymbol}`
// try{
// const response= await fetch(url, {
// method: "GET",
// headers: {
// "Content-Type": "application/json",
// "X-Api-Key": "tt9jZqosLYsFKZH3bMD4tg==I4FoET1dvRe6xPDM"
// }
// });
// const result=await response.json();
// console.log(result);
// }
// catch(error){
// console.error(error);

// }
// }



