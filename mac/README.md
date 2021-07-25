# Mac

Run `./config.sh` to initialize custom settings.

## Settings

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
  - ☐ System Preferences > Trackpad > Look up & data detectors
- Make modal buttons toggable
  - ☑ System Preferences → Keyboard → Shortcuts → Full Keyboard Access → All Controls
- Enable natural text selection
  - iTerm2 → Preferences → Profiles → Keys → Load Preset... → Natural Text Editing
- Correct .ssh folder permissions: `chmod -R u+xr,go-rwx ~/.ssh`
- Save screenshots [immediately](https://osxdaily.com/2019/08/02/disable-screenshot-thumbnail-preview-mac/)
  - ☐ Screenshot (App) → Options → Show Floating Thumbnail

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

## Transition from Windows

- Refresh Hotkey: `F5` (Windows) → `Command + R` (Mac)

## Apps

- [Install](https://www.ics.uci.edu/~pattis/common/handouts/macmingweclipse/allexperimental/macxcodecommandlinetools.html) XCode Command Line Tools: `xcode-select --install`
- [Homebrew](https://brew.sh/)
- [Alfred](https://www.alfredapp.com/)
- [iHosts](https://apps.apple.com/us/app/ihosts-etc-hosts-editor/id1102004240) - Switch hosts via GUI
- [iTerm2](https://www.iterm2.com/downloads.html)
- [qView](https://interversehq.com/qview/)
- [Rectangle](https://github.com/rxhanson/Rectangle)
- [RetinaCapture](https://www.retinacapture.com/)
- [Sensible Side Buttons](https://sensible-side-buttons.archagon.net/) - Support for additional mouse buttons
- [TextMate](https://macromates.com/)
- [Visual Studio Code](https://code.visualstudio.com/Download)

### Homebrew

- [Install fonts with homebrew](https://changelog.com/posts/you-can-install-fonts-with-homebrew)

```
brew search font-
brew install --cask font-aldrich font-anaheim font-anton font-assistant font-cuprum font-dosis font-fira-code font-gudea font-lato font-noto-sans font-open-sans font-oswald font-redacted-script
```

- [Blokk Neue](https://github.com/los-gordos/BLOKK) TTF needs to be copied manually

### Alfred

- [Snippets](../cheat-sheets/snippets.md)
- [iTerm integration](https://github.com/vitorgalvao/custom-alfred-iterm-scripts)
- [Alfred Fakeum](https://github.com/deanishe/alfred-fakeum)
  - Change workflow snippet key to `xxfake` and remove `\\` prefix

## Oh My Zsh Configuration

- [Gist](https://gist.github.com/kevin-smets/8568070)
