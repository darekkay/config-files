# Firefox

## Extensions

- [Copy Markdown link](https://addons.mozilla.org/en-US/firefox/addon/copy-markdown-link/)
- [Default Bookmark Folder](https://addons.mozilla.org/en-US/firefox/addon/default-bookmark-folder/)
- [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)

## Settings

- Disable telemetry:
  - ☐ Options → Privacy & Security → Firefox Data Collection and Use
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

Other `about:config` [privacy settings](https://spyware.neocities.org/articles/firefox.html):

```
browser.newtabpage.activity-stream.feeds.telemetry: false
browser.newtabpage.activity-stream.telemetry: false
browser.shell.checkDefaultBrowser: false
datareporting.healthreport.uploadEnabled: false
datareporting.policy.dataSubmissionEnabled: false
network.captive-portal-service.enabled: false
toolkit.telemetry.server: "data:,"
```
