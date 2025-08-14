# Mac

Run `./config.sh` to initialize custom settings.

## Settings

### System Settings

- Always show scroll bars
  - General → Show scroll bars: Always
- Scale display (if necessary)
  - Displays → Scaled
- Lock the Dock on the primary monitor
  - ☐ Mission Control → Displays have separate Spaces
- Switch Function Keys
  - ☑ Keyboard → Use F1, F2, etc. keys as standard function keys
- Make modal buttons toggable
  - ☑ Keyboard → Shortcuts → Use keyboard navigation to move focus between controls
- Disable character viewer on `Fn` click
  - Keyboard → Press 🌐 to `Do Nothing`
- Disable global Spotlight shortcut
  - ☐ Keyboard → Shortcuts → Spotlight → Show Spotlight search
- Disable thesaurus:
  - ☐ Trackpad → Look up & data detectors
- Disable Power Nap
  - Battery → Power Nap → Wake for network access: never
- Disable hot corners:
  - Desktop & Screen Saver → Screen Saver → Hot Corners
- Disable startup sound
  - ☐ Sound → Play sound on startup

### Custom shortcuts

System Settings → Keyboard → Keyboard Shortcuts...

- Keyboard → Move focus to next window: Option + Tab

### Finder

- Show address bar in Finder
  - Finder → View → Show Path Bar
- Set default Finder options
  - Finder → View → Show View Options → ... → Use as defaults
- Drag'n'drop home folder to Finder Favourites

### Other

- Save screenshots [immediately](https://osxdaily.com/2019/08/02/disable-screenshot-thumbnail-preview-mac/)
  - ☐ Screenshot (App) → Options → Show Floating Thumbnail
- Align icons on desktop
  - Right click desktop → Sort By → Snap to Grid
- Move Toolbar between monitors
  - Slide down on the touchpad on the monitor which should display the Toolbar

## Shortcuts

| Shortcut           | Description                           |
| ------------------ | ------------------------------------- |
| Cmd + Space        | Global Search (Alfred)                |
| Return             | Rename selected file                  |
| F11                | Show desktop                          |
| Ctrl + Down        | Show all windows of the current app   |
| Cmd + H            | Hide current window                   |
| Ctrl + Alt + Left  | Move window to left half (Rectangle)  |
| Ctrl + Alt + Right | Move window to right half (Rectangle) |
| Ctrl + Alt + Up    | Maximize window (Rectangle)           |
| Ctrl + Alt + Left  | Restore window (Rectangle)            |
| Cmd + Shift + 4    | Screenshot ("Space" to select window) |

## Transition from Windows

- Refresh Hotkey: `F5` (Windows) → `Command + R` (Mac)

## Find bundler ID:

```bash
# Method 1
osascript -e 'id of app "SomeApp"'

# Method 2
mdls -name kMDItemCFBundleIdentifier -r SomeApp.app
```

https://stackoverflow.com/questions/39464668/how-to-get-bundle-id-of-mac-application

## Open apps that Apple can't check

To ignore the "Malicious software" warning:

- Control-click the app icon.
- Choose Open from the shortcut menu.
- Click Open.

https://support.apple.com/en-gb/guide/mac-help/mchleab3a043/mac

## Open Chrome with a certain URL

```
open -a "Google Chrome" https://example.com https://example.net
```

https://superuser.com/questions/716943/how-can-i-open-chrome-from-the-command-line-with-specific-pages-in-tabs-in-mac-o

## Apps

- [Homebrew](https://brew.sh/)
  - [XCode Command Line Tools](https://mac.install.guide/commandlinetools/index.html) will be installed as part of Homebrew installation.
  - [Python 3](https://formulae.brew.sh/formula/python@3.13) ([Notes](https://docs.brew.sh/Homebrew-and-Python))
- [Alfred](https://www.alfredapp.com/)
- [iTerm2](https://www.iterm2.com/downloads.html)
- [RetinaCapture](https://www.retinacapture.com/) (Gumroad)
- [qView](https://github.com/jurplel/qView/releases)
  - [Run unsigned software](https://github.com/jurplel/qView/issues/744)

No longer needed:

- [Sensible Side Buttons](https://sensible-side-buttons.archagon.net/) - Support for additional mouse buttons
- [TextMate](https://macromates.com/)

### Open at Login

System Settings → General → Login Items & Extensions → Open at Login

- 1Password
- Alfred
- Rectangle

### Homebrew

- Run `setup.sh` to install common apps
  - [Install fonts with homebrew](https://changelog.com/posts/you-can-install-fonts-with-homebrew)

```
brew search font-
brew install --cask font-aldrich
```

- [Blokk Neue](https://github.com/los-gordos/BLOKK) TTF needs to be copied manually

### Alfred

- [Snippets](../cheat-sheets/snippets.md)
  - ☑ Preferences → Features → Snippets → Automatically expand snippets by keyword
- Clipboard History
  - Preferences → Features → Clipboard History → Shortcut: Shift + Command + V
- [Add Kagi search engine](https://help.kagi.com/kagi/getting-started/application-integrations.html#alfred)
  - Preferences → Features → Default Results → Setup fallback results → Kagi
- Settings
  - [Remove Spotlight shortcuts](https://www.alfredapp.com/help/troubleshooting/cmd-space/) to assign `Cmd` + `Space`
  - ☑ Preferences → Features → Clipboard History → Keep plain text / images history
- Workflows and Integrations
  - [System Settings](https://alfred.app/workflows/alfredapp/system-settings/)
  - [iTerm integration](https://github.com/vitorgalvao/custom-alfred-iterm-scripts)

### Rectangle

- Shortcuts
  - Left Half: ^⌥←
  - Right Half: ^⌥→
  - Maximize: ^⌥↑
  - Restore: ^⌥↓
  - Next Display: ^⌥⌘→
  - Previous Display: ^⌥⌘←

- Snapping
  - ☑ Snap windows by dragging
  - Left Half | Maximize | Right Half

- ☑ Launch on login

### AltTab

- Exceptions:

```
com.apple.finder
com.cisco.anyconnect.gui
com.cisco.webexmeetingsapp
com.glyphfinder.app
com.initex.proxifier.macosx
```

Note: Paste those entries and then replace line feeds manually

## Oh My Zsh Configuration

- [Gist](https://gist.github.com/kevin-smets/8568070)
- [ZSH](../bash/README.md)
- [Hack font](https://github.com/source-foundry/Hack)
