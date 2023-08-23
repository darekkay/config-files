# Firefox

## Extensions

- [Copy Markdown link](https://addons.mozilla.org/en-US/firefox/addon/copy-markdown-link/)
- [Default Bookmark Folder](https://addons.mozilla.org/en-US/firefox/addon/default-bookmark-folder/)
- [Refined GitHub](https://github.com/sindresorhus/refined-github)
  - Disable `align-issue-labels`, `clean-rich-text-editor`, `extend-diff-expander`, `hide-own-stars`, `suggest-commit-title-limit`.
- [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)

## Settings

- Disable telemetry:
  - ☐ Options → Privacy & Security → Firefox Data Collection and Use
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

Other `about:config` [privacy settings](https://spyware.neocities.org/articles/firefox.html):

```
browser.newtabpage.activity-stream.feeds.telemetry: false
browser.newtabpage.activity-stream.telemetry: false
browser.shell.checkDefaultBrowser: false
datareporting.healthreport.uploadEnabled: false
datareporting.policy.dataSubmissionEnabled: false
network.captive-portal-service.enabled: false
toolkit.telemetry.server: "data:,"
browser.newtabpage.activity-stream.showSponsored: false
browser.newtabpage.activity-stream.showSponsoredTopSites: false
```
