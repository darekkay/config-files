# Windows Terminal

## Features

- [Split panes](https://docs.microsoft.com/en-us/windows/terminal/panes)
  - `Alt + V`: Split panes
  - `Alt + Arrow Key`: Switch to other pane
  - `Alt + Shift + Arrow Key`: Resize current pane
  - `Ctrl + Shift + W`: Close current pane

- [Tab Switcher](https://docs.microsoft.com/en-us/windows/terminal/customize-settings/global-settings#use-tab-switcher-experience):
  - `Ctrl + Tab`

- [Reusing current instance](https://github.com/microsoft/terminal/issues/4472):
  - New tab: `wt -w 0 nt -d C:\TEMP`
  - Split tab: `wt -w 0 sp`
