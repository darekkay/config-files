// ==UserScript==
// @name            Accessibility Testing
// @version         1.0.0
// @description     Simulate blurry vision
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/accessibility-testing.user.js
// @include         *
// @grant           GM_addStyle
// @run-at          document-start
// ==/UserScript==

// Blur everything
GM_addStyle("body { filter: blur(7.3px) contrast(100%) brightness(100%) saturate(100%) !important; }");

// Log focus changes
document.addEventListener('focusin', () => console.log(document.activeElement), false);
Array.from(document.getElementsByTagName("iframe"))
  .map(iframe => iframe.contentWindow.document)
  .forEach(iframeDoc => iframeDoc.addEventListener('focusin', () => console.log(iframeDoc.activeElement), false));
