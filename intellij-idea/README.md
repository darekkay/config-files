# IntelliJ IDEA

## Plugins

- [Darcula Darker Theme](https://plugins.jetbrains.com/plugin/12692-darcula-darker-theme)
  - A dark theme based on Darcula, but with more contrasting tones
- [File Watchers](https://plugins.jetbrains.com/plugin/7177-file-watchers)
  - Executes task on file modifications
- [Grazie](https://plugins.jetbrains.com/plugin/12175-grazie/)
  - Advanced spelling and grammar checker
- [Grazie Professional](https://plugins.jetbrains.com/plugin/16136-grazie-professional)
  - Enhances the base Grazie plugin
- [Ignore](https://plugins.jetbrains.com/plugin/7495--ignore)
  - Support for ignore files
- [MDX Support](https://www.jetbrains.com/webstorm/guide/tips/mdx-plugin/)
  - Add support for MDX files
- [Presentation Assistant](https://plugins.jetbrains.com/plugin/7345-presentation-assistant)
  - Display shortcuts for invoked actions
- [Shifter](https://plugins.jetbrains.com/plugin/6149-shifter)
  - Shifts many types of values up and down with a keyboard shortcut
- [String Manipulation](https://plugins.jetbrains.com/plugin/2162-string-manipulation)
  - Provides actions for text manipulation
- [Twig support](https://plugins.jetbrains.com/plugin/7303-twig)
  - Adds support for Twig and similar languages (e.g. Nunjucks)

## Features

- [Compound run configurations](https://www.jetbrains.com/help/idea/creating-compound-run-debug-configuration.html#)
- Internal clipboard: `Ctrl` + `Shift` + `V`
- Save window layout: `Window` → Store current layout as default

## Color Themes

### DK Monokai

![DK Monokai color theme](config/colors/dk-monokai.png)

- [Blog post](https://darekkay.com/blog/monokai-theme-intellij/)

### Tomorrow Evening

![DK Tomorrow Night color theme](config/colors/tomorrow-evening.png)

- [Blog post](https://darekkay.com/blog/tomorrow-night-theme-intellij/)

## Settings

Show current memory usage in the status bar
  - ☑ Appearance & Behavior → Appearance → Show memory indicator

Adjust for widescreen
  - ☑ Appearance & Behavior → Appearance → Widescreen tool window layout

Set default project directory
  - ☑ Appearance & Behavior → System Settings → Project Opening → Default directory

Zoom with mouse wheel
  - ☑ Editor → General → Change font size (zoom) with Ctrl+Mouse Wheel

Wrap long lines
  - ☑ Editor → General → Use soft wraps in editor
  - ☑ Editor → General → Use soft wraps in console
  - Editor → General → Use custom soft wraps indent: `1`

Trim trailing whitespace
  - Editor → General → Strip trailing spaces on save: All

Add line feed at file end
  - ☑ Editor → General → Ensure line feed at file end on save

Add indent according to code styles by pressing Enter
  - ☑ Editor → General → Smart Keys → Enter → Smart indent

Whitespace-only modifications
  - ☑ Editor → General → Different color for lines with whitespace-only modifications

Show line numbers
  - ☑ Editor → General → Appearance → Show line numbers

Add unambiguous imports on the fly
  - ☑ Editor → General → Auto Import → Add unambiguous imports on the fly

Hide file extensions and close icons on tabs
  - ☑ Editor → General → Editor Tabs → Hide file extension in editor tabs
  - ☐ Editor → General → Editor Tabs → Show "close" button on editor tabs

Open recent tab on closing another tab
  - ☑ Editor → General → Editor Tabs → When closing active editor: Activate most recently opened tab

Open "go to" targets in a new tab
  - ☐ Open declaration source in the same tab

Exclude some packages and classes from auto import/completion
  - Editor → General → Auto Import → Exclude from Import and Completion

Don't use RTF for copy
  - ☐ Editor → General → Copy as rich text by default

Disable Emmet for CSS
  - ☐ Editor → Emmet → CSS → Enable CSS Emmet

Sort debugger fields alphabetically
  - ☑ Build, Execution, Deployment → Debugger → Data Views → Sort alphabetically

Make project automatically
  - ☑ Build, Execution, Deployment → Compiler → Make project automatically

Turn off [selected tab underline](https://youtrack.jetbrains.com/issue/IDEA-131683#comment=27-2112280)
  - Registry → `ide.new.editor.tabs.selection`

Speed-up merging
  - ☑ Tools → Diff & Merge → Automatically apply non-conflicting changes

Use absolute paths for JavaScript imports
  - ☑ Editor → Color Style → JavaScript → Imports → Use paths relative to the project, resource or sources roots

Set TODO format
  - Editor → TODO → ☑ Case Sensitive, `\bTODO\b:?`

Use ECMAScript 6 by default (default settings)
  - Languages & Frameworks → JavaScript → JavaScript language version: ECMAScript 6

Use high-contrast scrollbars
  - ☑ Appearance & Behavior → Appearance → Accessibility → Use contrast scrollbars

Disable popup message for debugging websites
  - ☑ Build, Execution, Deployment → Debugger → Allow unsigned requests

## Registry

- ☑ `markdown.experimental.frontmatter.support.enable`

## Config folder

- Help → Edit Custom Properties
  - Check location of `idea.properties`

## VCS Ignore Files

If you decide to share IDE project files with other developers, share:
 - All the files under `.idea` directory in the project root except `workspace.xml` and `tasks.xml` which store user specific settings
 - All the .iml module files that can be located in different module directories (applies to IntelliJ IDEA)

[Source](https://intellij-support.jetbrains.com/hc/en-us/articles/206544839)

## Bugs

- [Run menu shows "Nothing here"](https://youtrack.jetbrains.com/issue/IDEA-228180)
  - Disable Gradle plugin
