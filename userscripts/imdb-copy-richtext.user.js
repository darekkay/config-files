// ==UserScript==
// @name            IMDB Copy (Richtext)
// @version         2.0.0
// @description     Create a TODO out of the current IMDB site
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @icon            https://www.imdb.com/favicon.ico
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/imdb-copy-richtext.user.js
// @run-at          document-end

// @match           https://www.imdb.com/*

// @grant           GM_addStyle
// ==/UserScript==

GM_addStyle(".copy-button { color: gold; cursor: pointer; font-weight: bold; font-size: 16px; margin-left: 15px; } ");

const transformDuration = duration => {
  const [hour, minutes] = duration.replace("PT", "").replace("H", ":").replace("M","h").split(":")
  return `${hour}:${minutes.padStart(3, "0")}`;
}

const runScript = () => {

    const ldData = document.querySelector("script[type='application/ld+json']");
    // for some reason, this script is being executed twice - the second time without the ld data being available
    if (!ldData) return;

    var movie = JSON.parse(document.querySelector("script[type='application/ld+json']").textContent);
    var title = [].reduce.call(document.querySelector("h1").childNodes, function(a, b) { return a + (b.nodeType === 3 ? b?.textContent : ''); }, '').trim();
    var description = ` — ${movie.genre.join ? movie.genre.join(", ") : movie.genre}, ${transformDuration(movie.duration)}`;

    // clipboard textarea
    var clip = document.createElement('div');
    document.body.appendChild(clip);
    var linkNode = document.createElement('a');
    linkNode.href = document.location.toString();
    var descriptionNode = document.createElement('span');
    clip.appendChild(linkNode);
    clip.appendChild(descriptionNode);

    var range = document.createRange();
    range.selectNode(clip);

    // copy button
    var button = document.createElement("span");
    button.innerText = "copy";
    button.className = "copy-button";
    button.addEventListener("click", (event) => {
        linkNode.innerText = title;
        descriptionNode.innerText = description;

        window.getSelection().removeAllRanges(range);
        window.getSelection().addRange(range);
        document.execCommand('copy');
    });

    // visual separator
    // var separator = document.createElement("span");
    // separator.innerText = " | ";

    // document.querySelector("h1").appendChild(separator);
    document.querySelector("h1").appendChild(button);
}

setTimeout(runScript, 100);
