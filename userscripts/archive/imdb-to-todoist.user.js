// ==UserScript==
// @name            IMDB to Todoist
// @version         1.0.1
// @description     Create a TODO out of the current IMDB site
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/imdb-to-todoist.user.js
// @run-at          document-end

// @include         http*://*imdb.com/*

// @grant           GM_addStyle
// ==/UserScript==

GM_addStyle(".copy-button { color: gold; cursor: pointer; font-weight: bold; } ");

var movie = JSON.parse(document.querySelector("script[type='application/ld+json']").textContent);
var title = [].reduce.call(document.querySelector("h1").childNodes, function(a, b) { return a + (b.nodeType === 3 ? b.textContent : ''); }, '').trim();
var result = `**[${title}](${window.location})** {${movie.genre.join ? movie.genre.join(", ") : movie.genre}, ${movie.duration.replace("PT", "").replace("H", ":").replace("M","h")}} **()**`;

// clipboard textarea
var clip = document.createElement('textarea');
document.body.appendChild(clip);

// copy button
var button = document.createElement("span");
button.innerText = "copy";
button.className = "copy-button";
button.addEventListener("click", (event) => {
    clip.value = result;
    clip.select();
    document.execCommand('copy');
});

// visual separator
var separator = document.createElement("span");
separator.innerText = " | ";

document.querySelector(".subtext").appendChild(separator);
document.querySelector(".subtext").appendChild(button);

