const sideNav = {
  "Main Menu": [
    {
      fillIcon: "",
      outlineIcon: "./Assets/Sidebar/Icons/DashboardIcon.svg",
      name: "Dashboard",
    },
    {
      fillIcon: "",
      outlineIcon: "./Assets/Sidebar/Icons/SendOrRequestsIcon.svg",
      name: "Send or Requests",
    },
    {
      fillIcon: "",
      outlineIcon: "./Assets/Sidebar/Icons/ConvertIcon.svg",
      name: "Convert",
    },
    {
      fillIcon: "",
      outlineIcon: "./Assets/Sidebar/Icons/TransactionsIcon.svg",
      name: "Transactions",
    },
    {
      fillIcon: "",
      outlineIcon: "./Assets/Sidebar/Icons/BuyOrSellsIcon.svg",
      name: "Buy or Sells",
    },
  ],
  "News & Trending": [
    {
      fillIcon: "",
      outlineIcon: "./Assets/Sidebar/Icons/SendOrRequestsIcon.svg",
      name: "News",
    },
    {
      fillIcon: "",
      outlineIcon: "./Assets/Sidebar/Icons/ConvertIcon.svg",
      name: "Market",
    },
    {
      fillIcon: "",
      outlineIcon: "./Assets/Sidebar/Icons/BuyOrSellsIcon.svg",
      name: "Trending",
    },
  ],
  "Accounts & Settings": [
    {
      fillIcon: "",
      outlineIcon: "./Assets/Sidebar/Icons/ConvertIcon.svg",
      name: "Account",
    },
    {
      fillIcon: "",
      outlineIcon: "./Assets/Sidebar/Icons/BuyOrSellsIcon.svg",
      name: "Tools",
    },
  ],
};

const navMenu = document.querySelector(".sidebar");

Object.keys(sideNav).forEach((section) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.classList.add("sidebar-section");
  navMenu.appendChild(sectionDiv);

  const sectionTitle = document.createElement("h2");
  sectionTitle.classList.add("sidebar-section-title");
  sectionTitle.innerHTML = section;
  sectionDiv.appendChild(sectionTitle);

  const itemContainer = document.createElement("div");
  itemContainer.classList.add("sidebar-items");
  sectionDiv.appendChild(itemContainer);

  sideNav[section].forEach((menuItem) => {
    const itemDiv = document.createElement("button");
    itemDiv.classList.add("sidebar-item");

    const fillIconDiv = document.createElement("img");
    fillIconDiv.classList.add("sidebar-item-icon", "sidebar-item-icon_fill");
    fillIconDiv.setAttribute("src", menuItem.fillIcon);

    const outlineIconDiv = document.createElement("img");
    outlineIconDiv.classList.add(
      "sidebar-item-icon",
      "sidebar-item-icon_outline"
    );
    outlineIconDiv.setAttribute("src", menuItem.outlineIcon);

    const nameDiv = document.createElement("p");
    nameDiv.classList.add("sidebar-item-text");
    nameDiv.innerHTML = menuItem.name;

    itemDiv.appendChild(fillIconDiv);
    itemDiv.appendChild(outlineIconDiv);
    itemDiv.appendChild(nameDiv);

    itemContainer.appendChild(itemDiv);
  });
});

const menuBtns = document.querySelectorAll(".sidebar-item");

menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isActive = btn.classList.contains("sidebar-item_active");

    menuBtns.forEach((item) => {
      item.classList.remove("sidebar-item_active");
    });

    if (!isActive) {
      btn.classList.add("sidebar-item_active");
    }
  });
});
// const lefsidesidebar=document.querySelector(".leftside")
const darkButton=document.createElement("button");
darkButton.classList.add("darkButton");
navMenu.append(darkButton);

const darkthemeIcon=document.createElement("img");
darkthemeIcon.classList.add("darkthemeIcon");
darkthemeIcon.setAttribute("src","./Assets/Sidebar/Icons/darkIcon.svg")
darkButton.appendChild(darkthemeIcon);

const darkthemeText=document.createElement("p");
darkthemeText.classList.add("darkthemeText");
darkthemeText.innerHTML="Dark Mode";
darkButton.appendChild(darkthemeText);


 

const darkButtonbtn=document.querySelector(".darkButton");

darkButtonbtn.addEventListener("click",()=>{
   document.body.classList.toggle("darktheme");
})

const SidebarContainer=document.querySelector(".leftside");
const SiderbarToggle=document.querySelector(".sidebar-toggle");
SiderbarToggle.addEventListener("click",()=>{
  SidebarContainer.classList.toggle("collapsed");

});