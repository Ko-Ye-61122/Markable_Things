

/*
App requirements:
- The app should display the name, symbol, and price of the stock, with a timestamp as per the screenshot.
- The triangle compares the current stock price to its previous price. If the price has increased, it should be a green triangle pointing up, if the price has decreased it should be a red triangle pointing down, and if there has been no change it should be a grey triangle pointing to the right.
- The price should update every 1.5 seconds.
*/

/*
Challenge:
1. Find a way to get fresh stock data every 1.5 seconds.
2. Call the renderStockTicker function with the fresh data.
3. Add logic to renderStockTicker to display the correct information.
*/

import { getStockData } from "./fakeStockAPI.js";

let previousPrice = null;

export function renderStockTicker(stockData) {
  const stockDisplayName = document.getElementById("name");
  const stockDisplaySymbol = document.getElementById("symbol");
  const stockDisplayPrice = document.getElementById("price");
  const stockDisplayTime = document.getElementById("time");

  const currentPrice = Number(stockData.price);

  let state = "flat";
  if (previousPrice !== null) {
    if (currentPrice > previousPrice) {
      state = "up";
    } else if (currentPrice < previousPrice) {
      state = "down";
    }
  }

  stockDisplayName.textContent = `Name : ${stockData.name}`;
  stockDisplaySymbol.textContent = `Symbol : ${stockData.sym}`;
  stockDisplayTime.textContent = `Time : ${stockData.time}`;

  stockDisplayPrice.innerHTML = `Price : ${stockData.price}`;

  const icon = document.createElement("span");
  icon.className = `price-icon ${state}`;
  stockDisplayPrice.appendChild(icon);

  previousPrice = currentPrice;
}

function updateTicker() {
  renderStockTicker(getStockData());
}

setInterval(updateTicker, 1500);
updateTicker();