# Windows

## Features

- [Use a second laptop as an extended monitor](https://www.hanselman.com/blog/UseASecondLaptopAsAnExtendedMonitorWithWindows10WirelessDisplays.aspx)

## Settings

- Autostart folder: `shell:startup`
- Confirm deleting files
  - ☑ Recycle Bin → Properties → Display delete confirmation dialog
- Turn off Alt + Left Shift
  - Clock,Language, ande Region → Language → Advanced Settings → Change language bar hot keys
- Deactivate Cortana
  - GPedit.msc
  - Computer Configuration → Administrative Templates → Windows Components → Search → Allow Cortana: `disabled`
- [Disable Explorer Ads](https://www.thurrott.com/windows/windows-10/106424/windows-10-tip-turn-off-file-explorer-advertising)
  - ☐ Folder → Options → View → Show sync provider notifications
- [Enable Hibernate](https://www.pcworld.com/article/3078533/windows/how-to-add-a-hibernate-option-to-the-windows-10-start-menu.html)
- Disable " - Shortcut" text:
  - [Windows 7](https://www.howtogeek.com/howto/windows-vista/remove-shortcut-text-from-new-shortcuts-in-vista/)
  - [Windows 10](https://winaero.com/blog/change-or-disable-the-shortcut-text-for-shortcuts-in-windows-10/)
- Disable Game Bar
  - ☐ Settings → Gaming → Game Bar → Record game clips, screenshots, and broadcast using Game bar
- Activate clipboard history (WIN + V)
  - ☑ Settings → Clipboard → Clipboard History
- [Disable Intel display power saving technology](https://superuser.com/questions/1487069/how-to-disable-intel-display-power-saving-technology)

## Commands

- Kill all processes by name:
  - `taskkill /F /IM app.exe`
- Find and repair damaged files:
  - `sfc /scannow`

## Locations

- Taskbar icons: `%APPDATA%\Microsoft\Internet Explorer\Quick Launch\User Pinned\TaskBar`

## Free up space

- [Disk Cleanup](https://support.microsoft.com/en-us/help/4026616/windows-10-disk-cleanup)
- [Clean Up the WinSxS Folder](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/clean-up-the-winsxs-folder)
  - `Dism.exe /online /Cleanup-Image /StartComponentCleanup /ResetBase`
  - `Dism.exe /online /Cleanup-Image /SPSuperseded`

## Linux tools under Git Bash

- [pacman](http://www2.futureware.at/~nickoe/msys2-mirror/msys/x86_64/)
  - [rsync](https://blog.tiger-workshop.com/add-rsync-to-git-bash-for-windows/)

Unpack zst files:

- Get `zstd.exe` from PeaZip portable
- Unpack: `zstd.exe -d <file>`

## Enable Group Policy Editor in Home edition

- Run `enable-gpedit.bat`
- https://windowsreport.com/enable-gpedit-windows-11/

## Enforce privacy & security

- [awesome-windows-privacy](https://github.com/TemporalAgent7/awesome-windows-privacy)
- [privacy.sexy](https://privacy.sexy/)
  - [Source code](https://github.com/undergroundwires/privacy.sexy/tree/master/src/application/collections)
- [Sophia Script](https://github.com/farag2/Sophia-Script-for-Windows)
  - [Sophia Script Wrapper GUI](https://benchtweakgaming.com/2020/11/12/windows-10-debloat-tool/)
- gpedit.msc → Computerkonfiguration → Administrative Vorlagen → Windows-Komponenten → Datensammlung und Vorabversionen
  - Telemetrie zulassen: Deaktiviert
- Aufgabenplanung → Microsoft → Windows → Application Experience
  - Microsoft Compatibility Appraiser: Deaktiviert
