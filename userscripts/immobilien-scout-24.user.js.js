// ==UserScript==
// @name            ImmobilienScout24
// @version         1.0.0
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/immobilien-scout-24.user.js
// @include         http*://*immobilienscout24.de*
// @grant           GM_addStyle
// @run-at          document-end
// ==/UserScript==

document.getElementsByClassName("is24qa-kaltmiete-label")[0].innerText = "Gesamtmiete";
document.getElementsByClassName("is24qa-kaltmiete")[0].innerText = document.getElementsByClassName("is24qa-gesamtmiete")[0].innerText;

GM_addStyle(`
.removalcost-calculator-in-content,
[data-qa="is24qa-services-passend-zur-wohnung-label"],
[data-qa="is24qa-services-passend-zur-wohnung-label"] + div,
[data-qa="realtor-contact-action"] {
  display: none;
}`);
