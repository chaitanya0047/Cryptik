class MetalList {
	constructor(data, containerSelector) {
		this.data = data;
		this.container = document.querySelector(containerSelector);
	}
	rendering() {
		this.data.forEach((metal) => {
			const metalItemContainer = document.createElement("div");
			metalItemContainer.classList.add("metalItemContainer","card-spotlight");
			this.container.appendChild(metalItemContainer);

			const metalIconContainer = document.createElement("div");
			metalIconContainer.classList.add("metal-leftside-container");
			metalItemContainer.appendChild(metalIconContainer);

			const imgContainer = document.createElement("div");
			imgContainer.classList.add("img-container");

			const icon = document.createElement("img");
			icon.classList.add("metal-icon");
			icon.setAttribute("src", metal.icon);
			icon.setAttribute("alt", metal.name);

			const metalInfoContainer = document.createElement("div");
			metalInfoContainer.classList.add("metal-info");

			const name = document.createElement("h3");
			name.classList.add("metal-name");
			name.innerText = metal.name;
			const symbol = document.createElement("p");
			symbol.classList.add("metal-symbol");
			symbol.innerText = metal.symbol;


			const price = document.createElement("strong");
			price.classList.add("metal-price");
			console.log(metal.price);
			price.innerHTML = metal.price;

			imgContainer.appendChild(icon);
			metalIconContainer.appendChild(imgContainer);
			metalIconContainer.appendChild(metalInfoContainer);
			metalInfoContainer.appendChild(name);
			metalInfoContainer.appendChild(symbol);
			metalItemContainer.appendChild(metalIconContainer);
			metalItemContainer.appendChild(price);
		});
	}
}
	getMetalPrice = async (symbol) => {
		const metalUrl = `https://api.gold-api.com/price/${symbol}`;
		try {
			const responce = await fetch(metalUrl);
			const data = await responce.json();
			// console.log(data);

			return data;
		} catch (Error) {
			console.log(`API Failed ${Error}`);
		}
	};


	const setMetalPrice = async () => {
	for (const item of metals) {
		const result = await getMetalPrice(item.symbol);
		item.price = result.price;
	}
};

const metals = [
	{
		icon: "./Assets/Commodities/Icons/GoldIcon.svg",
		name: "GOLD",
		symbol: "XAU",
		price: "",
	},
	{
		icon: "./Assets/Commodities/Icons/SilverIcon.svg",
		name: "SILVER",
		symbol: "XAG",
		price: "",
	},
	{
		icon: "./Assets/Commodities/Icons/CopperIcon.svg",
		name: "Copper",
		symbol: "HG",
		price: "",
	},
];

const metalList = new MetalList(metals, ".metalContainer");
const init = async () => {
	await setMetalPrice(); 
	metalList.rendering();
		const imgset = document.getElementsByClassName("metal-leftside-container")[1];
		const img = imgset.querySelector("div");
		img.style.filter = "grayscale(100%)";
};
init();

	const card = document.querySelector(".card-spotlight");

		card.addEventListener("mousemove", (e) => {
			const rect = card.getBoundingClientRect();
			const x = ((e.clientX - rect.left) / rect.width) * 100;
			const y = ((e.clientY - rect.top) / rect.height) * 100;

			card.style.setProperty("--mouse-x", `${x}%`);
			card.style.setProperty("--mouse-y", `${y}%`);
		});

		card.addEventListener("mouseleave", () => {
			// Reset spotlight to center when mouse leaves
			card.style.setProperty("--mouse-x", `50%`);
			card.style.setProperty("--mouse-y", `50%`);
		});
