// ==UserScript==
// @name            Todoist Enhancements
// @version         1.4.3
// @description     Brings back square checkboxes, former priority colors and turns off the date parser
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/todoist-enhancements.user.js
// @include         http*://*todoist.com/app*
// @grant           GM_addStyle
// @require         https://raw.githubusercontent.com/darekkay/config-files/master/userscripts/utils/waitForClass.js
// ==/UserScript==

GM_addStyle(`
  .ist_checkbox { border-radius: 2px !important; width: 13px !important; height: 13px !important; border-width: 1px !important; margin-top: 2px !important; }
  .ist_checkbox:after { background-size: 13px 13px !important; width: 13px !important; height: 13px !important; }
  .priority_1 .ist_checkbox { background-color: #fff !important; }
  .priority_2 .ist_checkbox { background-color: #76c6ff !important; border-color: #64a8d9 !important; }
  .priority_3 .ist_checkbox { background-color: #0063a6 !important; border-color: #00548c !important; }
  .priority_4 .ist_checkbox { background-color: #d24726 !important; border-color: #b33d20 !important; }
`);

waitForClass("richtextinput_match", removeDate);

function removeDate(node) {
  $(node).click();
}
