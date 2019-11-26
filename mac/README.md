# Mac

## Settings

- Switch Function Keys
  - ☑ System Preferences → Keyboard → Use F1, F2, etc. keys as standard function keys
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
- Correct .ssh folder permissions: `chmod -R u+xr,go-rwx ~/.ssh`

```bash
# Show hidden files in Finder
defaults write com.apple.finder AppleShowAllFiles YES
```

## Features

- Autostart
  - System Preferences → Users & Groups → Login Items

## Shortcuts

- `Cmd` + `Space`: Global Search
- `Return`: Rename selected file
- `F11`: Show desktop

## Transition from Windows

- Refresh Hotkey: `F5` (Windows) → `Command + R` (Mac)

## Apps

-  Install XCode Command Line Tools: xcode-select --install

https://www.ics.uci.edu/~pattis/common/handouts/macmingweclipse/allexperimental/macxcodecommandlinetools.html
https://github.com/nvm-sh/nvm/issues/1782

- [Homebrew](https://brew.sh/)
- [iHosts](https://apps.apple.com/us/app/ihosts-etc-hosts-editor/id1102004240) - Switch hosts via GUI
- [iTermn2](https://www.iterm2.com/downloads.html)
- [Sensible Side Buttons](https://sensible-side-buttons.archagon.net/) - Support for additional mouse buttons
- [TextMate](https://macromates.com/)
- [Visual Studio Code](https://code.visualstudio.com/Download)
