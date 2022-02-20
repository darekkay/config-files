// ==UserScript==
// @name            Hello Fresh Copy
// @version         1.0.1
// @description     Copy Hello Fresh recipes
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/hello-fresh-copy.user.js
// @run-at          document-end

// @include         http*://*hellofresh.de/*

// @grant           GM_addStyle
// ==/UserScript==

GM_addStyle(".copy-button { color: gold; cursor: pointer; font-weight: bold; } ");

const run = () => {
 // clipboard textarea
var clip = document.createElement('textarea');
document.body.appendChild(clip);

var zutaten = [...document.querySelectorAll("[data-test-id$='ingredients'] p")]
  .map(p => p.innerText)
  .reduce((accumulator, value, index) => `${accumulator}${index % 2 === 1 ? " " : "\n"}${value}`, "")
  .replaceAll("nach Geschmack ", "");

var zubereitung = [...document.querySelector("[data-translation-id$='instructions']").parentNode.parentNode.parentNode.querySelectorAll("p")]
  .map(p => p.innerText)
  .join("\n\n");

var result = "Zutaten\n" + zutaten + "\n\nZubereitung\n\n" + zubereitung + "\n\nQuelle: HelloFresh";

result = result
  .replaceAll("Salz*", "Salz")
  .replaceAll("Pfeffer*", "Pfeffer")
  .replaceAll("Zucker*", "Zucker")
  .replaceAll("Öl*", "Öl")
  .replaceAll("Olivenöl*", "Olivenöl")
  .replaceAll("Wasser*", "Wasser")
  .replaceAll("Guten Appetit!", "")
  .replaceAll(/\[.*?\] /gi, "");

// copy button
var button = document.createElement("span");
button.innerText = "copy";
button.className = "copy-button";
button.addEventListener("click", (event) => {
  clip.value = result;
  clip.select();
  document.execCommand('copy');
});
document.querySelector("h1").parentNode.appendChild(button);
}

//document.querySelector(".subtext").appendChild(separator);
setTimeout(run, 2000);
