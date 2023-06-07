// ==UserScript==
// @name            URL Cleaner
// @version         2.0.0
// @description     Clean URLs from unnecessary parameters
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/url-cleaner.user.js
// @run-at          document-start

// @match           https://www.amazon.de/*
// @match           https://www.amazon.com/*
// @match           https://www.facebook.com/*
// @match           https://www.goodreads.com/*
// @match           https://www.imdb.com/*
// @match           https://www.reddit.com /*
// @match           https://www.youtube.com/*
// @match           https://stackoverflow.blog/*
// @match           https://twitter.com/*

// ==/UserScript==

// See also: https://gitlab.com/KevinRoebert/ClearUrls/raw/master/data/data.min.json

const page = { url: window.location.href };

const globalQueryParameterFilter = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "fbclid",
  "fb_action_types",
  "fb_action_ids",
  "fb_ref",
  "fb_source",
  "_ga"
];

const queryParameterFilter = {

  "amazon.de": [
    "aaxitk",
    "ascsubtag",
    "camp",
    "creative",
    "colid",
    "coliid",
    "creativeASIN",
    "crid",
    "dchild",
    "field-lbr_brands_browse-bin",
    "hsa_cr_id",
    "i",
    "linkCode",
    "ms3_c",
    "qid",
    "qualifier",
    "ref",
    "ref_",
    "refRID",
    "rnid",
    "smid",
    "sprefix",
    "sr",
    "srs",
    "spIA",
    "th",
    "_encoding",
    "__mk_de_DE"
  ],

  "facebook.com": [
    "__tn__",
    "action_history",
    "app",
    "comment_id",
    "comment_tracking",
    "dti",
    "eid",
    "fbid",
    "ftentidentifier",
    "ls_ref",
    "padding",
    "pageid",
    "video_source"
  ],

  "goodreads.com": ["from_search", "from_srp", "qid", "rank"],

  "hellofresh.de": ["to-instructions", "week"],

  "imdb.com": ["ref_"],

  "reddit.com": [
    "$deep_link",
    "correlation_id",
    "ref_campaign",
    "ref_source",
    "$original_url",
    "_branch_match_id"
  ],

  "stackoverflow.blog": [],

  "twitter.com": ["cn", "refsrc", "ref_src", "ref_url", "s", "src"],

  "youtube.com": ["feature", "gclid", "kw"]
};

// Remove domain-specific query parameters
Object.entries(queryParameterFilter).forEach(([domain, filters]) => {
  if (page.url.indexOf(domain) > -1) {
    const searchParams = new URLSearchParams(window.location.search);
    const allFilters = [...filters, ...globalQueryParameterFilter];
    if (allFilters.some(filter => searchParams.has(filter))) {
      allFilters.forEach(filter => searchParams.delete(filter));
      const queryString = searchParams.toString()
        ? `?${searchParams.toString()}`
        : "";
      window.location.replace(
        `${window.location.origin}${window.location.pathname}${queryString}`
      );
    }
  }
});
