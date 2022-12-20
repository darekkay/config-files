# Mac

Run `./config.sh` to initialize custom settings.

## Settings

- Scale display (if necessary)
  - System Preferences → Displays → Scaled
- Switch Function Keys
  - ☑ System Preferences → Keyboard → Use F1, F2, etc. keys as standard function keys
- Always show scroll bars
  - System Preferences → General → Show scroll bars: Always
- Show address bar in Finder
  - Finder → View → Show Path Bar
- Set default Finder options
  - Finder → View → Show View Options → ... → Use as defaults
- Move Toolbar between monitors
  - Slide down on the touchpad on the monitor which should display the Toolbar
- Lock the Dock on the primary monitor
  - ☐ System Preferences → Mission Control → Displays have separate Spaces
- Disable thesaurus:
  - ☐ System Preferences → Trackpad → Look up & data detectors
- Make modal buttons toggable
  - ☑ System Preferences → Keyboard → Shortcuts → Use keyboard navigation to move focus between controls
- Correct .ssh folder permissions: `chmod -R u+xr,go-rwx ~/.ssh`
- Save screenshots [immediately](https://osxdaily.com/2019/08/02/disable-screenshot-thumbnail-preview-mac/)
  - ☐ Screenshot (App) → Options → Show Floating Thumbnail
- Drag'n'drop home folder to Finder Favourites
- Align icons on desktop
  - Right click desktop → Sort By → Snap to Grid
- Disable character viewer on `Fn` click
  - Preferences → Keyboard → Press 🌐 to `Do Nothing`
- Disable hot corners:
  - Preferences → Desktop & Screen Saver → Screen Saver → Hot Corners


## Features

- Autostart
  - System Preferences → Users & Groups → Login Items

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
- [Alfred](https://www.alfredapp.com/)
- [iTerm2](https://www.iterm2.com/downloads.html)
- [RetinaCapture](https://www.retinacapture.com/)
- [Visual Studio Code](https://code.visualstudio.com/Download)

No longer needed:

- [Sensible Side Buttons](https://sensible-side-buttons.archagon.net/) - Support for additional mouse buttons
- [TextMate](https://macromates.com/)

### Homebrew

- Run `setup.sh` to install common apps
  - [qView](https://interversehq.com/qview/)
  - [Install fonts with homebrew](https://changelog.com/posts/you-can-install-fonts-with-homebrew)

```
brew search font-
brew install --cask font-aldrich
```

- [Blokk Neue](https://github.com/los-gordos/BLOKK) TTF needs to be copied manually

### Alfred

- [Snippets](../cheat-sheets/snippets.md)
- [iTerm integration](https://github.com/vitorgalvao/custom-alfred-iterm-scripts)
- [Alfred Fakeum](https://github.com/deanishe/alfred-fakeum)
  - Change workflow snippet key to `xxfake` and remove `\\` prefix
- [Remove Spotlight shortcuts](https://www.alfredapp.com/help/troubleshooting/cmd-space/) to assign `Cmd` + `Space`
- Preferences → Default Results → Setup fallback results
- ☑ Preferences → Clipboard History → Keep plain text / images history

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
