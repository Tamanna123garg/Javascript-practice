const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.value = currCode;
    newOption.innerText = currCode;

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = true;
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = true;
    }

    select.appendChild(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;

  if (amtVal === "" || amtVal <= 0) {
    amtVal = 1;
    amount.value = 1;
  }

  try {
    const from = fromCurr.value.toLowerCase();
    const to = toCurr.value.toLowerCase();

    const URL = `${BASE_URL}/${from}.json`;

    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("Failed to fetch exchange rates");
    }

    const data = await response.json();

    const rate = data[from][to];

    const finalAmount = (amtVal * rate).toFixed(2);

    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (error) {
    console.error(error);
    msg.innerText = "Unable to fetch exchange rate.";
  }
};

const updateFlag = (element) => {
  const currCode = element.value;
  const countryCode = countryList[currCode];

  if (!countryCode) return;

  const img = element.parentElement.querySelector("img");

  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};


const swapBtn = document.querySelector(".fa-arrow-right-arrow-left");

swapBtn.addEventListener("click", () => {
  let temp = fromCurr.value;
  fromCurr.value = toCurr.value;
  toCurr.value = temp;

  updateFlag(fromCurr);
  updateFlag(toCurr);

  updateExchangeRate();
});


btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});


window.addEventListener("load", () => {
  updateFlag(fromCurr);
  updateFlag(toCurr);
  updateExchangeRate();
});