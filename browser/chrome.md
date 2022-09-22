# Chrome

## Features

- Open Command Menu: `Ctrl + Shift + P`
- [Tabluar object view](https://umaar.com/dev-tips/82-console-table/) with `console.table(object)`
- [Toggle element classes](https://umaar.com/dev-tips/87-toggle-element-classes/)
- [Quick change CSS values](https://umaar.com/dev-tips/37-quick-change-css-values/):
  - Up / Down: increment / decrement by 1
  - Alt + Up: increment by 0.1
  - Shift + Up: increment by 10
  - Ctrl + Up: increment by 100
- [DevTools snippets](https://umaar.com/dev-tips/141-quick-open-menu-snippets/)
- [Blackbox scripts](https://umaar.com/dev-tips/128-blackboxing/)
- [Copy as curl](https://twitter.com/adrian_philipp/status/710438593936932864)

 ## Extensions

- [ModHeader](https://chrome.google.com/webstore/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj)
- [PixelPerfect](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi)
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
- [Proxy SwitchySharp](https://chrome.google.com/webstore/detail/proxy-switchysharp/dpplabbmogkhghncfbfdeeokoefdjegm) or [Proxy SwitchyOmega](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [Refined GitHub](https://github.com/sindresorhus/refined-github)
  - Disable `align-issue-labels`, `clean-rich-text-editor`, `extend-diff-expander`, `hide-own-stars`, `suggest-commit-title-limit`.
- [TabCopy](https://chrome.google.com/webstore/detail/tabcopy/micdllihgoppmejpecmkilggmaagfdmb)
- [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- [uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
- [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
- [Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm)

## Settings

- Hide the infobar for [remote debugging](https://stackoverflow.com/questions/18882497/jetbrains-ide-support-extension-how-to-disable-chrome-warnings)
  - `chrome://flags/` → Enable `Silent Debugging`
- Disable media keys:
  - `chrome://flags` → Hardware Media Key Handling
- Show full URLs:
  - `chrome://flags` → Context menu show full URLs
  - Restart
  - Right click the address bar and select "Always show full URLs"
- Re-enable "space" completion for custom search engines:
  - `chrome://flags/#omnibox-keyword-search-button`: Disabled
  - `chrome://flags/#omnibox-suggestion-button-row`: Disabled
- Disable reading list:
  - `chrome://flags/#read-later`: Disabled
  - `chrome://flags/#side-panel`: Enabled

## Search engines

| Search engine         | Keyword | Query URL |
| --------------------- | --------|-----------|
| Amazon                | amazon  | https://smile.amazon.de/s/k=%s                                                     |
| BoardGameGeek         | bgg     | https://boardgamegeek.com/geeksearch.php?action=search&objecttype=boardgame&q=%s   |
| DevDocs               | dd      | https://devdocs.io/#q=%s                                                           |
| DuckDuckGo            | ddg     | https://duckduckgo.com/?q=%s                                                       |
| Dict                  | dict    | https://www.dict.cc/?s=%s                                                          |
| eBay                  | ebay    | http://www.ebay.de/sch/i.html?_nkw=%s                                              |
| Font Awesome          | fa      | https://fontawesome.com/icons?d=gallery&q=%s                                       |
| GoodReads             | gr      | https://www.goodreads.com/search/search?search_type=books&search[query]=%s         |
| Google Play           | app     | https://play.google.com/store/search?q=%s&c=apps                                   |
| IMDb                  | imdb    | https://www.imdb.com/find?s=all;q=%s                                               |
| Npm.js                | npmjs   | https://www.npmjs.com/search?q=%s                                                  |
| Thesaurus             | th      | https://www.thesaurus.com/browse/%s                                                |
| Ultimate Guitar       | ug      | https://www.ultimate-guitar.com/search.php?search_type=title&value=%s              |
| Wikipedia             | w       | https://en.wikipedia.org/wiki/Special:Search/%s                                    |
| YouTube               | y       | https://www.youtube.com/results?search_query=%s                                    |

- [Mycroft Project](https://mycroftproject.com)

## Override server response headers (ModHeader)

```
Access-Control-Allow-Credentials: true
Access-Control-Allow-Origin: http://localhost
Content-Security-Policy: <see below>
```

```
default-src *  data: blob: 'unsafe-inline' 'unsafe-eval';
script-src * data: blob: 'unsafe-inline' 'unsafe-eval';
connect-src * data: blob: 'unsafe-inline';
img-src * data: blob: 'unsafe-inline';
frame-src * data: blob: ;
style-src * data: blob: 'unsafe-inline';
font-src * data: blob: 'unsafe-inline';
```

## Bypass SSL warning page

- Type `thisisunsafe` [into the webpage](https://stackoverflow.com/questions/7580508/getting-chrome-to-accept-self-signed-localhost-certificate/47646463#47646463).
