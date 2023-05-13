// ==UserScript==
// @name            Genius Lyrics Copy
// @version         1.0.0
// @description     Genius Lyrics Copy
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/genius-copy.user.js
// @run-at          document-end
// @include         http*://*genius.com/*
// @grant           GM_addStyle
// ==/UserScript==

GM_addStyle(".copy-button { color: #005aff; cursor: pointer; font-weight: bold; font-size: 16px; margin-left: 15px; } ");

const runScript = () => {

    const lyricsRoot = document.querySelector("#lyrics-root");
    const lyricsContainer = document.querySelectorAll("[data-lyrics-container='true']");

    if (!lyricsRoot || !lyricsContainer) {
        return;
    }

    const ranges = [...lyricsContainer].map(lyrics => {
        const range = document.createRange();
        range.selectNode(lyrics);
        return range;
    });

    // copy button
    var button = document.createElement("span");
    button.innerText = "copy";
    button.className = "copy-button";
    button.addEventListener("click", (event) => {
        window.getSelection().removeAllRanges();
        ranges.forEach(range => window.getSelection().addRange(range));
        document.execCommand('copy');
    });

    lyricsRoot.querySelector("div").appendChild(button);
}

setTimeout(runScript, 1000);
