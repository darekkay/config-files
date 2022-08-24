# XYplorer

## Settings

- Automatically save settings after a certain time
  - Configuration → Startup & Exit → Autosave
- Select items by clicking on the [line number](https://www.xyplorer.com/release_12.70.php#LNS)
  - General → Menus, Mouse, Safety → Mouse → Line number selection
- Rename by [Up and Down keys](https://www.xyplorer.com/release_9.80.php#SerialRenameUpDown)
  - General → Sort and Rename → Rename → Serial rename by Up and Down keys
- Enable background processing for all file operations
  - File Operations → File Operations → ☑ Enable background processing (☑ Apply to...)
- Use the [Live Filter Box](https://www.xyplorer.com/release_17.00.php#LFB) as default typeahead search:
  - Filters & Type Ahead Find → Type Ahead Find → Enable type ahead find
  - Configuration → Filters & Type Ahead Find → Type Ahead Find → Redirect typing to Live Filter Box
- Highlight selected tab
  - Colors and Styles → Colors → Match selected tab with breadcrumb
- Show [folder contents](https://www.xyplorer.com/release_19.20.php) on icon mouse up
  - Mouse Down Blow Up → Mouse Up on Folder Icons → ☑ Folder contents preview
- Open external folders in a new tab
  - Startup & Exit → ☑ Open commandline start path in new tab

## Features

- [Action Log](https://www.xyplorer.com/release_8.60.php#actionlog)
  - Edit → Action Log ...
- [Custom File Icons](https://www.xyplorer.com/release_12.40.php#CFI)
  - Tools → Customize File Icons... (`Ctrl + I`)
- [Folder View Settings](https://www.xyplorer.com/tour.php?page=fvs)
  - View → Folder View Settings → Save Folder View
- [Live Filter Box](https://www.xyplorer.com/release_17.00.php#LFB)
- [Mouse Down Blow Up](https://www.xyplorer.com/highlights.php#mdbu)
- [Paper folders](https://www.xyplorer.com/release_14.30.php#PF)
- [Quick select](https://www.xyplorer.com/release_15.00.php#QuickSelect)
- [Sync Folders](https://www.xyplorer.com/release_18.40.php#Sync)
- [Tabsets](https://www.xyplorer.com/release_10.70.php#tabsets)

## Scripts

- Flatten folder: `flattenfolder();`

## Apps

- Avidemux: `run """avidemux.exe"" ""<curitem>"" --output-format MP4v2";`
- ConEmu: ` run """ConEmu.exe"" -Dir <curpath> -run {Bash::Git bash} -new_console"`

## Load script file

```
::load "script-file"
```

## User Defined Buttons

- Notepad++
  - Command: `run "C:\Program Files (x86)\Notepad++\notepad++.exe" <selitems>`
  - Icon: C:\Program Files (x86)\Notepad++\notepad++.exe

## List management

### Find Files → Excluded Files

```
*.git*
*node_modules*
```

### Tabsets

```
"Default"
  tabset('load', 'default-left as: wip-left', 1);
  tabset('load', 'default-right as: wip-right', 2);
```

## Search Template

- `Ctrl` + `F9` → Save current search as search template
- Script: `::loadsearch "template name"`
- Load script and reset to default:

```
"Custom Search"
  loadsearch "Custom Search";
  loadsearch "Default Search", l;   // <- "Default Search" is also a saved search template
```
