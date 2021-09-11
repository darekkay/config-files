// ==UserScript==
// @name            Better Styles
// @version         2.1.1
// @description     Custom website styles
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/better-styles.user.js
// @run-at          document-start

// @include         http*://news.ycombinator.com/*
// @include         http*://*slack.com/messages/*
// @include         http*://stackoverflow.com/*
// @include         http*://*todoist.com/app*
// @include         http*://*play.google.com/music/*
// @include         http*://*themagiccafe.com*

// @grant           GM_addStyle
// ==/UserScript==

const page = {win: window, doc: document, body: document.body, url: window.location.href};


// ========================== //
// ======= Hacker News ====== //
// ========================== //

if (page.url.indexOf('news.ycombinator.com') > -1) {
  GM_addStyle(`
    body { color: #CCCCCC !important; background-color: #1A1A1A !important; }
    table { background-color: #2B2B2B !important; }
    input { background-color: #DFDFDF !important; }
    table, tr, td, .pagetop, .score { color: #CCCCCC !important; }
    td { border: 1px solid #2B2B2B !important; background-color: #2B2B2B !important; }
    b { color: inherit !important; }
    a, .c00 { color: #eee !important; }
    .c00 a { color: rgb(49, 140, 212) !important; }
    .comhead, .subtext { color: #828282 !important; }
    .comhead > a, .subtext > a { color: orange !important; }
    .comhead font { color: #5a5a5a !important }
    input { color: black !important; }
    textarea {background-color: #E0E0E0 !important; border-left: 12px solid #CCCCCC !important; }
  `);
}


// ======================== //
// ========= Slack ======== //
// ======================== //

else if (page.url.indexOf('slack.com') > -1) {
  GM_addStyle(`.message.left, .message.joined { display: none; }`);
}


// ======================== //
// ===== Stackoverflow ==== //
// ======================== //

else if (page.url.indexOf('stackoverflow.com') > -1) {
  GM_addStyle(`.tagged-interesting {background: none !important;}`);
}


// ======================== //
// ======== Todoist ======= //
// ======================== //

else if (page.url.indexOf('todoist.com') > -1) {

  // general
  GM_addStyle(`
    body { font-family: '.SFNSDisplay-Regular','Segoe UI','Helvetica',Arial,sans-serif !important; }
    #left_menu { background-color: #fff !important; border-left: 1px solid #f1f1f1 !important; }
  `);

  // underline URLs in task names
  GM_addStyle(`.ex_link, .task_item a { text-decoration: underline !important; }`);

  // smaller paddings in the navigation bar
  GM_addStyle(`
    .generic_left_list td.td_color .counter_color, .generic_left_list td.menu .icon { height: 20px !important; }
    .generic_left_list td.name, .generic_left_list td.counter, .generic_left_list td.menu { height: 20px !important; line-height: 20px !important; }
    .generic_left_list li table td { padding-top: 5px !important; padding-bottom: 5px !important; }
    .generic_left_list .drag_and_drop_handler { padding-top: 2px !important; }
    .generic_left_list .arrow { margin-top: 3px !important; }
    #top_filters { padding-top: 4px !important; }
    #top_filters .filter, #top_filters .favorite_item { padding-top: 3px !important; padding-bottom: 3px !important; }
    #left_menu_tabs { margin-top: 18px !important; }
  `);

  // smaller paddings in the task bar
  GM_addStyle(`
    .task_item_details { padding-top: 6px !important; padding-bottom: 6px !important; }
    #editor .drag_and_drop_handler { margin-top: -3px !important; }
    #editor .arrow { margin-top: 5px !important; }
  `);

  // hide projects dropdown
  GM_addStyle(`
    .expansion_panel:nth-child(2) .panel_summary { display: none; }
    #top_filters { border-bottom: 1px solid #f1f1f1; }
  `);
}


// ========================== //
// ===== The Magic Cafe ===== //
// ========================== //

else if (page.url.indexOf('themagiccafe.com') > -1) {
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
