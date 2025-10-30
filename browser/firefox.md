# Firefox

## Extensions

- [Copy Markdown link](https://addons.mozilla.org/en-US/firefox/addon/copy-markdown-link/)
- [Default Bookmark Folder](https://addons.mozilla.org/en-US/firefox/addon/default-bookmark-folder/)
- [Refined GitHub](https://github.com/sindresorhus/refined-github)
  - Disable `align-issue-labels`, `clean-rich-text-editor`, `extend-diff-expander`, `hide-own-stars`, `suggest-commit-title-limit`.
- [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
- [SponsorBlock](https://addons.mozilla.org/de/firefox/addon/sponsorblock/)

## Settings

- Disable telemetry:
  - ☐ Options → Privacy & Security → Firefox Data Collection and Use
- Enable Cookie Banner Blocker
  - ☑ Options → Privacy & Security → Cookie Banner Blocker → Automatically refuse cookie banners
- Disable privacy-preserving ad measurement
  - ☐ Options → Privacy & Security → Website Advertising Preferences → Allow websites to perform privacy-preserving ad measurement
- Disable background update service:
  - ☐ Options → Automatically install updates → When Firefox Developer Edition is not running
- Use logical tab order:
  - `browser.ctrlTab.recentlyUsedOrder`: `false`
- Customize startpage:
  - `about:preferences#home` → Firefox Home Content
- Disable Pocket:
  - `extensions.pocket.enabled: false`
- Disable media keys:
  - `media.hardwaremediakeys.enabled: false`
- Disable picture-in-picture:
  - ☐ Settings → General → Browser → Enable picture-in-picture video controls
- Disable search suggestions in Firefox address bar
  - ☐ Settings → Search → Search Suggestions → Provide search suggestions
- Remove "this time search with" box:
  - Settings → Search → Search Shortcuts → Remove all checkmarks
- Disable dark mode on web pages:
  - `layout.css.prefers-color-scheme.content-override: 1`
- Display [punycode domains](https://www.xudongz.com/blog/2017/idn-phishing/):
  - `network.IDN_show_punycode: true`
- Increase number of parallel connections:
  - `network.http.max-persistent-connections-per-server`


Other `about:config` [privacy](https://spyware.neocities.org/articles/firefox.html) and [anti-ai](https://rubenerd.com/mozillas-latest-quagmire/) settings:

```
browser.ml.chat.enabled: false
browser.ml.chat.menu: false
browser.ml.chat.page: false
browser.ml.chat.sideba: false
browser.ml.enable: false
browser.ml.linkPreview.enable: false
browser.newtabpage.activity-stream.feeds.telemetry: false
browser.newtabpage.activity-stream.showSponsored: false
browser.newtabpage.activity-stream.showSponsoredTopSites: false
browser.newtabpage.activity-stream.telemetry: false
browser.shell.checkDefaultBrowser: false
browser.tabs.groups.smart.enabled: false
browser.tabs.groups.smart.userEnable: false
datareporting.healthreport.uploadEnabled: false
datareporting.policy.dataSubmissionEnabled: false
extensions.ml.enabled: false
network.captive-portal-service.enabled: false
pdfjs.enableAltTextModelDownload: false
pdfjs.enableGuessAltTex: false
toolkit.telemetry.server: "data:,"
```
