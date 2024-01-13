// ==UserScript==
// @name            Better Styles
// @version         3.0.1
// @description     Custom website styles
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/better-styles.user.js
// @run-at          document-start

// @match           https://themagiccafe.com/*

// @grant           GM_addStyle
// ==/UserScript==

const page = {win: window, doc: document, body: document.body, url: window.location.href};

// ========================== //
// ===== The Magic Cafe ===== //
// ========================== //

if (page.url.indexOf('themagiccafe.com') > -1) {
  GM_addStyle(`
    body, #container { background: #efefef !important; color: #000 !important; font-size: 13px !important; }
    #container { max-width: 1200px; margin: 0 auto; }
    .bgc1, .bgc2 { background: #fff !important; }
    a:link, a:visited, a:hover { color: #00b7f3 !important; }
    a:hover { text-decoration: underline !important; }
    .mltext { font-size: 1em !important; }
    strong { font-size: 0.9em !important; }
    table.normal { border: none !important; }
    td.normal, .vt1 , .quote_inner { border-color: #c3c3c3 !important; }
    table.normal td.w13 .smalltext ~ a { display: none !important; }
    #mmsContainer { display: none !important; }
    .liketext img { display: none !important; }
    .vt2, #subscribe { display: none !important; }
    .yellow { color: #ff9900 !important; }
    .parastyle0, .parastyle1, .parastyle3, .parastyle4, .parastyle5, .parastyle7 { color: #000 !important; }
  `);
}
