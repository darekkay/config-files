// ==UserScript==
// @name            Steam Discovery Queue Auto Click
// @version         1.3.1
// @description     Goes through the Steam Discovery Queue to get free Winter/Summer Sale Trading Cards.
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/steam-discovery-queue.user.js
// @include         http*://store.steampowered.com/*
// @run-at          document-idle
// @grant           none
// ==/UserScript==

jQuery(".btn_next_in_queue").click();
jQuery(".btn_next_in_queue_trigger").click();
