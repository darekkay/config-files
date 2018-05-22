// ==UserScript==
// @name            UltraStarDB
// @version         1.0.0
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/usdb.user.js
// @include         http*://usdb.animux.de/*
// @grant           none
// @run-at          document-end
// ==/UserScript==

// open songs in a new tab
window.show_detail = id => {
  window.open("?link=detail&id=" + id, "_blank")
}
