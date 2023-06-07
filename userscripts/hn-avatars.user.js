// ==UserScript==
// @name            HN Avatars
// @version         2.0.0
// @description     Display generated avatars next to usernames.
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @icon            https://news.ycombinator.com/favicon.ico
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/hn-avatars.user.js
// @run-at          document-end

// @match           https://news.ycombinator.com/*
// ==/UserScript==

// original idea: https://news.ycombinator.com/item?id=30668137
// see also https://greasyfork.org/en/scripts/441566-hn-avatars-in-362-bytes

for (let u of document.querySelectorAll(".hnuser, #me")) {
    for (
        u.prepend((c = document.createElement("canvas"))), x = c.getContext("2d"), c.width = 18, c.height = 8, s = u.innerText, r = 1, i = 28 + s.length; i--;
        i < 28 ? r >>> 29 > (X * X) / 3 + Y / 2 && x.fillRect(6 + 2 * X, 2 * Y, 2, 2) & x.fillRect(6 - 2 * X, 2 * Y, 2, 2) : (r += s.charCodeAt(i - 28, (x.fillStyle = "#" + ((r >> 8) & 0xffffff).toString(16))))
    ) {
        (r ^= r << 13), (r ^= r >>> 17), (r ^= r << 5), (X = i & 3), (Y = i >> 2);
    }
}
