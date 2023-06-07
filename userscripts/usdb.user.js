// ==UserScript==
// @name            UltraStarDB
// @version         2.0.0
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/usdb.user.js
// @grant           none
// @run-at          document-end

// @match           http://usdb.animux.de/*
// @match           https://usdb.animux.de/*

// ==/UserScript==

// open songs in a new tab
window.show_detail = id => {
  window.open("?link=detail&id=" + id, "_blank")
}
